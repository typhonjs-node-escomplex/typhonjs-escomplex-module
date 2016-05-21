/*globals require, exports */

'use strict';

var traits = require('../traits'),
    safeName = require('../safeName');

exports.get = get;

function get () {
    return traits.actualise(
        0,                  // lloc
        0,                  // cyclomatic
        undefined,          // operators
        undefined,          // operands
        'value',            // children
        // With class methods the FunctionExpression is stored in `value`, but doesn't have an `id` for the name which
        // needs to be assigned from the `key` Identifier. Since this assignable name is forwarded on the child `key`
        // is skipped from processing.
        function (node) {   // assignableName
            return safeName(node.key);
        }
   );
}
