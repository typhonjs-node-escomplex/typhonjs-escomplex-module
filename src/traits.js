/*globals require, exports */

'use strict';

exports.actualise = actualise;
exports.actualiseOperands = actualiseOperands;
exports.actualiseOperators = actualiseOperators;

function actualise (lloc, cyclomatic, operators, operands, assignableName, ignoreKeys, newScope, dependencies) {
    return {
        lloc: lloc,
        cyclomatic: cyclomatic,
        operators: actualiseOperators(safeArray(operators)),
        operands: actualiseOperands(safeArray(operands)),
        ignoreKeys: safeArray(ignoreKeys),
        assignableName: assignableName,
        newScope: newScope,
        dependencies: dependencies
    };
}

function actualiseOperands (identifiers) {
    return identifiers.map(function (identifier) {
        return { identifier: identifier };
    });
}

function actualiseOperators (properties) {
    return properties.map(function (property) {
        if (property && typeof property.identifier !== 'undefined') {
            return property;
        }

        return { identifier: property };
    });
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

