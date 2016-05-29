/*global require, suite, setup, teardown, test */

'use strict';

var assert;

assert = require('chai').assert;

var parsers = require('./parsers');
var testconfig = require('./testconfig');

if (testconfig.modules['moduleBabylon']) {
    parsers.forEach(function (parser) {
        if (parser.name !== 'babylon') { return; }

        suite('(' + parser.name + '): module (ES7):', function () {
            suite('Experimental', function () {
                suite('object spread / rest:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };');
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

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 8);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 13);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 9);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 21);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 13);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 121);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 0);
                    });
                });

                suite('object spread / rest (abbreviated React example):', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse(
                            'function expectTree(rootID, expectedTree, parentPath) {\n' +
                            '    var childIDs = [];\n' +
                            '    var path = "TEST";\n' +
                            '    if (expectedTree.children !== undefined) {\n' +
                            '        for (var i = 0; i < childIDs.length; i++) {\n' +
                            '           expectTree(\n' +
                            '               childIDs[i],\n' +
                            '               { parentID: rootID, ...expectedTree.children[i] },\n' +
                            '               path,\n' +
                            '           );\n' +
                            '        }\n' +
                            '    }\n' +
                            '}\n');
                    });

                    teardown(function () {
                        report = undefined;
                    });

                    test('aggregate has correct logical lines of code', function () {
                        assert.strictEqual(report.aggregate.sloc.logical, 8);
                    });

                    test('aggregate has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.aggregate.cyclomatic, 3);
                    });

                    test('functions has correct length', function () {
                        assert.lengthOf(report.functions, 1);
                    });

                    test('function has correct name', function () {
                        assert.strictEqual(report.functions[0].name, 'expectTree');
                    });

                    test('function has correct physical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.physical, 13);
                    });

                    test('function has correct logical lines of code', function () {
                        assert.strictEqual(report.functions[0].sloc.logical, 7);
                    });

                    test('function has correct cyclomatic complexity', function () {
                        assert.strictEqual(report.functions[0].cyclomatic, 3);
                    });

                    test('function has correct parameter count', function () {
                        assert.strictEqual(report.functions[0].params, 3);
                    });

                    test('aggregate has correct Halstead total operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.total, 21);
                    });

                    test('aggregate has correct Halstead distinct operators', function () {
                        assert.strictEqual(report.aggregate.halstead.operators.distinct, 13);
                    });

                    test('aggregate has correct Halstead total operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.total, 25);
                    });

                    test('aggregate has correct Halstead distinct operands', function () {
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 13);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 46);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 26);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 13);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 44);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 25);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.difficulty), 11);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 204);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 2263);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 126);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 113);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 3);
                    });
                });
            });

            suite('Flow Typing', function () {
                suite('basic function:', function () {
                    var report;

                    setup(function () {
                        report = parser.analyse('function bar(x: string, y: number): string { return x.length * y; }');
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
                        assert.strictEqual(report.functions[0].params, 2);
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
                        assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
                    });

                    test('aggregate has correct Halstead length', function () {
                        assert.strictEqual(report.aggregate.halstead.length, 10);
                    });

                    test('aggregate has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
                    });

                    test('aggregate has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
                    });

                    test('function has correct Halstead length', function () {
                        assert.strictEqual(report.functions[0].halstead.length, 8);
                    });

                    test('function has correct Halstead vocabulary', function () {
                        assert.strictEqual(report.functions[0].halstead.vocabulary, 6);
                    });

                    test('function has correct Halstead difficulty', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.difficulty), 3);
                    });

                    test('function has correct Halstead volume', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.volume), 21);
                    });

                    test('function has correct Halstead effort', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.effort), 52);
                    });

                    test('function has correct Halstead bugs', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.bugs), 0);
                    });

                    test('function has correct Halstead time', function () {
                        assert.strictEqual(Math.round(report.functions[0].halstead.time), 3);
                    });

                    test('maintainability index is correct', function () {
                        assert.strictEqual(Math.round(report.maintainability), 158);
                    });

                    test('aggregate has correct parameter count', function () {
                        assert.strictEqual(report.aggregate.params, 2);
                    });
                });
            });
        });
    });
}
