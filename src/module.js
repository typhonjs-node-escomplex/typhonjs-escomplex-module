/*globals exports, require */

'use strict';

var safeName =                  require('./safeName');
var syntaxDefinitionsESTree =   require('./walkerSyntaxESTree');
var syntaxDefinitionsBabylon =  require('./walkerSyntaxBabylon');
var walker =                    require('./walker');

var report;
var syntaxes = [];

exports.analyse = analyse;

function analyse (ast, options) {
    // TODO: Asynchronise

    var settings, currentReport, clearDependencies = true, scopeStack = [];

    if (typeof ast !== 'object') { throw new TypeError('Invalid syntax tree'); }

    if (typeof walker !== 'object') { throw new TypeError('Invalid walker'); }
    if (typeof walker.walk !== 'function') { throw new TypeError('Invalid walker.walk method'); }

    if (typeof options === 'object') {
        settings = options;
    } else {
        settings = getDefaultSettings();
    }

    // TODO: loc is moz-specific, move to walker?
    report = createReport(ast.loc);

    syntaxDefinitionsESTree.get(syntaxes, settings);
    syntaxDefinitionsBabylon.get(syntaxes, settings);

    var nodes;

    if (Array.isArray(ast.body)) {
        nodes = ast.body;
    }
    else if (typeof ast.program === 'object' && Array.isArray(ast.program.body)) {
        nodes = ast.program.body;
    }
    else {
        throw new TypeError('Invalid syntax tree body');
    }

    walker.walk(nodes, {
        enterNode: function(node, parent) {
            var syntax = syntaxes[node.type];

            if (syntax !== null && typeof syntax === 'object') {
                processNode(node, parent, syntax);

                if (syntax.newScope) { createScope(node, parent); }

                return syntax.ignoreKeys;
            }
        },

        exitNode: function(node) {
            var syntax = syntaxes[node.type];

            if (syntax !== null && typeof syntax === 'object') {
                if (syntax.newScope) { popScope(); }
            }
        }
    });

    calculateMetrics(settings);

    return report;

    function processNode (node, parent, syntax) {
        processLloc(node, syntax, currentReport);
        processCyclomatic(node, syntax, currentReport);
        processOperators(node, parent, syntax, currentReport);
        processOperands(node, parent, syntax, currentReport);

        if (processDependencies(node, syntax, clearDependencies)) {
            // HACK: This will fail with async or if other syntax than CallExpression introduces dependencies.
            // TODO: Come up with a less crude approach.
            clearDependencies = false;
        }
    }

    function createScope (node, parent) {
        // ESTree has a parent node which defines the method name with a child FunctionExpression / FunctionDeclaration.
        // Babylon AST only has ClassMethod with a child `key` providing the method name.
        var name = parent && parent.type === 'MethodDefinition' ? safeName(parent.key) : safeName(node.id || node.key);

        currentReport = createFunctionReport(name, node.loc, node.params.length);

        report.functions.push(currentReport);
        report.aggregate.params += node.params.length;

        scopeStack.push(currentReport);
    }

    function popScope () {
        scopeStack.pop();

        if (scopeStack.length > 0) {
            currentReport = scopeStack[scopeStack.length - 1];
        } else {
            currentReport = undefined;
        }
    }
}

function getDefaultSettings () {
    return {
        logicalor: true,
        switchcase: true,
        forin: false,
        trycatch: false,
        newmi: false
    };
}

function createReport (lines) {
    return {
        aggregate: createFunctionReport(undefined, lines, 0),
        functions: [],
        dependencies: []
    };
}

function createFunctionReport (name, lines, params) {
    var result = {
        name: name,
        sloc: {
            logical: 0
        },
        cyclomatic: 1,
        halstead: createInitialHalsteadState(),
        params: params
    };

    if (typeof lines === 'object') {
        result.line = lines.start.line;
        result.sloc.physical = lines.end.line - lines.start.line + 1;
    }

    return result;
}

function createInitialHalsteadState () {
    return {
        operators: createInitialHalsteadItemState(),
        operands: createInitialHalsteadItemState()
    };
}

function createInitialHalsteadItemState () {
    return {
        distinct: 0,
        total: 0,
        identifiers: []
    };
}

function processLloc (node, syntax, currentReport) {
    incrementCounter(node, syntax, 'lloc', incrementLogicalSloc, currentReport);
}

function incrementCounter (node, syntax, name, incrementFn, currentReport) {
    var amount = syntax[name];

    if (typeof amount === 'number') {
        incrementFn(currentReport, amount);
    } else if (typeof amount === 'function') {
        incrementFn(currentReport, amount(node));
    }
}

function incrementLogicalSloc (currentReport, amount) {
    report.aggregate.sloc.logical += amount;

    if (currentReport) {
        currentReport.sloc.logical += amount;
    }
}

function processCyclomatic (node, syntax, currentReport) {
    incrementCounter(node, syntax, 'cyclomatic', incrementCyclomatic, currentReport);
}

function incrementCyclomatic (currentReport, amount) {
    report.aggregate.cyclomatic += amount;

    if (currentReport) {
        currentReport.cyclomatic += amount;
    }
}

function processOperators (node, parent, syntax, currentReport) {
    processHalsteadMetric(node, parent, syntax, 'operators', currentReport);
}

function processOperands (node, parent, syntax, currentReport) {
    processHalsteadMetric(node, parent, syntax, 'operands', currentReport);
}

function processHalsteadMetric (node, parent, syntax, metric, currentReport) {
    if (Array.isArray(syntax[metric])) {
        syntax[metric].forEach(function (s) {
            var identifier;

            if (typeof s.identifier === 'function') {
                identifier = s.identifier(node, parent);
            } else {
                identifier = s.identifier;
            }
//console.log('!! moduleTest - processHalsteadMetric - node.type: ' + node.type +'; metric: ' + metric +'; identifier: ' + identifier);
            if (typeof identifier !== 'undefined' && (typeof s.filter !== 'function' || s.filter(node) === true)) {
                // Handle the case when a node / syntax returns an array of identifiers.
                if (Array.isArray(identifier)) {
                    identifier.forEach(function (element) {
                        halsteadItemEncountered(currentReport, metric, element);
                    });
                }
                else {
                    halsteadItemEncountered(currentReport, metric, identifier);
                }
            }
        });
    }
}

function halsteadItemEncountered (currentReport, metric, identifier) {
    if (currentReport) {
        incrementHalsteadItems(currentReport, metric, identifier);
    }

    incrementHalsteadItems(report.aggregate, metric, identifier);
}

function incrementHalsteadItems (baseReport, metric, identifier) {
    incrementDistinctHalsteadItems(baseReport, metric, identifier);
    incrementTotalHalsteadItems(baseReport, metric);
}

function incrementDistinctHalsteadItems (baseReport, metric, identifier) {
    if (Object.prototype.hasOwnProperty(identifier)) {
        // Avoid clashes with built-in property names.
        incrementDistinctHalsteadItems(baseReport, metric, '_' + identifier);
    } else if (isHalsteadMetricDistinct(baseReport, metric, identifier)) {
        recordDistinctHalsteadMetric(baseReport, metric, identifier);
        incrementHalsteadMetric(baseReport, metric, 'distinct');
    }
}

function isHalsteadMetricDistinct (baseReport, metric, identifier) {
    return baseReport.halstead[metric].identifiers.indexOf(identifier) === -1;
}

function recordDistinctHalsteadMetric (baseReport, metric, identifier) {
    baseReport.halstead[metric].identifiers.push(identifier);
}

function incrementHalsteadMetric (baseReport, metric, type) {
    if (baseReport) {
        baseReport.halstead[metric][type] += 1;
    }
}

function incrementTotalHalsteadItems (baseReport, metric) {
    incrementHalsteadMetric(baseReport, metric, 'total');
}

function processDependencies (node, syntax, clearDependencies) {
    var dependencies;

    if (typeof syntax.dependencies === 'function') {
        dependencies = syntax.dependencies(node, clearDependencies);
        if (typeof dependencies === 'object' || Array.isArray(dependencies)) {
            report.dependencies = report.dependencies.concat(dependencies);
        }

        return true;
    }

    return false;
}

function calculateMetrics (settings) {
    var count, indices, sums, averages;

    count = report.functions.length;
    indices = {
        loc: 0,
        cyclomatic: 1,
        effort: 2,
        params: 3
    };
    sums = [ 0, 0, 0, 0 ];

    report.functions.forEach(function (functionReport) {
        calculateCyclomaticDensity(functionReport);
        calculateHalsteadMetrics(functionReport.halstead);
        sumMaintainabilityMetrics(sums, indices, functionReport);
    });

    calculateCyclomaticDensity(report.aggregate);
    calculateHalsteadMetrics(report.aggregate.halstead);
    if (count === 0) {
        // Sane handling of modules that contain no functions.
        sumMaintainabilityMetrics(sums, indices, report.aggregate);
        count = 1;
    }

    averages = sums.map(function (sum) { return sum / count; });

    calculateMaintainabilityIndex(
        averages[indices.effort],
        averages[indices.cyclomatic],
        averages[indices.loc],
        settings
    );

    Object.keys(indices).forEach(function (index) {
        report[index] = averages[indices[index]];
    });
}

function calculateCyclomaticDensity (data) {
    data.cyclomaticDensity = (data.cyclomatic / data.sloc.logical) * 100;
}

function calculateHalsteadMetrics (data) {
    data.length = data.operators.total + data.operands.total;
    if (data.length === 0) {
        nilHalsteadMetrics(data);
    } else {
        data.vocabulary = data.operators.distinct + data.operands.distinct;
        data.difficulty =
            (data.operators.distinct / 2) *
            (data.operands.distinct === 0 ? 1 : data.operands.total / data.operands.distinct);
        data.volume = data.length * (Math.log(data.vocabulary) / Math.log(2));
        data.effort = data.difficulty * data.volume;
        data.bugs = data.volume / 3000;
        data.time = data.effort / 18;
    }
}

function nilHalsteadMetrics (data) {
    data.vocabulary =
        data.difficulty =
            data.volume =
                data.effort =
                    data.bugs =
                        data.time =
                            0;
}

function sumMaintainabilityMetrics (sums, indices, data) {
    sums[indices.loc] += data.sloc.logical;
    sums[indices.cyclomatic] += data.cyclomatic;
    sums[indices.effort] += data.halstead.effort;
    sums[indices.params] += data.params;
}

function calculateMaintainabilityIndex (averageEffort, averageCyclomatic, averageLoc, settings) {
    if (averageCyclomatic === 0) {
        throw new Error('Encountered function with cyclomatic complexity zero!');
    }

    report.maintainability =
        171 -
        (3.42 * Math.log(averageEffort)) -
        (0.23 * Math.log(averageCyclomatic)) -
        (16.2 * Math.log(averageLoc));

    if (report.maintainability > 171) {
        report.maintainability = 171;
    }

    if (settings.newmi) {
        report.maintainability = Math.max(0, (report.maintainability * 100) / 171);
    }
}

