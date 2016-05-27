'use strict';

var assert, modulePath;

assert = require('chai').assert;

modulePath = '../src/traits';
var testconfig = require('./testconfig');

if (testconfig.modules['traits']) {
    suite('index:', function () {
        var index;

        setup(function () {
            index = require(modulePath);
        });

        teardown(function () {
            index = undefined;
        });

        suite('require:', function () {
            test('require does not throw', function () {
                assert.doesNotThrow(function () {
                    require(modulePath);
                });
            });

            test('require returns object', function () {
                assert.isObject(require(modulePath));
            });

            test('actualise function is exported', function () {
                assert.isFunction(index.actualise);
            });

            test('actualise does not throw', function () {
                assert.doesNotThrow(function () {
                    index.actualise();
                });
            });

            test('actualiseOperands function is exported', function () {
                assert.isFunction(index.actualiseOperands);
            });

            test('actualiseOperands throws when identifiers is object', function () {
                assert.throws(function () {
                    index.actualiseOperands({});
                });
            });

            test('actualiseOperands does not throw when identifiers is array', function () {
                assert.doesNotThrow(function () {
                    index.actualiseOperands([]);
                });
            });

            test('actualiseOperators function is exported', function () {
                assert.isFunction(index.actualiseOperators);
            });

            test('actualiseOperators throws when properties is object', function () {
                assert.throws(function () {
                    index.actualiseOperators({});
                });
            });

            test('actualiseOperators does not throw when properties is array', function () {
                assert.doesNotThrow(function () {
                    index.actualiseOperators([]);
                });
            });
        });

        suite('actualise:', function () {
            suite('string arguments:', function () {
                var result;

                setup(function () {
                    result = index.actualise('koda', 'basanda', 'bosoya', 'umahasha', 'tikki', 'ottobo', 'heeta', 'boshatta');
                });

                teardown(function () {
                    result = undefined;
                });

                test('result was object', function () {
                    assert.isObject(result);
                });

                test('lloc was correct', function () {
                    assert.strictEqual(result.lloc, 'koda');
                });

                test('cyclomatic was correct', function () {
                    assert.strictEqual(result.cyclomatic, 'basanda');
                });

                test('operators was correct', function () {
                    assert.strictEqual(JSON.stringify(result.operators), '[{"identifier":"bosoya"}]');
                });

                test('operands was correct', function () {
                    assert.strictEqual(JSON.stringify(result.operands), '[{"identifier":"umahasha"}]');
                });

                test('ignoreKeys was correct', function () {
                    assert.isArray(result.ignoreKeys);
                    assert.lengthOf(result.ignoreKeys, 1);
                    assert.strictEqual(result.ignoreKeys[0], 'tikki');
                });

                test('assignableName was correct', function () {
                    assert.strictEqual(result.assignableName, 'ottobo');
                });

                test('newScope was correct', function () {
                    assert.strictEqual(result.newScope, 'heeta');
                });

                test('dependencies was correct', function () {
                    assert.strictEqual(result.dependencies, 'boshatta');
                });
            });

            suite('array arguments:', function () {
                var result;

                setup(function () {
                    result = index.actualise('1', '2', [ '3' ], [ '4' ], [ '5' ], '6', '7', '8');
                });

                teardown(function () {
                    result = undefined;
                });

                test('lloc was correct', function () {
                    assert.strictEqual(result.lloc, '1');
                });

                test('cyclomatic was correct', function () {
                    assert.strictEqual(result.cyclomatic, '2');
                });

                test('ignoreKeys was correct', function () {
                    assert.isArray(result.ignoreKeys);
                    assert.lengthOf(result.ignoreKeys, 1);
                    assert.strictEqual(result.ignoreKeys[0], '5');
                });

                test('assignableName was correct', function () {
                    assert.strictEqual(result.assignableName, '6');
                });

                test('newScope was correct', function () {
                    assert.strictEqual(result.newScope, '7');
                });

                test('dependencies was correct', function () {
                    assert.strictEqual(result.dependencies, '8');
                });
            });

            suite('no arguments:', function () {
                var result;

                setup(function () {
                    result = index.actualise();
                });

                teardown(function () {
                    result = undefined;
                });

                test('ignoreKeys was correct', function () {
                    assert.isArray(result.ignoreKeys);
                    assert.lengthOf(result.ignoreKeys, 0);
                });
            });
        });

        suite('actualiseOperands:', function () {
            suite('no identifiers:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperands([]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result was array', function () {
                    assert.isArray(result);
                });

                test('result was empty', function () {
                    assert.lengthOf(result, 0);
                });
            });

            suite('one identifier:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperands([ 'foo' ]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result contained one item', function () {
                    assert.lengthOf(result, 1);
                });

                test('first item was correct', function () {
                    assert.isObject(result[0]);
                    assert.strictEqual(result[0].identifier, 'foo');
                });
            });

            suite('two identifiers:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperands([ 'bar', 'baz' ]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result contained two items', function () {
                    assert.lengthOf(result, 2);
                });

                test('first item was correct', function () {
                    assert.strictEqual(result[0].identifier, 'bar');
                });

                test('second item was correct', function () {
                    assert.strictEqual(result[1].identifier, 'baz');
                });
            });
        });

        suite('actualiseOperators:', function () {
            suite('no properties:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperators([]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result was array', function () {
                    assert.isArray(result);
                });

                test('result was empty', function () {
                    assert.lengthOf(result, 0);
                });
            });

            suite('one property with identifier:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperators([ { identifier: 'foo' } ]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result contained one item', function () {
                    assert.lengthOf(result, 1);
                });

                test('first item was correct', function () {
                    assert.isObject(result[0]);
                    assert.strictEqual(result[0].identifier, 'foo');
                });
            });

            suite('one identifier:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperators([ 'foo' ]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result contained one item', function () {
                    assert.lengthOf(result, 1);
                });

                test('first item was correct', function () {
                    assert.isObject(result[0]);
                    assert.strictEqual(result[0].identifier, 'foo');
                });
            });

            suite('two properties:', function () {
                var result;

                setup(function () {
                    result = index.actualiseOperators([ 'bar', { identifier: 'baz' } ]);
                });

                teardown(function () {
                    result = undefined;
                });

                test('result contained two items', function () {
                    assert.lengthOf(result, 2);
                });

                test('first item was correct', function () {
                    assert.strictEqual(result[0].identifier, 'bar');
                });

                test('second item was correct', function () {
                    assert.strictEqual(result[1].identifier, 'baz');
                });
            });
        });
    });
}
