/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get () {
    return traits.actualise(
        0, 0, undefined,
        function (node) {
            if (typeof node.value === 'string') {
                // Avoid conflicts between string literals and identifiers.
                return '"' + node.value + '"';
            }

            return node.value;
        }
    );
}

