/*globals require, exports */

'use strict';

var safeName =  require('./traits/safeName');
var actualise = require('./traits/actualise');

var syntaxModules = loadSyntaxModules();

var amdPathAliases = {};

exports.get = getSyntax;

function getSyntax (syntaxes, settings) {
    var name;

    for (name in syntaxModules) {
        if (syntaxModules.hasOwnProperty(name)) {
            setSyntax(syntaxes, name, settings);
        }
    }

    return syntaxes;
}

function loadSyntaxModules () {
    var modules = [];

    // Core / ES5 ESTree AST nodes (https://github.com/estree/estree/blob/master/spec.md)
    modules['ArrayExpression'] = ArrayExpression;
    modules['AssignmentExpression'] = AssignmentExpression;
    modules['BlockStatement'] = BlockStatement;
    modules['BinaryExpression'] = BinaryExpression;
    modules['BreakStatement'] = BreakStatement;
    modules['CallExpression'] = CallExpression;
    modules['CatchClause'] = CatchClause;
    modules['ConditionalExpression'] = ConditionalExpression;
    modules['ContinueStatement'] = ContinueStatement;
    modules['DoWhileStatement'] = DoWhileStatement;
    modules['EmptyStatement'] = EmptyStatement;
    modules['ExpressionStatement'] = ExpressionStatement;
    modules['ForInStatement'] = ForInStatement;
    modules['ForStatement'] = ForStatement;
    modules['FunctionDeclaration'] = FunctionDeclaration;
    modules['FunctionExpression'] = FunctionExpression;
    modules['Identifier'] = Identifier;
    modules['IfStatement'] = IfStatement;
    modules['LabeledStatement'] = LabeledStatement;
    modules['Literal'] = Literal;
    modules['LogicalExpression'] = LogicalExpression;
    modules['MemberExpression'] = MemberExpression;
    modules['NewExpression'] = NewExpression;
    modules['ObjectExpression'] = ObjectExpression;
    modules['Property'] = Property;
    modules['ReturnStatement'] = ReturnStatement;
    modules['SequenceExpression'] = SequenceExpression;
    modules['SwitchCase'] = SwitchCase;
    modules['SwitchStatement'] = SwitchStatement;
    modules['ThisExpression'] = ThisExpression;
    modules['ThrowStatement'] = ThrowStatement;
    modules['TryStatement'] = TryStatement;
    modules['UnaryExpression'] = UnaryExpression;
    modules['UpdateExpression'] = UpdateExpression;
    modules['VariableDeclaration'] = VariableDeclaration;
    modules['VariableDeclarator'] = VariableDeclarator;
    modules['WhileStatement'] = WhileStatement;
    modules['WithStatement'] = WithStatement;

    // ES6 ESTree AST nodes (https://github.com/estree/estree/blob/master/es6.md)
    modules['AssignmentPattern'] = AssignmentPattern;
    modules['ArrayPattern'] = ArrayPattern;
    modules['ArrowFunctionExpression'] = ArrowFunctionExpression;
    modules['ClassBody'] = ClassBody;
    modules['ClassDeclaration'] = ClassDeclaration;
    modules['ClassExpression'] = ClassExpression;
    modules['ExportAllDeclaration'] = ExportAllDeclaration;
    modules['ExportDefaultDeclaration'] = ExportDefaultDeclaration;
    modules['ExportNamedDeclaration'] = ExportNamedDeclaration;
    modules['ExportSpecifier'] = ExportSpecifier;
    modules['ForOfStatement'] = ForOfStatement;
    modules['ImportDeclaration'] = ImportDeclaration;
    modules['ImportDefaultSpecifier'] = ImportDefaultSpecifier;
    modules['ImportNamespaceSpecifier'] = ImportNamespaceSpecifier;
    modules['ImportSpecifier'] = ImportSpecifier;
    modules['MetaProperty'] = MetaProperty;
    modules['MethodDefinition'] = MethodDefinition;
    modules['ObjectPattern'] = ObjectPattern;
    modules['RestElement'] = RestElement;
    modules['SpreadElement'] = SpreadElement;
    modules['Super'] = Super;
    modules['TaggedTemplateExpression'] = TaggedTemplateExpression;
    modules['TemplateElement'] = TemplateElement;
    modules['TemplateLiteral'] = TemplateLiteral;
    modules['YieldExpression'] = YieldExpression;

    return modules;
}

function setSyntax (syntaxes, name, settings) {
    syntaxes[name] = syntaxModules[name](settings);
}

// Core / ES5 ESTree AST nodes --------------------------------------------------------------------------------------

function ArrayExpression () { return actualise(0, 0, '[]'); }

function AssignmentExpression () { return actualise(0, 0, function (node) { return node.operator; }); }

function BlockStatement () { return actualise(0, 0); }

function BinaryExpression () { return actualise(0, 0, function (node) { return node.operator; }); }

function BreakStatement () { return actualise(1, 0, 'break'); }

function CallExpression () {
    return actualise(
        function (node) { return node.callee.type === 'FunctionExpression' ? 1 : 0; },  // lloc
        0,                                                                              // cyclomatic
        '()',                                                                           // operators
        undefined,                                                                      // operands
        undefined,                                                                      // ignoreKeys
        undefined,                                                                      // newScope
        function (node, clearAliases) {
            // TODO: This prohibits async running. Refine by passing in module id as key for amdPathAliases.
            if (clearAliases) { amdPathAliases = {}; }

            if (node.callee.type === 'Identifier' && node.callee.name === 'require') { return processRequire(node); }

            if (node.callee.type === 'MemberExpression' && node.callee.object.type === 'Identifier' &&
                node.callee.object.name === 'require' && node.callee.property.type === 'Identifier' &&
                node.callee.property.name === 'config') {
                processAmdRequireConfig(node.arguments);
            }
        }
    );

    function processRequire (node) {
        if (node.arguments.length === 1) { return processCommonJsRequire(node); }
        if (node.arguments.length === 2) { return processAmdRequire(node); }
    }

    function processCommonJsRequire (node) {
        return createDependency(node, resolveRequireDependency(node.arguments[0]), 'cjs');
    }

    // Note: that `StringLiteral` supports Babylon AST.
    function resolveRequireDependency (dependency, resolver) {
        if (dependency.type === 'Literal' || dependency.type === 'StringLiteral') {
            if (typeof resolver === 'function') {
                return resolver(dependency.value);
            }

            return dependency.value;
        }

        return '* dynamic dependency *';
    }

    function createDependency (node, path, type) { return { line: node.loc.start.line, path: path, type: type }; }

    function processAmdRequire (node) {
        if (node.arguments[0].type === 'ArrayExpression') {
            return node.arguments[0].elements.map(processAmdRequireItem.bind(null, node));
        }

        // Note: that `StringLiteral` supports Babylon AST.
        if (node.arguments[0].type === 'Literal' || node.arguments[0].type === 'StringLiteral') {
            return processAmdRequireItem(node, node.arguments[0]);
        }

        return createDependency(node, '* dynamic dependencies *', 'amd');
    }

    function processAmdRequireItem (node, item) {
        return createDependency(node, resolveRequireDependency(item, resolveAmdRequireDependency), 'amd');
    }

    function resolveAmdRequireDependency (dependency) { return amdPathAliases[dependency] || dependency; }

    function processAmdRequireConfig (args) {
        if (args.length === 1 && args[0].type === 'ObjectExpression') {
            args[0].properties.forEach(processAmdRequireConfigProperty);
        }
    }

    function processAmdRequireConfigProperty (property) {
        if (property.key.type === 'Identifier' && property.key.name === 'paths' &&
            property.value.type === 'ObjectExpression') {
            property.value.properties.forEach(setAmdPathAlias);
        }
    }

    function setAmdPathAlias (alias) {
        // Note: that `StringLiteral` supports Babylon AST.
        if (alias.key.type === 'Identifier' && (alias.value.type === 'Literal' ||
            alias.value.type === 'StringLiteral')) {
            amdPathAliases[alias.key.name] = alias.value.value;
        }
    }
}

function CatchClause (settings) { return actualise(1, function () { return settings.trycatch ? 1 : 0; }, 'catch'); }

function ConditionalExpression () { return actualise(0, 1, ':?'); }

function ContinueStatement () { return actualise(1, 0, 'continue'); }

function DoWhileStatement () { return actualise(2, function (node) { return node.test ? 1 : 0; }, 'dowhile'); }

function EmptyStatement () { return actualise(0, 0); }

function ExpressionStatement () { return actualise(1, 0); }

function ForInStatement (settings) { return actualise(1, function () { return settings.forin ? 1 : 0; }, 'forin'); }

function ForStatement () { return actualise(1, function (node) { return node.test ? 1 : 0; }, 'for'); }

// Note: The function name (node.id) is returned as an operand and excluded from traversal as to not
// be included in the function operand calculations.
function FunctionDeclaration () {
    return actualise(1, 0,
        function (node) {
            return typeof node.generator === 'boolean' && node.generator ? 'generatorfunction' : 'function';
        },
        function (node, parent) {
            return parent && parent.type === 'MethodDefinition' ? safeName(parent.key) : safeName(node.id);
        },
        'id', true);
}

// Note: The function name (node.id) is returned as an operand and excluded from traversal as to not
// be included in the function operand calculations.
function FunctionExpression () {
    return actualise(0, 0,
        function (node) {
            return typeof node.generator === 'boolean' && node.generator ? 'generatorfunction' : 'function';
        },
        function (node, parent) {
            return parent && parent.type === 'MethodDefinition' ? safeName(parent.key) : safeName(node.id);
        },
        'id', true
    );
}

function Identifier () { return actualise(0, 0, undefined, function (node) { return node.name; }); }

function IfStatement () {
    return actualise(
        function (node) { return node.alternate ? 2 : 1; },
        1,
        [ 'if', { identifier: 'else', filter: function (node) { return !!node.alternate; } } ]
    );
}

function LabeledStatement () { return actualise(0, 0); }

// Avoid conflicts between string literals and identifiers.
function Literal () {
    return actualise(
        0, 0, undefined,
        function (node) { return typeof node.value === 'string' ? '"' + node.value + '"' : node.value; }
    );
}

function LogicalExpression (settings) {
    return actualise(0,
        function (node) {
            var isAnd = node.operator === '&&';
            var isOr = node.operator === '||';
            return (isAnd || (settings.logicalor && isOr)) ? 1 : 0;
        },
        function (node) { return node.operator; }
    );
}

function MemberExpression () {
    return actualise(
        function (node) {
            return ['ObjectExpression', 'ArrayExpression', 'FunctionExpression'].indexOf(
                node.object.type) === -1 ? 0 : 1;
        },
        0, '.'
    );
}

function NewExpression () {
    return actualise( function (node) { return node.callee.type === 'FunctionExpression' ? 1 : 0; }, 0, 'new');
}

function ObjectExpression () { return actualise(0, 0, '{}'); }

// Note that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
function Property () {
    return actualise(1, 0,
        function (node) {
            return typeof node.shorthand === 'undefined' ? ':' :
            typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : undefined;
        }
    );
}

function ReturnStatement () { return actualise(1, 0, 'return'); }

function SequenceExpression () { return actualise(0, 0); }

function SwitchCase (settings) {
    return actualise(1,
        function (node) { return settings.switchcase && node.test ? 1 : 0; },
        function (node) { return node.test ? 'case' : 'default'; }
    );
}

function SwitchStatement () { return actualise(1, 0, 'switch'); }

function ThisExpression () { return actualise(0, 0, undefined, 'this'); }

function ThrowStatement () { return actualise(1, 0, 'throw'); }

// esprima has duplicate nodes the catch block; `handler` is the actual ESTree spec.
function TryStatement () { return actualise(1, 0, undefined, undefined, ['guardedHandlers', 'handlers']); }

function UnaryExpression () {
    return actualise(0, 0, function (node) { return node.operator + ' (' + (node.prefix ? 'pre' : 'post') + 'fix)'; });
}

function UpdateExpression () {
    return actualise(0, 0, function (node) { return node.operator + ' (' + (node.prefix ? 'pre' : 'post') + 'fix)'; });
}

function VariableDeclaration () { return actualise(0, 0, function (node) { return node.kind; } ); }

function VariableDeclarator () {
    return actualise(1, 0, { identifier: '=', filter: function (node) { return !!node.init; } });
}

function WhileStatement () { return actualise(1, function (node) { return node.test ? 1 : 0; }, 'while' ); }

function WithStatement () { return actualise(1, 0, 'with'); }

// ES6 ESTree AST nodes ---------------------------------------------------------------------------------------------

function AssignmentPattern () {
    return actualise(0, 0, function (node) { return node.operator; }, undefined,
        function (node) {
            return node.left.type === 'MemberExpression' ? safeName(node.left.object) + '.' + node.left.property.name :
            typeof node.left.id !== 'undefined' ? safeName(node.left.id) : safeName(node.left);
        }
    );
}

function ArrayPattern () { return actualise(0, 0, '[]'); }

function ArrowFunctionExpression () { return actualise(0, 0, 'arrowfunction', undefined, undefined, true); }

function ClassBody () { return actualise(0, 0); }

function ClassDeclaration() { return actualise(1, 0, 'class'); }

function ClassExpression() { return actualise(1, 0, 'class'); }

function ExportAllDeclaration () { return actualise(0, 0, ['export', '*']); }

function ExportDefaultDeclaration() { return actualise(0, 0, ['export', 'default']); }

function ExportNamedDeclaration() { return actualise(0, 0, ['export', '{}']); }

function ExportSpecifier() {
    return actualise(0, 0, function (node) { return node.exported.name === node.local.name ? undefined : 'as'; });
}

function ForOfStatement (settings) { return actualise(1, function () { return settings.forin ? 1 : 0; }, 'forof'); }

function ImportDeclaration () {
    return actualise(0, 0, ['import', 'from'], undefined, undefined, undefined,
        function (node) { return { line: node.source.loc.start.line, path: node.source.value, type: 'esm' }; }
    );
}

function ImportDefaultSpecifier() { return actualise(0, 0); }

function ImportNamespaceSpecifier() { return actualise(0, 0, ['import', '*', 'as']); }

function ImportSpecifier() {
    return actualise(0, 0, function (node) { return node.imported.name === node.local.name ? '{}' : ['{}', 'as']; });
}

function MetaProperty () {
    return actualise(0, 0, '.',
        // esprima doesn't follow the ESTree spec and `meta` & `property` are strings instead of Identifier nodes.
        function(node) {
            return typeof node.meta === 'string' && typeof node.property === 'string' ? [node.meta, node.property] :
                undefined;
        }
    );
}

function MethodDefinition () {
    return actualise(0, 0,
        function (node) {
            var operators = [];
            if (node.kind && (node.kind === 'get' || node.kind === 'set')) { operators.push(node.kind); }
            if (typeof node.static === 'boolean' && node.static) { operators.push('static'); }
            return operators;
        },
        undefined,
        'key'   // Note: must skip as the following FunctionExpression assigns the name.
    );
}

function ObjectPattern () { return actualise(0, 0, '{}'); }

function RestElement() { return actualise(0, 0, '... (rest)'); }

function SpreadElement() { return actualise(0, 0, '... (spread)'); }

function Super () { return actualise(0, 0, undefined, 'super'); }

function TaggedTemplateExpression () { return actualise(0, 0); }

function TemplateElement () {
    return actualise(0, 0, undefined, function (node) {
        return node.value.cooked !== '' ? node.value.cooked : undefined;
    });
}

function TemplateLiteral () { return actualise(0, 0); }

function YieldExpression () { return actualise(1, 0, 'yield'); }
