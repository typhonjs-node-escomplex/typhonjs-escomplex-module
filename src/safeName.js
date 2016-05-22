/*globals require, module */

'use strict';

module.exports = function (object, defaultName) {
    if (object !== null && typeof object === 'object' && typeof object.name === 'string' && object.name !== '') {
        return object.name;
    }

    if (typeof defaultName === 'string' && defaultName !== '') {
        return defaultName;
    }

    return '<anonymous>';
};
