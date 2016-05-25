/*globals require, exports */

'use strict';

var safeName = require('./safeName');
var traits = require('./traits');

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

    modules['ArrayExpression'] = ArrayExpression;
    modules['AssignmentExpression'] = AssignmentExpression;
    modules['BinaryExpression'] = BinaryExpression;
    modules['BlockStatement'] = BlockStatement;
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

    return modules;
}

function setSyntax (syntaxes, name, settings) {
    syntaxes[name] = syntaxModules[name](settings);
}

function ArrayExpression () { return traits.actualise(0, 0, '[]', safeName, 'elements'); }

function AssignmentExpression () {
    return traits.actualise(0, 0,
        function (node) {
            return node.operator;
        },
        undefined,
        [ 'left', 'right' ],
        function (node) {
            if (node.left.type === 'MemberExpression') {
                return (node.left.object.type === 'ThisExpression' ? 'this' : safeName(node.left.object)) +
                    '.' + node.left.property.name;
            }
            else if (typeof node.left.id !== 'undefined') {
                return safeName(node.left.id);
            }

            return safeName(node.left);
        }
    );
}

function BinaryExpression () {
    return traits.actualise(0, 0, function (node) { return node.operator; }, undefined, [ 'left', 'right' ]);
}

function BlockStatement () { return traits.actualise(0, 0, undefined, undefined, 'body'); }

function BreakStatement () { return traits.actualise(1, 0, 'break', undefined, 'label'); }

function CallExpression () {
    return traits.actualise(
        function (node) {                                               // lloc
            return node.callee.type === 'FunctionExpression' ? 1 : 0;
        },
        0,                                                              // cyclomatic
        '()',                                                            // operators
        undefined,                                                      // operands
        [ 'arguments', 'callee' ],                                      // children
        undefined,                                                      // assignableName
        undefined,                                                      // newScope
        function (node, clearAliases) {
            if (clearAliases) {
                // TODO: This prohibits async running. Refine by passing in module id as key for amdPathAliases.
                amdPathAliases = {};
            }

            if (node.callee.type === 'Identifier' && node.callee.name === 'require') {
                return processRequire(node);
            }

            if (
                node.callee.type === 'MemberExpression' &&
                node.callee.object.type === 'Identifier' &&
                node.callee.object.name === 'require' &&
                node.callee.property.type === 'Identifier' &&
                node.callee.property.name === 'config'
            ) {
                processAmdRequireConfig(node.arguments);
            }
        }
    );
}

function CatchClause (settings) {
    return traits.actualise(1,
        function () {
            return settings.trycatch ? 1 : 0;
        },
        'catch', undefined, [ 'param', 'body' ]
    );
}

function ConditionalExpression () {
    return traits.actualise(0, 1, ':?', undefined, [ 'test', 'consequent', 'alternate' ]);
}

function ContinueStatement () { return traits.actualise(1, 0, 'continue', undefined, 'label'); }

function DoWhileStatement () {
    return traits.actualise(2,
        function (node) {
            return node.test ? 1 : 0;
        },
        'dowhile', undefined, [ 'test', 'body' ]
    );
}

function EmptyStatement () { return traits.actualise(0, 0, undefined, undefined); }

function ExpressionStatement () { return traits.actualise(1, 0, undefined, undefined, 'expression'); }

function ForInStatement (settings) {
    return traits.actualise(1,
        function () {
            return settings.forin ? 1 : 0;
        },
        'forin', undefined, [ 'left', 'right', 'body' ]
    );
}

function ForStatement () {
    return traits.actualise(1,
        function (node) {
            return node.test ? 1 : 0;
        },
        'for', undefined, [ 'init', 'test', 'update', 'body' ]
    );
}

function FunctionDeclaration () {
    return traits.actualise(1, 0, 'function',
        function (node) {
            return safeName(node.id);
        },
        // Note: For ES6 default values esprima uses `defaults` instead of AssignmentPattern ESTree node.
        [ 'params', 'body', 'defaults' ],
        undefined, true
    );
}

function FunctionExpression () {
    return traits.actualise(0, 0, 'function',
        function (node, assignedName) {
            return typeof assignedName === 'string' ? assignedName : safeName(node.id);
        },
        [ 'params', 'body' ], undefined, true
    );
}

function Identifier () {
    return traits.actualise(0, 0, undefined,
        function (node, assignedName) {
            // Potentially assign a pre-existing name (used for ES6 / spread), but ignore `<anonymous>`.
            return typeof assignedName === 'string' && assignedName !== '<anonymous>' ? assignedName : node.name;
        }
    );
}

function IfStatement () {
    return traits.actualise(
        function (node) {
            return node.alternate ? 2 : 1;
        },
        1,
        [
            'if',
            {
                identifier: 'else',
                filter: function (node) {
                    return !!node.alternate;
                }
            }
        ],
        undefined, [ 'test', 'consequent', 'alternate' ]
    );
}

function LabeledStatement () { return traits.actualise(0, 0, undefined, undefined, 'body'); }

function Literal () {
    return traits.actualise(
        0, 0, undefined,
        function (node) {
            if (typeof node.value === 'string') {
                // Avoid conflicts between string literals and identifiers.
                return '"' + node.value + '"';
            }

            return node.value;
        }
    );
}

function LogicalExpression (settings) {
    return traits.actualise(0,
        function (node) {
            var isAnd = node.operator === '&&';
            var isOr = node.operator === '||';
            return (isAnd || (settings.logicalor && isOr)) ? 1 : 0;
        },
        function (node) {
            return node.operator;
        },
        undefined, [ 'left', 'right' ]
    );
}

function MemberExpression () {
    return traits.actualise(
        function (node) {
            return ['ObjectExpression', 'ArrayExpression', 'FunctionExpression'].indexOf(
                node.object.type) === -1 ? 0 : 1;
        },
        0, '.', undefined, [ 'object', 'property' ]
    );
}

function NewExpression () {
    return traits.actualise(
        function (node) {
            return node.callee.type === 'FunctionExpression' ? 1 : 0;
        },
        0, 'new', undefined, [ 'arguments', 'callee' ]
    );
}

function ObjectExpression () { return traits.actualise(0, 0, '{}', safeName, 'properties'); }

function Property () {
    return traits.actualise(1, 0,
        function (node) {
            // Note that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
            return typeof node.shorthand === 'undefined' ? ':' :
                typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : undefined;
        },
        undefined,
        [ 'key', 'value' ],
        function (node) {
            return typeof node.shorthand === 'undefined' ? undefined :
                typeof node.shorthand === 'boolean' && !node.shorthand ? undefined : safeName(node.key);
        }
    );
}

function ReturnStatement () { return traits.actualise(1, 0, 'return', undefined, 'argument'); }

function SequenceExpression () { return traits.actualise(0, 0, undefined, undefined, 'expressions'); }

function SwitchCase (settings) {
    return traits.actualise(1,
        function (node) {
            return settings.switchcase && node.test ? 1 : 0;
        },
        function (node) {
            return node.test ? 'case' : 'default';
        },
        undefined, [ 'test', 'consequent' ]
    );
}

function SwitchStatement () { return traits.actualise(1, 0, 'switch', undefined, [ 'discriminant', 'cases' ]); }

function ThisExpression () { return traits.actualise(0, 0, undefined, 'this'); }

function ThrowStatement () { return traits.actualise(1, 0, 'throw', undefined, [ 'argument' ]); }

function TryStatement () { return traits.actualise(1, 0, undefined, undefined, [ 'block', 'handler', 'finalizer' ]); }

function UnaryExpression () {
    return traits.actualise(0, 0,
        function (node) {
            return node.operator + ' (' + (node.prefix ? 'pre' : 'post') + 'fix)';
        },
        undefined, [ 'argument' ]
    );
}

function UpdateExpression () {
    return traits.actualise(0, 0,
        function (node) {
            return node.operator + ' (' + (node.prefix ? 'pre' : 'post') + 'fix)';
        },
        undefined, [ 'argument' ]
    );
}

function VariableDeclaration () {
    return traits.actualise(0, 0,
        function (node) {
            return node.kind;
        },
        undefined, 'declarations'
    );
}

function VariableDeclarator () {
    return traits.actualise(1, 0,
        {
            identifier: '=',
            filter: function (node) {
                return !!node.init;
            }
        },
        undefined,
        [ 'id', 'init' ],
        function (node) {
            return safeName(node.id);
        }
    );
}

function WhileStatement () {
    return traits.actualise(1,
        function (node) {
            return node.test ? 1 : 0;
        },
        'while', undefined, [ 'test', 'body' ]
    );
}

function WithStatement () { return traits.actualise(1, 0, 'with', undefined, [ 'object', 'body' ]); }

// Private support functions for CallExpression ---------------------------------------------------------------------

function processRequire (node) {
    if (node.arguments.length === 1) {
        return processCommonJsRequire(node);
    }

    if (node.arguments.length === 2) {
        return processAmdRequire(node);
    }
}

function processCommonJsRequire (node) {
    return createDependency(node, resolveRequireDependency(node.arguments[0]), 'cjs');
}

function resolveRequireDependency (dependency, resolver) {
    // Note: that `StringLiteral` supports Babylon AST.
    if (dependency.type === 'Literal' || dependency.type === 'StringLiteral') {
        if (typeof resolver === 'function') {
            return resolver(dependency.value);
        }

        return dependency.value;
    }

    return '* dynamic dependency *';
}

function createDependency (node, path, type) {
    return {
        line: node.loc.start.line,
        path: path,
        type: type
    };
}

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

function resolveAmdRequireDependency (dependency) {
    return amdPathAliases[dependency] || dependency;
}

function processAmdRequireConfig (args) {
    if (args.length === 1 && args[0].type === 'ObjectExpression') {
        args[0].properties.forEach(processAmdRequireConfigProperty);
    }
}

function processAmdRequireConfigProperty (property) {
    if (property.key.type === 'Identifier' && property.key.name === 'paths' && property.value.type === 'ObjectExpression') {
        property.value.properties.forEach(setAmdPathAlias);
    }
}

function setAmdPathAlias (alias) {
    // Note: that `StringLiteral` supports Babylon AST.
    if (alias.key.type === 'Identifier' && (alias.value.type === 'Literal' || alias.value.type === 'StringLiteral')) {
        amdPathAliases[alias.key.name] = alias.value.value;
    }
}
