/*globals require, exports */

'use strict';

var operatorTraits = require('./operators'), operandTraits = require('./operands');

exports.actualise = actualise;

function actualise (lloc, cyclomatic, operators, operands, ignoreKeys, assignableName, newScope, dependencies) {
    return {
        lloc: lloc,
        cyclomatic: cyclomatic,
        operators: operatorTraits.actualise(safeArray(operators)),
        operands: operandTraits.actualise(safeArray(operands)),
        ignoreKeys: safeArray(ignoreKeys),
        assignableName: assignableName,
        newScope: newScope,
        dependencies: dependencies
    };
}

function safeArray (thing) {
    if (typeof thing === 'undefined') {
        return [];
    }

    if (Array.isArray(thing)) {
        return thing;
    }

    return [ thing ];
}

