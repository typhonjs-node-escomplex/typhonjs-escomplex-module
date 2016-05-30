'use strict';

var assert =        require('chai').assert;
var testconfig =    require('./testconfig');

var actualisePath = '../src/traits/actualise';
var actualiseOperandsPath = '../src/traits/actualiseOperands';
var actualiseOperatorsPath = '../src/traits/actualiseOperators';

if (testconfig.modules['traits']) {
    suite('traits:', function () {
        var actualise, actualiseOperands, actualiseOperators;

        setup(function () {
            actualise = require(actualisePath);
            actualiseOperands = require(actualiseOperandsPath);
            actualiseOperators = require(actualiseOperatorsPath);
        });

        teardown(function () {
            actualise = undefined;
        });

        suite('require actualise:', function () {
            test('require does not throw', function () {
                assert.doesNotThrow(function () {
                    require(actualisePath);
                });
            });

            test('actualise function is exported', function () {
                assert.isFunction(actualise);
            });

            test('actualise does not throw', function () {
                assert.doesNotThrow(function () {
                    actualise();
                });
            });
        });

        suite('require actualiseOperands:', function () {
            test('actualiseOperands function is exported', function () {
                assert.isFunction(actualiseOperands);
            });

            test('actualiseOperands throws when identifiers is object', function () {
                assert.throws(function () {
                    actualiseOperands({});
                });
            });

            test('actualiseOperands does not throw when identifiers is array', function () {
                assert.doesNotThrow(function () {
                    actualiseOperands([]);
                });
            });
        });

        suite('require actualiseOperators:', function () {
            test('actualiseOperators function is exported', function () {
                assert.isFunction(actualiseOperators);
            });

            test('actualiseOperators throws when properties is object', function () {
                assert.throws(function () {
                    actualiseOperators({});
                });
            });

            test('actualiseOperators does not throw when properties is array', function () {
                assert.doesNotThrow(function () {
                    actualiseOperators([]);
                });
            });
        });

        suite('actualise:', function () {
            suite('string arguments:', function () {
                var result;

                setup(function () {
                    result = actualise('koda', 'basanda', 'bosoya', 'umahasha', 'tikki', 'ottobo', 'boshatta');
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

                test('newScope was correct', function () {
                    assert.strictEqual(result.newScope, 'ottobo');
                });

                test('dependencies was correct', function () {
                    assert.strictEqual(result.dependencies, 'boshatta');
                });
            });

            suite('array arguments:', function () {
                var result;

                setup(function () {
                    result = actualise('1', '2', [ '3' ], [ '4' ], [ '5' ], '6', '7');
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

                test('newScope was correct', function () {
                    assert.strictEqual(result.newScope, '6');
                });

                test('dependencies was correct', function () {
                    assert.strictEqual(result.dependencies, '7');
                });
            });

            suite('no arguments:', function () {
                var result;

                setup(function () {
                    result = actualise();
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
                    result = actualiseOperands([]);
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
                    result = actualiseOperands([ 'foo' ]);
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
                    result = actualiseOperands([ 'bar', 'baz' ]);
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
                    result = actualiseOperators([]);
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
                    result = actualiseOperators([ { identifier: 'foo' } ]);
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
                    result = actualiseOperators([ 'foo' ]);
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
                    result = actualiseOperators([ 'bar', { identifier: 'baz' } ]);
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
