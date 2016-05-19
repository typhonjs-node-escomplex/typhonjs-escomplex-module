/*globals require, exports */

'use strict';

var traits = require('../traits'),
 safeName = require('../safeName');

exports.get = get;

/*
function actualise (lloc, cyclomatic, operators, operands, children, assignableName, newScope, dependencies) {
   return {
      lloc: lloc,
      cyclomatic: cyclomatic,
      operators: operatorTraits.actualise(safeArray(operators)),
      operands: operandTraits.actualise(safeArray(operands)),
      children: safeArray(children),
      assignableName: assignableName,
      newScope: newScope,
      dependencies: dependencies
   };
}
*/

function get () {
   return traits.actualise(0, 0, 'class declaration', undefined, undefined);

   //return traits.actualise(
   // 1, 0, 'function',
   // function (node) {
   //    return safeName(node.id);
   // },
   // [ 'params', 'body' ], undefined, true
   //);
}
