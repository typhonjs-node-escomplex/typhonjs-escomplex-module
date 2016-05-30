/*globals require, exports */

'use strict';

var actualiseOperands =     require('./actualiseOperands');
var actualiseOperators =    require('./actualiseOperators');
var safeArray =             require('./safeArray');

module.exports = function actualise (lloc, cyclomatic, operators, operands, ignoreKeys, newScope, dependencies) {
    return {
        lloc: lloc,
        cyclomatic: cyclomatic,
        operators: actualiseOperators(safeArray(operators)),
        operands: actualiseOperands(safeArray(operands)),
        ignoreKeys: safeArray(ignoreKeys),
        newScope: newScope,
        dependencies: dependencies
    };
};
