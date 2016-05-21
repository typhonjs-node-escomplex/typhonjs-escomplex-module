/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get() {
    return traits.actualise(
        0,                     // lloc
        0,                     // cyclomatic
        ['export', 'default'], // operators
        undefined,             // operands
        'declaration'          // children
    );
}
