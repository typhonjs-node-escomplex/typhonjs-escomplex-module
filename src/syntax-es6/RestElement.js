/*globals require, exports */

'use strict';

var traits = require('../traits'),
 safeName = require('../safeName');

exports.get = get;

function get() {
    return traits.actualise(
        0,                           // lloc
        0,                           // cyclomatic
        undefined,                   // operators
        undefined,                   // operands
        'argument',                  // children
        function (node) {            // assignableName
            return '...' + safeName(node.argument);
        }
    );
}
