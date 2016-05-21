/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get() {
    return traits.actualise(
        1,                              // lloc
        0,                              // cyclomatic
        'class',                        // operators
        undefined,                      // operands
        ['id', 'body', 'superClass']    // children
    );
}
