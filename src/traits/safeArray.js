'use strict';

module.exports = function safeArray (thing) {
    return typeof thing === 'undefined' || thing === null ? [] : Array.isArray(thing) ? thing : [ thing ];
};
