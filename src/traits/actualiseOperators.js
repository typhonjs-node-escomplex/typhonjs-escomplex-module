'use strict';

module.exports = function actualiseOperators (properties) {
    return properties.map(function (property) {
        return property && typeof property.identifier !== 'undefined' ? property : { identifier: property };
    });
};
