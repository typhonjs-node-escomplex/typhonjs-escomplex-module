'use strict';

module.exports = function actualiseOperands (identifiers) {
    return identifiers.map(function (identifier) { return { identifier: identifier }; });
};
