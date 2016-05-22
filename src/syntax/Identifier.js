/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get () {
    return traits.actualise(
        0,
        0,
        undefined,
        function (node, assignedName) {
            // Potentially assign a pre-existing name (used for ES6 / spread), but ignore `<anonymous>`.
            return typeof assignedName === 'string' && assignedName !== '<anonymous>' ? assignedName : node.name;
        }
    );
}

