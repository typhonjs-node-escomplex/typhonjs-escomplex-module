/*globals require, exports */

'use strict';

var safeName = require('./safeName');
var traits = require('./traits');

var syntaxModules = loadSyntaxModules();

exports.get = getSyntax;

function getSyntax (syntaxes, settings) {
    var name;

    for (name in syntaxModules) {
        if (syntaxModules.hasOwnProperty(name)) {
            setSyntax (syntaxes, name, settings);
        }
    }

    return syntaxes;
}

function loadSyntaxModules () {
    var modules = [];

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

function AssignmentPattern () {
    return traits.actualise(0, 0, function (node) { return node.operator; }, undefined,
        function (node) {
            if (node.left.type === 'MemberExpression') {
                return safeName(node.left.object) + '.' + node.left.property.name;
            }
            else if (typeof node.left.id !== 'undefined') {
                return safeName(node.left.id);
            }

            return safeName(node.left);
        }
    );
}

function ArrayPattern () { return traits.actualise(0, 0, '[]'); }

function ArrowFunctionExpression () {
    return traits.actualise(0, 0, 'arrowfunction', undefined, undefined, true);
}

function ClassBody () { return traits.actualise(0, 0); }

function ClassDeclaration() { return traits.actualise(1, 0, 'class'); }

function ClassExpression() { return traits.actualise(1, 0, 'class'); }

function ExportAllDeclaration () { return traits.actualise(0, 0, ['export', '*']); }

function ExportDefaultDeclaration() { return traits.actualise(0, 0, ['export', 'default']); }

function ExportNamedDeclaration() { return traits.actualise(0, 0, ['export', '{}']); }

function ExportSpecifier() {
    return traits.actualise(0, 0, function (node) {
        return node.exported.name === node.local.name ? undefined : 'as';
    });
}

function ForOfStatement (settings) {
    return traits.actualise(1, function () { return settings.forin ? 1 : 0; }, 'forof');
}

function ImportDeclaration () {
    return traits.actualise(0, 0, ['import', 'from'], undefined, undefined, undefined,
        function (node) {
            return {
                line: node.source.loc.start.line,
                path: node.source.value,
                type: 'esm'
            };
        }
    );
}

function ImportDefaultSpecifier() { return traits.actualise(0, 0); }

function ImportNamespaceSpecifier() { return traits.actualise(0, 0, ['import', '*', 'as']); }

function ImportSpecifier() {
    return traits.actualise(0, 0,
        function (node) { return node.imported.name === node.local.name ? '{}' : ['{}', 'as']; }
    );
}

function MetaProperty () {
    return traits.actualise(0, 0, '.',
        // esprima doesn't follow the ESTree spec and `meta` & `property` are strings instead of Identifier nodes.
        function(node) {
            return typeof node.meta === 'string' && typeof node.property === 'string' ? [node.meta, node.property] :
                undefined;
        }
    );
}

function MethodDefinition () {
    return traits.actualise(0, 0,
        function (node) {
            var operators = [];
            if (node.kind && (node.kind === 'get' || node.kind === 'set')) { operators.push(node.kind); }
            if (typeof node.static === 'boolean' && node.static) { operators.push('static'); }
            return operators;
        },
        undefined,
        // Note: must skip key as the assigned name is forwarded on to FunctionExpression.
        'key'
    );
}

function ObjectPattern () { return traits.actualise(0, 0, '{}'); }

function RestElement() {
    return traits.actualise(0, 0, '... (rest)');
}

function SpreadElement() {
    return traits.actualise(0, 0, '... (spread)');
}

function Super () { return traits.actualise(0, 0, undefined, 'super'); }

function TaggedTemplateExpression () { return traits.actualise(0, 0); }

function TemplateElement () {
    return traits.actualise(0, 0, undefined, function (node) {
        return node.value.cooked !== '' ? node.value.cooked : undefined;
    });
}

function TemplateLiteral () { return traits.actualise(0, 0); }

function YieldExpression () { return traits.actualise(1, 0, 'yield'); }
