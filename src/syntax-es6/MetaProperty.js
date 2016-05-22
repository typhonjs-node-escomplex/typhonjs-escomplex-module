/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get () {
    return traits.actualise(
        0,
        0,
        '.',
        // esprima doesn't follow the ESTree spec and `meta` & `property` are strings instead of Identifier nodes.
        function(node) {
            return typeof node.meta === 'string' && typeof node.property === 'string' ? [node.meta, node.property] :
             undefined;
        },
        [ 'meta', 'property' ]
    );
}

