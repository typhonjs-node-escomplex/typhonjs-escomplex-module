/*global require, suite, setup, teardown, test */

'use strict';

var assert;

assert = require('chai').assert;

var parsers = require('./parsers');
var testconfig = require('./testconfig');

if (testconfig.modules['moduleES6']) {
    parsers.forEach(function (parser) {
        suite('(' + parser.name + '): module (ES6):', function () {
            suite('Functions', function () {
                suite('generator functions:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('function* foo() {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 0);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 2);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 2);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 0);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 0);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 0);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 0);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Statements', function () {
                suite('for...of:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('for (let value of [10, 20, 30]) {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has forof Halstead operator identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('forof'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 8);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 148);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Declarations', function () {
                suite('let / const variable declarations', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('let foo = "bar"; const bar = "foo";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has let and const Halstead operator identifiers', function () {
                        assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('let'), 0);
                        assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('const'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 8);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 148);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Expressions', function () {
                suite('CallExpression (super):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo {}; class Bar extends Foo { constructor() { super(); } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has super Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('super'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('MemberExpression (super):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { constructor() { this.foobar = "foobar"; } }; ' +
                            'class Bar extends Foo { constructor() { let test = super.foobar; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 4);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 2);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[1].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[1].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[1].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[1].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[1].params, 0);
                    });

                    test('aggregate has super Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('super'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 9);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 11);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 20);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 13);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 5);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 12);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[1].halstead.length, 6);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[1].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[1].halstead.difficulty, 1.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[1].halstead.volume), 16);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[1].halstead.effort), 23);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[1].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[1].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 161);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ArrayExpression (spread)', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const iter = [2, 3, 4]; const spread = [1, ...iter, 5];');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has spread and ...iter Halstead operand identifiers', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('...iter'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 10);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 16);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 144);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('CallExpression (spread):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const iter = [2, 3, 4]; const foo = (b, a, r) => {}; foo(...iter);');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 0);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 3);
                    });

                    test('aggregate has spread and ...iter Halstead operand identifiers', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('...iter'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 11);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 9);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 18);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 14);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 3);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 3);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 5);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 0);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 3);
                    });
                });

                suite('ArrowFunctionExpression (explicit):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('(x, y) => { return x + y; };');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, '<anonymous>');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 2);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 7);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 6);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 4);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 2);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 24);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 160);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 2);
                    });
                });

                suite('ArrowFunctionExpression (implicit):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('(x, y) => x + y;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, '<anonymous>');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 0);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 2);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 3);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 8);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 8);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 2);
                    });
                });

                suite('YieldExpression (yield):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('function* foo() { let index = 0; yield index++; }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 4);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 3);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 7);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 3);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 18);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 54);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 140);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('YieldExpression (yield*):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('function* foo() { yield* [1, 2, 3]; }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 2);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 8);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 6);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 16);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 16);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 150);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Template Literals', function () {
                suite('TemplateLiteral / TemplateElement (basic):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const foo = `bar`;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 4);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 164);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('TemplateLiteral / TemplateElement (variable):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const baz = "bar"; const foo = `fuz${baz}`;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 148);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('TemplateLiteral / TemplateElement (function):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const baz = "bar"; const foo = `fuz${JSON.stringify(baz)}`;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 13);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 144);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('TaggedTemplateExpression:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const foo = tagged`bar`;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 5);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Patterns', function () {
                suite('ObjectPattern (destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const bar = { a: 1, b: 2, c: 3 }; const { a, b, c } = bar;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 8);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate does not have <anonymous> (object) Halstead operand identifier', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), -1);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 9);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 15);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 24);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 117);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ObjectPattern (anonymous destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const { a, b, c } = { a: 1, b: 2, c: 3 };');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 7);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has <anonymous> (array) Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 13);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 20);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 120);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ObjectPattern (computed object property names and anonymous destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const id = "z"; const { [id]: foo } = { z: "bar" };');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 4);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has <anonymous> (array) Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 8);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 15);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 132);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ObjectPattern 2 (anonymous destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('let a, b; ({a, b} = { a:1, b:2 });');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 7);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has <anonymous> (array) Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 11);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 17);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 121);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ArrayPattern (destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const foo = [1, 2]; let [a, b] = foo;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate does not have <anonymous> (object) Halstead operand identifier', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), -1);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 13);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 144);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ArrayPattern (anonymous destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('let [a, b] = [1, 2];');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has <anonymous> (array) Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 158);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('ArrayPattern / RestElement (anonymous destructuring assignment):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const [a, b, ...rest] = [1, 2, 3, 4, 5];');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has ...rest Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('...rest'), 0);
                    });

                    test('aggregate has <anonymous> (array) Halstead operand identifier', function () {
                        assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 9);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 9);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 13);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 12);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 156);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('FunctionDeclaration `defaults` (esprima) / AssignmentPattern (espree):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('function foo(first, bar = "baz", ...items) {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 0);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 3);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 4);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 4);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 8);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 0);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 3);
                    });
                });
            });

            suite('Classes', function () {
                suite('class declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 2);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 2);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ superclass:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Bar {} class Foo extends Bar {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 5);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 154);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ constructor:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { constructor() { this.bar = 1; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 5);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 12);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { bar() { this.baz = 1; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 5);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 12);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ getter method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { get bar() { return "bar"; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ setter method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { set bar(data) { this._bar = data; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 1);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 10);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 6);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 16);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 16);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 162);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 1);
                    });
                });

                suite('class declaration w/ static method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { static bar() { return "bar"; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ static method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { static bar() { return "bar"; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class declaration w/ constructor + meta property:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('class Foo { constructor() { new.target.name; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 4);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 10);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 5);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 165);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 4);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 151);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression (named):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class Foo {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 5);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 148);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression w/ superclass:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Bar = class {}; const Foo = class extends Bar {};');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 4);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 135);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression (named) w/ superclass:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Bar = class Bar {}; const Foo = class Foo extends Bar {};');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 4);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 11);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 133);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });


                suite('class expression w/ constructor:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { constructor() { this.bar = 1; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 11);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 5);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 12);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression w/ method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { bar() { this.baz = 1; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 11);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 5);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 12);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 12);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression w/ getter method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { get bar() { return "bar"; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 8);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression w/ setter method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { set bar(data) { this._bar = data; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 1);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 12);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 6);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 1);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 16);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 16);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 162);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 1);
                    });
                });

                suite('class expression w/ static method:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { static bar() { return "bar"; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'bar');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 8);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('class expression w/ constructor + meta property:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const Foo = class { constructor() { new.target.name; } }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 3);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'constructor');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 11);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 5);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 4);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 10);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 5);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 165);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });
            });

            suite('Modules', function () {
                suite('export all from import:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('export * from "module";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 3);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export default class declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('export default class Foo {}');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 1);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 4);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 163);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export default function declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('export default function foo () { return "bar"; }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export named from import:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('export { foo, bar } from "module";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export named function declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('export function foo () { return "bar"; }');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'foo');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 2);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export default arrow function declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const s_FOO = () => { return "bar"; }; export default s_FOO;');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 's_FOO');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 5);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export named arrow function declaration:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const s_FOO = () => { return "bar"; }; export { s_FOO };');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 's_FOO');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 10);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 6);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('export named arrow function declaration (aliased):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('const s_FOO = () => { return "bar"; }; export { s_FOO as s_BAR };');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 2);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 's_FOO');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 1);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 1);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 1);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 7);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 7);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 11);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 5);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 2);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 2);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(report.functions[0].halstead.volume, 2);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(report.functions[0].halstead.effort, 1);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 0);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(report.maintainability, 171);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('import default (1):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('import foo from "module";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 3);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 1);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, 'module');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });
                });

                suite('import default (3):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse(
                            'import foo from "./foo.js";\nimport bar from "./bar.js";\nimport baz from "./baz.js";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 9);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 1);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 3);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, './foo.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[1].line, 2);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[1].path, './bar.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[1].type, 'esm');
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[2].line, 3);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[2].path, './baz.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[2].type, 'esm');
                    });
                });

                suite('import named (1):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('import {baz} from "module";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 5);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 1);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, 'module');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });
                });

                suite('import named as (1):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('import {foo as bar} from "module";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 1);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, 'module');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });
                });

                suite('import namespace (1):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('import * as foo from "mod.js";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 5);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 1);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 6);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 2);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 1);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, 'mod.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });
                });

                suite('import mixed (4):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse(
                            'import foo from "./foo.js";\nimport {bar} from "./bar.js";\n' +
                            'import {bar as baz} from "./bar.js";\nimport * as bam from "./bam.js";');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 0);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 1);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 0);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 14);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 6);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 20);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(report.aggregate.halstead.difficulty, 3.75);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 171);
                    });

                    test('aggregate has correct dependency length', function () {
                        assert.lengthOf(report.dependencies, 4);
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[0].line, 1);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[0].path, './foo.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[0].type, 'esm');
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[1].line, 2);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[1].path, './bar.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[1].type, 'esm');
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[2].line, 3);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[2].path, './bar.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[2].type, 'esm');
                    });

                    test('aggregate has correct dependency entry[0] line', function () {
                        assert.strictEqual(report.dependencies[3].line, 4);
                    });

                    test('aggregate has correct dependency entry[0] path', function () {
                        assert.strictEqual(report.dependencies[3].path, './bam.js');
                    });

                    test('aggregate has correct dependency entry[0] type', function () {
                        assert.strictEqual(report.dependencies[3].type, 'esm');
                    });
                });
            });
        });
    });
}
