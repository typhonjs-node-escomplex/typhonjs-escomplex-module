/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get () {
   return traits.actualise(
    0,                     // lloc
    0,                     // cyclomatic
    'arrowfunction',       // operators
    undefined,             // operands
    [ 'params', 'body' ],  // children
    undefined,             // assignableName
    true                   // newScope
   );
}
