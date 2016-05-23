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
            setSyntax(syntaxes, name, settings);
        }
    }

    return syntaxes;
}

function loadSyntaxModules () {
    var modules = [];

    modules['ArrayPattern'] = ArrayPattern;
    modules['ArrowFunctionExpression'] = ArrowFunctionExpression;
    modules['AssignmentPattern'] = AssignmentPattern;
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

function ArrayPattern () { return traits.actualise(0, 0, '[]', undefined, 'elements'); }

function ArrowFunctionExpression () {
    return traits.actualise(0, 0, 'arrowfunction', undefined, [ 'params', 'body' ], undefined, true);
}

function AssignmentPattern () {
    return traits.actualise(0, 0, function (node) { return node.operator; }, undefined, [ 'left', 'right' ],
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

function ClassBody () { return traits.actualise(0, 0, undefined, undefined, 'body'); }

function ClassDeclaration() { return traits.actualise(1, 0, 'class', undefined, ['id', 'body', 'superClass']); }

function ClassExpression() { return traits.actualise(1, 0, 'class', undefined, ['id', 'body', 'superClass']); }

function ExportAllDeclaration () { return traits.actualise(0, 0, ['export', '*'], undefined, 'source'); }

function ExportDefaultDeclaration() { return traits.actualise(0, 0, ['export', 'default'], undefined, 'declaration'); }

function ExportNamedDeclaration() {
    return traits.actualise(0, 0, ['export', '{}'], undefined, ['declaration', 'specifiers']);
}

function ExportSpecifier() {
    return traits.actualise(0, 0,
        function (node) {
            return node.exported.name === node.local.name ? undefined : 'as';
        },
        undefined, ['exported', 'local']
    );
}

function ForOfStatement (settings) {
    return traits.actualise(1, function () { return settings.forin ? 1 : 0; }, 'forof', undefined,
        [ 'left', 'right', 'body' ]);
}

function ImportDeclaration () {
    return traits.actualise(0, 0, ['import', 'from'], undefined, 'specifiers', undefined, undefined,
        function (node) {
            return {
                line: node.source.loc.start.line,
                path: node.source.value,
                type: 'esm'
            };
        }
    );
}

function ImportDefaultSpecifier() { return traits.actualise(0, 0, undefined, undefined, 'local'); }

function ImportNamespaceSpecifier() { return traits.actualise(0, 0, ['import', '*', 'as'], undefined, 'local'); }

function ImportSpecifier() {
    return traits.actualise(0, 0,
        function (node) {
            return node.imported.name === node.local.name ? '{}' : ['{}', 'as'];
        },
        undefined, ['local', 'imported']
    );
}

function MetaProperty () {
    return traits.actualise(0, 0, '.',
        // esprima doesn't follow the ESTree spec and `meta` & `property` are strings instead of Identifier nodes.
        function(node) {
            return typeof node.meta === 'string' && typeof node.property === 'string' ? [node.meta, node.property] :
                undefined;
        },
        [ 'meta', 'property' ]
    );
}

function MethodDefinition () {
    return traits.actualise(0, 0, undefined, undefined, 'value',
        // With class methods the FunctionExpression is stored in `value`, but doesn't have an `id` for the name which
        // needs to be assigned from the `key` Identifier. Since this assignable name is forwarded on the child `key`
        // is skipped from processing.
        function (node) { return safeName(node.key); }
    );
}

function ObjectPattern () { return traits.actualise(0, 0, '{}', undefined, 'properties'); }

function RestElement() {
    return traits.actualise(0, 0, undefined, undefined, 'argument',
        function (node) {
            return '...' + safeName(node.argument);
        }
    );
}

function SpreadElement() {
    return traits.actualise(0, 0, undefined, undefined, 'argument',
        function (node) {
            return '...' + safeName(node.argument);
        }
    );
}

function Super () { return traits.actualise(0, 0, undefined, 'super'); }

function TaggedTemplateExpression () { return traits.actualise(0, 0, undefined, undefined, [ 'tag', 'quasi' ]); }

function TemplateElement () {
    return traits.actualise(0, 0, undefined,
        function (node) {
            return node.value.cooked !== '' ? node.value.cooked : undefined;
        }
    );
}

function TemplateLiteral () { return traits.actualise(0, 0, undefined, undefined, [ 'quasis', 'expressions' ]); }

function YieldExpression () { return traits.actualise(1, 0, 'yield', undefined, [ 'argument' ]); }
