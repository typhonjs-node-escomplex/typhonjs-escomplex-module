/*globals require, exports */

'use strict';

var traits = require('../traits'),
    safeName = require('../safeName');

exports.get = get;

function get () {
    return traits.actualise(
        1,                             // lloc
        0,                             // cyclomatic
        {                              // operators
            identifier: '=',
            filter: function (node) {
                return !!node.init;
            }
        },
        undefined,                     // operands
        [ 'id', 'init' ],              // children
        function (node) {              // assignableName
            return safeName(node.id);
        }
    );
}

