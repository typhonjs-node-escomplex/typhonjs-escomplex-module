/*global require, suite, setup, teardown, test */

'use strict';

var assert = require('chai').assert;

var parsers = require('./parsers');
var testconfig = require('./testconfig');

if (testconfig.modules['moduleCore']) {
    parsers.forEach(function (parser) {
        suite('(' + parser.name + '): module (Core):', function () {
            suite('function call:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('parseInt("10", 10);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct physical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.physical, 1);
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });

                test('aggregate has correct cyclomatic complexity density', function () {
                    assert.strictEqual(report.aggregate.cyclomaticDensity, 100);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });

                test('aggregate has correct Halstead operator identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operators.identifiers,
                        report.aggregate.halstead.operators.distinct
                    );
                });

                test('aggregate has correct Halstead operand identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operands.identifiers,
                        report.aggregate.halstead.operands.distinct
                    );
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 4);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
                });

                test('aggregate has correct Halstead volume', function () {
                    assert.strictEqual(report.aggregate.halstead.volume, 8);
                });

                test('aggregate has correct Halstead effort', function () {
                    assert.strictEqual(report.aggregate.halstead.effort, 4);
                });

                test('aggregate has correct Halstead bugs', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.bugs), 0);
                });

                test('aggregate has correct Halstead time', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.time), 0);
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(Math.round(report.maintainability), 166);
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 0);
                });

                test('mean logical LOC is correct', function () {
                    assert.strictEqual(report.loc, 1);
                });

                test('mean cyclomatic complexity is correct', function () {
                    assert.strictEqual(report.cyclomatic, 1);
                });

                test('mean Halstead effort is correct', function () {
                    assert.strictEqual(report.effort, 4);
                });

                test('mean parameter count is correct', function () {
                    assert.strictEqual(report.params, 0);
                });

                test('dependencies is correct', function () {
                    assert.lengthOf(report.dependencies, 0);
                });
            });

            suite('condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if (true) { "foo"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct physical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.physical, 1);
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('aggregate has correct cyclomatic complexity density', function () {
                    assert.strictEqual(report.aggregate.cyclomaticDensity, 100);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });

                test('aggregate has correct Halstead operator identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operators.identifiers,
                        report.aggregate.halstead.operators.distinct
                    );
                });

                test('aggregate has correct Halstead operand identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operands.identifiers,
                        report.aggregate.halstead.operands.distinct
                    );
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 3);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
                });

                test('aggregate has correct Halstead volume', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.volume), 5);
                });

                test('aggregate has correct Halstead effort', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.effort), 2);
                });

                test('aggregate has correct Halstead bugs', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.bugs), 0);
                });

                test('aggregate has correct Halstead time', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.time), 0);
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(Math.round(report.maintainability), 157);
                });

                test('mean logical LOC is correct', function () {
                    assert.strictEqual(report.loc, 2);
                });

                test('mean cyclomatic complexity is correct', function () {
                    assert.strictEqual(report.cyclomatic, 2);
                });

                test('mean Halstead effort is correct', function () {
                    assert.strictEqual(report.effort, 2.3774437510817346);
                });

                test('mean parameter count is correct', function () {
                    assert.strictEqual(report.params, 0);
                });

                test('dependencies is correct', function () {
                    assert.lengthOf(report.dependencies, 0);
                });
            });

            suite('condition with alternate:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if (true) { "foo"; } else { "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct physical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.physical, 1);
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('functions is empty', function () {
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

                test('aggregate has correct Halstead operator identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operators.identifiers,
                        report.aggregate.halstead.operators.distinct
                    );
                });

                test('aggregate has correct Halstead operand identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operands.identifiers,
                        report.aggregate.halstead.operands.distinct
                    );
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 5);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 1);
                });

                test('aggregate has correct Halstead volume', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.volume), 12);
                });

                test('aggregate has correct Halstead effort', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.effort), 12);
                });

                test('aggregate has correct Halstead bugs', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.bugs), 0);
                });

                test('aggregate has correct Halstead time', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.time), 1);
                });
            });

            suite('dual condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if (true) { "foo"; } if (false) { "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });

                test('aggregate has correct Halstead operator identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operators.identifiers,
                        report.aggregate.halstead.operators.distinct
                    );
                });

                test('aggregate has correct Halstead operand identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operands.identifiers,
                        report.aggregate.halstead.operands.distinct
                    );
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 6);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
                });
            });

            suite('alternate dual condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if (true) { "foo"; } else if (false) { "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 5);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });

                test('aggregate has correct Halstead operator identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operators.identifiers,
                        report.aggregate.halstead.operators.distinct
                    );
                });

                test('aggregate has correct Halstead operand identifier length', function () {
                    assert.lengthOf(
                        report.aggregate.halstead.operands.identifiers,
                        report.aggregate.halstead.operands.distinct
                    );
                });
            });

            suite('nested condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if (true) { "foo"; if (false) { "bar"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });
            });

            suite('switch statement:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'switch (Date.now()) { case 1: "foo"; break; case 2: "bar"; break; default: "baz"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 9);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('aggregate has correct cyclomatic complexity density', function () {
                    assert.isTrue(report.aggregate.cyclomaticDensity > 33.3);
                    assert.isTrue(report.aggregate.cyclomaticDensity < 33.4);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 8);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 7);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
                });
            });

            suite('switch statement with fall-through case:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('switch (Date.now()) { case 1: case 2: "foo"; break; default: "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 7);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 7);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 6);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                });
            });

            suite('switch statement containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'switch (Date.now()) { ' +
                        '    case 1: "foo"; break; ' +
                        '    case 2: "bar"; break; ' +
                        '    default: if (true) { "baz"; } ' +
                        '}');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 10);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 4);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 9);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 7);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 8);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
                });
            });

            suite('for loop:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var i; for (i = 0; i < 10; i += 1) { "foo"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 5);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 8);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 13);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 4);
                });
            });

            suite('for loop containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var i; for (i = 0; i < 10; i += 1) { if (true) { "foo"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 6);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 9);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                });
            });

            suite('for...in loop:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var property; for (property in { foo: "bar", baz: "qux" }) { "wibble"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 5);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 5);
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
                    assert.strictEqual(report.aggregate.halstead.length, 12);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
                });
            });

            suite('for...in loop containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'var property, object = { foo: "bar", baz: "qux" }; ' +
                        'for (property in object) { if (object.hasOwnProperty(property)) { "wibble"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 9);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 8);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 12);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
                });
            });

            suite('while loop:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('while (true) { "foo"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('while loop containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('while (true) { if (true) { "foo"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('do...while loop:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('do { "foo"; } while (true)');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('functions is empty', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('do...while loop containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('do { if (true) { "foo"; } } while (true)');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('try...catch:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { "foo"; } catch (e) { e.message; }');
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

                test('functions is empty', function () {
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });
            });

            suite('try containing condition', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { if (true) { "foo"; } } catch (e) { "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('catch containing condition', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { "foo"; } catch (e) { if (true) { "bar"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('catch with finally containing condition', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { "foo"; } catch (e) { } finally { if (true) { "bar"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('function declaration:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { "bar"; }');
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
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });

                test('aggregate has correct Halstead length', function () {
                    assert.strictEqual(report.aggregate.halstead.length, 3);
                });

                test('aggregate has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
                });

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
                });

                test('function has correct Halstead length', function () {
                    assert.strictEqual(report.functions[0].halstead.length, 1);
                });

                test('function has correct Halstead vocabulary', function () {
                    assert.strictEqual(report.functions[0].halstead.vocabulary, 1);
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
                    assert.strictEqual(report.functions[0].halstead.bugs, 0);
                });

                test('function has correct Halstead time', function () {
                    assert.strictEqual(report.functions[0].halstead.time, 0);
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(report.maintainability, 171);
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 0);
                });
            });

            suite('nested function declaration:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { bar(); function bar () { "baz"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 2);
                });

                test('first function has correct logical lines of code', function () {
                    assert.strictEqual(report.functions[0].sloc.logical, 2);
                });

                test('second function has correct logical lines of code', function () {
                    assert.strictEqual(report.functions[1].sloc.logical, 1);
                });

                test('first function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, 'foo');
                });

                test('second function has correct name', function () {
                    assert.strictEqual(report.functions[1].name, 'bar');
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 3);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });
            });

            suite('function declaration containing condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { if (true) { "bar"; } }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomatic, 2);
                });

                test('function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomaticDensity, 100);
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
            });

            suite('assignment expression', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = "bar";');
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

                test('functions is empty', function () {
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
            });

            suite('ternary condtional expression assigned to variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = true ? "bar" : "baz";');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('nested ternary condtional expression:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = true ? "bar" : (false ? "baz" : "qux");');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 6);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                });
            });

            suite('logical or expression assigned to variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = true || false;');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
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
            });

            suite('anonymous function assigned to variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = function () { "bar"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
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
            });

            suite('named function assigned to variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = function bar () { "baz"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, 'bar');
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });
            });

            suite('ternary condtional expression returned from function:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { return true ? "bar" : "baz"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomatic, 2);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('logical or expression returned from function:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { return true || false; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomatic, 2);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });
            });

            suite('anonymous function returned from function:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { return function () { "bar"; }; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 2);
                });

                test('first function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, 'foo');
                });

                test('second function is anonymous', function () {
                    assert.strictEqual(report.functions[1].name, '<anonymous>');
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 3);
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
            });

            suite('named function returned from function:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { return function bar () { "baz"; }; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('second function has correct name', function () {
                    assert.strictEqual(report.functions[1].name, 'bar');
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 3);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
                });
            });

            suite('ternary condtional expression passed as argument:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('parseInt("10", true ? 10 : 8);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 2);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 5);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
                });
            });

            suite('logical or expression passed as argument:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('parseInt("10", 10 || 8);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });
            });

            suite('anonymous function passed as argument:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('setTimeout(function () { "foo"; }, 1000);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function is anonymous', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('named function passed as argument:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('setTimeout(function foo () { "bar"; }, 1000);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, 'foo');
                });
            });

            suite('logical AND expression:', function () {
                test('aggregate has correct cyclomatic complexity', function () {
                    var report = parser.analyse('var foo = true && false;', {});
                    assert.strictEqual(report.cyclomatic, 2);
                });
            });

            suite('logical OR expression with logicalor false:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = true || false;', {logicalor: false});
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });
            });

            suite('switch statement with switchcase false:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'switch (Date.now()) { case 1: "foo"; break; case 2: "bar"; break; default: "baz"; }',
                        {switchcase: false});
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });
            });

            suite('for...in loop with forin true:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'var property; for (property in { foo: "bar", baz: "qux" }) { "wibble"; }', {forin: true});
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });
            });

            suite('try...catch with trycatch true:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { "foo"; } catch (e) { e.message; }', {trycatch: true});
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });
            });

            suite('IIFE:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        '(function (foo) { if (foo === "foo") { console.log(foo); return; } "bar"; }("foo"));');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 6);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomatic, 2);
                });

                test('function has correct parameter count', function () {
                    assert.strictEqual(report.functions[0].params, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 7);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 9);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 1);
                });
            });

            suite('logical and condition:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('if ("foo" && "bar") { "baz"; }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 3);
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
            });

            suite('call on function object:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('(function () { "foo"; }).call(this);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('anonymous function assigned to property:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = {}; foo.bar = function () { "foobar"; };');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
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
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                });
            });

            suite('anonymous function assigned to property of literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('"".bar = function () { "bar"; };');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 2);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
                });
            });

            suite('empty object literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = {};');
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
            });

            suite('function property of literal object:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = { bar: "bar", baz: function () { "baz"; } };');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
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
            });

            suite('duplicate function properties of literal object:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'var foo = { bar: function () { if (true) { "bar"; } }, bar: function () { "bar"; } };');
                });

                teardown(function () {
                    report = undefined;
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 2);
                });

                test('first function has correct name', function () {
                    assert.strictEqual(report.functions[0].name, '<anonymous>');
                });

                test('second function has correct name', function () {
                    assert.strictEqual(report.functions[1].name, '<anonymous>');
                });

                test('first function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[0].cyclomatic, 2);
                });

                test('second function has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.functions[1].cyclomatic, 1);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 2);
                });
            });

            suite('throw exception:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('try { throw new Error("foo"); } catch (e) { alert(error.message); }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 5);
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
            });

            suite('prefix and postfix increment:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var a = 0; ++a; a++;');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 3);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 4);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 4);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('array literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('[ "foo", "bar" ];');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 1);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 0);
                });

                test('aggregate has correct cyclomatic complexity', function () {
                    assert.strictEqual(report.aggregate.cyclomatic, 1);
                });

                test('aggregate has correct Halstead total operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.total, 1);
                });

                test('aggregate has correct Halstead distinct operators', function () {
                    assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
                });

                test('aggregate has correct Halstead total operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.total, 2);
                });

                test('aggregate has correct Halstead distinct operands', function () {
                    assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
                });
            });

            suite('multiple physical lines:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        '// This is a\n// multi-line\n// comment.\nparseInt(\n\t(function () {\n\t\t// Moar\n\t\t' +
                        '// commentz!\n\t\treturn [\n\t\t\t"1",\n\t\t\t"0"\n\t\t].join("");\n\t}()),\n\t10\n);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct physical lines of code', function () {
                    switch (parser.name) {
                        // acorn & babylon sets the start location at line 1 (first comment) instead of line 4 (first
                        // line of code).
                        case 'acorn':
                        case 'babylon':
                            assert.strictEqual(report.aggregate.sloc.physical, 14);
                            break;
                        default:
                            assert.strictEqual(report.aggregate.sloc.physical, 11);
                    }
                });

                test('aggregate has correct logical lines of code', function () {
                    assert.strictEqual(report.aggregate.sloc.logical, 4);
                });

                test('functions has correct length', function () {
                    assert.lengthOf(report.functions, 1);
                });

                test('function has correct physical lines of code', function () {
                    assert.strictEqual(report.functions[0].sloc.physical, 8);
                });

                test('function has correct logical lines of code', function () {
                    assert.strictEqual(report.functions[0].sloc.logical, 2);
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(Math.round(report.maintainability), 147);
                });
            });

            suite('multiple functions:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'function foo (a, b) { if (a) { b(a); } else { a(b); } } ' +
                        'function bar (c, d) { var i; for (i = 0; i < c.length; i += 1) { d += 1; } console.log(d); }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(Math.round(report.maintainability), 128);
                });

                test('first function has correct parameter count', function () {
                    assert.strictEqual(report.functions[0].params, 2);
                });

                test('second function has correct parameter count', function () {
                    assert.strictEqual(report.functions[1].params, 2);
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 4);
                });

                test('mean logical LOC is correct', function () {
                    assert.strictEqual(report.loc, 4);
                });

                test('mean cyclomatic complexity is correct', function () {
                    assert.strictEqual(report.cyclomatic, 2);
                });

                test('mean Halstead effort is correct', function () {
                    assert.strictEqual(report.effort, 374.7133081440434);
                });

                test('mean parameter count is correct', function () {
                    assert.strictEqual(report.params, 2);
                });
            });

            suite('issue 3 / reddit.ISV_Damocles:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'var callback = arguments[arguments.length-1] instanceof Function ? ' +
                        'arguments[arguments.length-1] : function() {};');
                });

                teardown(function () {
                    report = undefined;
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(report.maintainability, 171);
                });
            });

            suite('empty return:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { return; }');
                });

                teardown(function () {
                    report = undefined;
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

                test('aggregate has correct Halstead difficulty', function () {
                    assert.strictEqual(report.aggregate.halstead.difficulty, 1);
                });

                test('function has correct Halstead difficulty', function () {
                    assert.strictEqual(report.functions[0].halstead.difficulty, 0.5);
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(report.maintainability, 171);
                });
            });

            suite('Empty nested functions', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo () { function bar () {} }');
                });

                teardown(function () {
                    report = undefined;
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(report.maintainability, 171);
                });
            });

            suite('Microsoft variant maintainability index:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'function foo (a, b) { if (a) { b(a); } else { a(b); } }' +
                        'function bar (c, d) { var i; for (i = 0; i < c.length; i += 1) { d += 1; } console.log(d); }',
                        {newmi: true});
                });

                teardown(function () {
                    report = undefined;
                });

                test('maintainability index is correct', function () {
                    assert.strictEqual(Math.round(report.maintainability), 75);
                });
            });

            suite('Functions with consistent parameter counts:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('function foo (a) {} function bar (b) {} function baz (c) {}');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 3);
                });

                test('mean parameter count is correct', function () {
                    assert.strictEqual(report.params, 1);
                });
            });

            suite('Functions with inconsistent parameter counts:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'function foo (a, b, c, d, e) {} function bar (a, b, c, d, e) {} function baz (a) {}');
                });

                teardown(function () {
                    report = undefined;
                });

                test('aggregate has correct parameter count', function () {
                    assert.strictEqual(report.aggregate.params, 11);
                });

                test('mean parameter count is correct', function () {
                    assert.strictEqual(report.params, 11 / 3);
                });
            });

            suite('CommonJS require literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require("./foo");');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.isObject(report.dependencies[0]);
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, './foo');
                    assert.strictEqual(report.dependencies[0].type, 'cjs');
                });
            });

            suite('alternative CommonJS require literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require("./bar");');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].path, './bar');
                });
            });

            suite('CommonJS require multiple:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require("./foo");\nrequire("./bar");\n\nrequire("./baz");');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 3);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, './foo');
                    assert.strictEqual(report.dependencies[1].line, 2);
                    assert.strictEqual(report.dependencies[1].path, './bar');
                    assert.strictEqual(report.dependencies[2].line, 4);
                    assert.strictEqual(report.dependencies[2].path, './baz');
                });
            });

            suite('CommonJS require variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = "./foo";require(foo);');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.isObject(report.dependencies[0]);
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, '* dynamic dependency *');
                    assert.strictEqual(report.dependencies[0].type, 'cjs');
                });
            });

            suite('AMD require literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require([ "foo" ], function (foo) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.isObject(report.dependencies[0]);
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, 'foo');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                });
            });

            suite('alternative AMD require literal:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require([ "bar" ], function (barModule) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].path, 'bar');
                });
            });

            suite('AMD require multiple:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require([ "foo", "bar", "baz" ], function (foo, bar, baz) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 3);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, 'foo');
                    assert.strictEqual(report.dependencies[1].line, 1);
                    assert.strictEqual(report.dependencies[1].path, 'bar');
                    assert.strictEqual(report.dependencies[2].line, 1);
                    assert.strictEqual(report.dependencies[2].path, 'baz');
                    assert.strictEqual(report.dependencies[2].type, 'amd');
                });
            });

            suite('AMD require variable:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = "foo";\nrequire([ foo ], function (foo) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 2);
                    assert.strictEqual(report.dependencies[0].path, '* dynamic dependency *');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                });
            });

            suite('AMD require variable array:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('var foo = [ "foo" ];\nrequire(foo, function (foo) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 2);
                    assert.strictEqual(report.dependencies[0].path, '* dynamic dependencies *');
                });
            });

            suite('AMD require.config:', function () {
                var report;

                setup(function () {
                    report = parser.analyse(
                        'require.config({\n\tpaths: {\n\t\tfoo: "path/to/foo",\n\t\tbaz: "../wibble"\n\t}\n});\n' +
                        'require([ "foo", "bar", "baz" ], function (foo, bar, baz) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 3);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 7);
                    assert.strictEqual(report.dependencies[0].path, 'path/to/foo');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                    assert.strictEqual(report.dependencies[1].line, 7);
                    assert.strictEqual(report.dependencies[1].path, 'bar');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                    assert.strictEqual(report.dependencies[2].line, 7);
                    assert.strictEqual(report.dependencies[2].path, '../wibble');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                });
            });

            suite('AMD require literal string:', function () {
                var report;

                setup(function () {
                    report = parser.analyse('require("foo", function (foo) {});');
                });

                teardown(function () {
                    report = undefined;
                });

                test('dependencies has correct length', function () {
                    assert.lengthOf(report.dependencies, 1);
                });

                test('dependencies are correct', function () {
                    assert.strictEqual(report.dependencies[0].line, 1);
                    assert.strictEqual(report.dependencies[0].path, 'foo');
                    assert.strictEqual(report.dependencies[0].type, 'amd');
                });
            });
        });
    });
}
