'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');

var parsers = require('./parsers');
var testconfig = require('./testconfig');
var walker = require('../src/walker');

// List of test cases taken directly from the ESTree
// spec (https://github.com/estree/estree/blob/master/es6.md)
if (testconfig.modules['walkerES6']) {
    parsers.forEach(function (parser) {
        suite('(' + parser.name + '): AST Walker (ES6)', function () {

            setup(function () {
                this.callbacks = {
                    processNode: sinon.stub(),
                    createScope: sinon.stub(),
                    popScope: sinon.stub()
                };

                this.walk = function parse (code) {
                    var tree = parser.parse(code);
                    walker.walk(tree, {}, this.callbacks);
                };
            });

            suite('Functions', function () {
                test('generator function declaration', function () {
                    this.walk('function* foo() {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];
                    assert.strictEqual(declaration.type, 'FunctionDeclaration');
                    assert.strictEqual(declaration.id.name, 'foo');
                    assert.strictEqual(declaration.id.type, 'Identifier');
                    assert.strictEqual(declaration.generator, true);
                    assert.strictEqual(declaration.params.length, 0);
                    assert.strictEqual(declaration.body.type, 'BlockStatement');
                    assert.strictEqual(declaration.body.body.length, 0);
                });

                test('generator function expression', function () {
                    this.walk('(function* foo() {})');
                    var expression = this.callbacks.processNode.firstCall.args[0].expression;
                    assert.strictEqual(expression.type, 'FunctionExpression');
                    assert.strictEqual(expression.id.name, 'foo');
                    assert.strictEqual(expression.generator, true);
                });
            });

            suite('Statements', function () {
                test('for-of statement');
            });

            suite('Declarations', function () {
                test('let declaration', function () {
                    this.walk('let a = 1');

                    var statement = this.callbacks.processNode.firstCall.args[0];
                    assert.strictEqual(statement.type, 'VariableDeclaration');
                    assert.strictEqual(statement.kind, 'let');
                    assert.strictEqual(statement.declarations.length, 1);
                });

                test('const declaration', function () {
                    this.walk('const a = 1');

                    var statement = this.callbacks.processNode.firstCall.args[0];
                    assert.strictEqual(statement.type, 'VariableDeclaration');
                    assert.strictEqual(statement.kind, 'const');
                    assert.strictEqual(statement.declarations.length, 1);
                });

                test('let declarator', function () {
                    this.walk('let a = 1');

                    var statement = this.callbacks.processNode.firstCall.args[0];
                    var declarator = this.callbacks.processNode.secondCall.args[0];
                    assert.strictEqual(statement.declarations[0], declarator);
                    assert.strictEqual(declarator.id.type, 'Identifier');
                    assert.strictEqual(declarator.id.name, 'a');
                });

                test('const declarator', function () {
                    this.walk('const a = 1');

                    var statement = this.callbacks.processNode.firstCall.args[0];
                    var declarator = this.callbacks.processNode.secondCall.args[0];
                    assert.strictEqual(statement.declarations[0], declarator);
                    assert.strictEqual(declarator.id.type, 'Identifier');
                    assert.strictEqual(declarator.id.name, 'a');
                });
            });

            suite('Expressions', function () {
                test('super expression');
                test('call expression');
                test('member expression');
                test('spread element');
                test('arrow function expression');
                test('yield expression');
            });

            suite('Template Literals', function () {
                test('template literal');
                test('tagged template expression');
                test('template element');
            });

            suite('Patterns', function () {
                test('object pattern');
                test('array pattern');
                test('rest element');
                test('assignment pattern');
            });

            suite('Classes', function () {
                test('class', function () {
                    this.walk('class Foo {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.isObject(declaration.id);
                    assert.isNull(declaration.superClass);
                    assert.isObject(declaration.body);
                });

                test('class body', function () {
                    this.walk('class Foo {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0].body;

                    assert.isObject(declaration);
                    assert.strictEqual(declaration.type, 'ClassBody');
                    assert.isArray(declaration.body);
                });

                test('method definition', function () {
                    this.walk('class Foo { constructor() {} }');

                    var declaration = this.callbacks.processNode.firstCall.args[0].body.body[0];

                    assert.isObject(declaration);
                    switch (parser.name)
                    {
                        case 'babylon':
                            assert.strictEqual(declaration.type, 'ClassMethod');
                            break;
                        default:
                            assert.strictEqual(declaration.type, 'MethodDefinition');
                            break;
                    }
                    assert.isObject(declaration.key);
                    assert.strictEqual(declaration.key.type, 'Identifier');
                    assert.strictEqual(declaration.key.name, 'constructor');
                });

                test('class declaration', function () {
                    this.walk('class Foo {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ClassDeclaration');
                    assert.strictEqual(declaration.id.name, 'Foo');
                    assert.strictEqual(declaration.id.type, 'Identifier');
                    assert.isNull(declaration.superClass);
                });

                test('meta property (class)', function () {
                    this.walk('class Foo { constructor() { new.target.name; } }');

                    var declaration;

                    switch (parser.name)
                    {
                        case 'babylon':
                            declaration = this.callbacks.processNode.firstCall.args[0].body.body[0].body.body[0].expression.object;
                            break;
                        default:
                            declaration = this.callbacks.processNode.firstCall.args[0].body.body[0].value.body.body[0].expression.object;
                            break;
                    }

                    assert.strictEqual(declaration.type, 'MetaProperty');

                    switch (parser.name)
                    {
                        case 'esprima':
                            // esprima does not follow the ESTree spec (meta and property should be Identifier nodes)
                            assert.strictEqual(declaration.meta, 'new');
                            assert.strictEqual(declaration.property, 'target');
                            break;
                        default:
                            assert.strictEqual(declaration.meta.type, 'Identifier');
                            assert.strictEqual(declaration.meta.name, 'new');
                            assert.strictEqual(declaration.property.type, 'Identifier');
                            assert.strictEqual(declaration.property.name, 'target');
                            break;
                    }
                });
            });

            suite('Modules', function () {
                // test('module declaration');  // This is a root interface not represented in AST
                // test('module specifier');    // This is a root interface not represented in AST

                // test('import declaration');  // This is a root node for all import variations

                test('import specifier', function () {
                    this.walk('import {foo} from "mod.js"');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ImportDeclaration');
                    assert.isArray(declaration.specifiers);
                    assert.isObject(declaration.specifiers[0]);
                    assert.strictEqual(declaration.specifiers[0].type, 'ImportSpecifier');
                    assert.isObject(declaration.specifiers[0].local);
                    assert.strictEqual(declaration.specifiers[0].local.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].local.name, 'foo');
                });

                test('import default specifier', function () {
                    this.walk('import foo from "mod.js"');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ImportDeclaration');
                    assert.isArray(declaration.specifiers);
                    assert.isObject(declaration.specifiers[0]);
                    assert.strictEqual(declaration.specifiers[0].type, 'ImportDefaultSpecifier');
                    assert.isObject(declaration.specifiers[0].local);
                    assert.strictEqual(declaration.specifiers[0].local.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].local.name, 'foo');
                });

                test('import namespace specifier', function () {
                    this.walk('import * as foo from "mod.js"');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ImportDeclaration');
                    assert.isArray(declaration.specifiers);
                    assert.isObject(declaration.specifiers[0]);
                    assert.strictEqual(declaration.specifiers[0].type, 'ImportNamespaceSpecifier');
                    assert.isObject(declaration.specifiers[0].local);
                    assert.strictEqual(declaration.specifiers[0].local.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].local.name, 'foo');
                });

                // test('export specifier');    // This is a node found in the specifiers array of ExportNamedDeclaration

                test('export named declaration', function () {
                    this.walk('export {foo}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportNamedDeclaration');
                    assert.isArray(declaration.specifiers);
                    assert.isObject(declaration.specifiers[0]);
                    assert.strictEqual(declaration.specifiers[0].type, 'ExportSpecifier');
                    assert.isObject(declaration.specifiers[0].exported);
                    assert.strictEqual(declaration.specifiers[0].exported.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].exported.name, 'foo');
                    assert.isObject(declaration.specifiers[0].local);
                    assert.strictEqual(declaration.specifiers[0].local.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].local.name, 'foo');
                });

                test('export named declaration (aliased)', function () {
                    this.walk('export { bar as foo }');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportNamedDeclaration');
                    assert.isArray(declaration.specifiers);
                    assert.isObject(declaration.specifiers[0]);
                    assert.strictEqual(declaration.specifiers[0].type, 'ExportSpecifier');
                    assert.isObject(declaration.specifiers[0].exported);
                    assert.strictEqual(declaration.specifiers[0].exported.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].exported.name, 'foo');
                    assert.isObject(declaration.specifiers[0].local);
                    assert.strictEqual(declaration.specifiers[0].local.type, 'Identifier');
                    assert.strictEqual(declaration.specifiers[0].local.name, 'bar');
                });

                test('export all declaration', function () {
                    this.walk('export * from "mod"');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportAllDeclaration');
                    assert.isObject(declaration.source);
                    switch (parser.name)
                    {
                        case 'babylon':
                            assert.strictEqual(declaration.source.type, 'StringLiteral');
                            break;
                        default:
                            assert.strictEqual(declaration.source.type, 'Literal');
                            break;
                    }
                    assert.strictEqual(declaration.source.value, 'mod');
                });

                test('export default declaration (class)', function () {
                    this.walk('export default class Foo {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportDefaultDeclaration');
                    assert.isObject(declaration.declaration);
                    assert.strictEqual(declaration.declaration.type, 'ClassDeclaration');
                    assert.strictEqual(declaration.declaration.id.name, 'Foo');
                    assert.strictEqual(declaration.declaration.id.type, 'Identifier');
                    assert.isNull(declaration.declaration.superClass);
                    assert.strictEqual(declaration.declaration.body.type, 'ClassBody');
                    assert.strictEqual(declaration.declaration.body.body.length, 0);
                });

                test('export default declaration (function)', function () {
                    this.walk('export default function foo () {}');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportDefaultDeclaration');
                    assert.isObject(declaration.declaration);
                    assert.strictEqual(declaration.declaration.type, 'FunctionDeclaration');
                    assert.strictEqual(declaration.declaration.id.name, 'foo');
                    assert.strictEqual(declaration.declaration.id.type, 'Identifier');
                    assert.strictEqual(declaration.declaration.params.length, 0);
                    assert.strictEqual(declaration.declaration.body.type, 'BlockStatement');
                    assert.strictEqual(declaration.declaration.body.body.length, 0);
                });

                test('export default declaration (literal)', function () {
                    this.walk('export default "foobar"');

                    var declaration = this.callbacks.processNode.firstCall.args[0];

                    assert.strictEqual(declaration.type, 'ExportDefaultDeclaration');
                    assert.isObject(declaration.declaration);
                    switch (parser.name)
                    {
                        case 'babylon':
                            assert.strictEqual(declaration.declaration.type, 'StringLiteral');
                            break;
                        default:
                            assert.strictEqual(declaration.declaration.type, 'Literal');
                            break;
                    }
                    assert.strictEqual(declaration.declaration.value, 'foobar');
                });
            });
        });
    });
}
