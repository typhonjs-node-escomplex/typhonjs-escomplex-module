/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get (settings) {
    return traits.actualise(
        1,                                   // lloc
        function () {                        // cyclomatic
            return settings.forin ? 1 : 0;
        },
        'forof',                             // operators
        undefined,                           // operands
        [ 'left', 'right', 'body' ]          // assignableName
    );
}

