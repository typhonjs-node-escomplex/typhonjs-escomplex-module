/*globals require, exports */

'use strict';

var traits = require('../traits');

exports.get = get;

function get () {
   return traits.actualise(
       0,
       0,
       ['import', 'from'],
       undefined,
       'specifiers',
       undefined,       // assignableName
       undefined,       // new scope
       function (node) {
           return {
               line: node.source.loc.start.line,
               path: node.source.value,
               type: 'esm'
           };
       }
   );
}
