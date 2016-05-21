/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get() {
    return traits.actualise(
        0,                      // lloc
        0,                      // cyclomatic
        function (node) {       // operators
            return node.imported.name === node.local.name ? '{}' : ['{}', 'as'];
        },
        undefined,              // operands
        ['local', 'imported']   // children
    );
}
