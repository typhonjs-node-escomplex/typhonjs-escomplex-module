'use strict';

import walker  from 'typhonjs-ast-walker';

import Plugins from './Plugins.js';

/**
 * Provides the core ESComplex functionality.
 */
export default class ESComplexCore
{
   constructor(options = {})
   {
      if (typeof options !== 'object') { throw new TypeError('ctor error: `options` is not an `object`.'); }

      Plugins.initialize(options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object}   ast - Javascript AST.
    * @param {object}   options - module options
    *
    * @returns {*}
    */
   analyze(ast, options)
   {
      if (typeof ast !== 'object' || Array.isArray(ast)) { throw new TypeError('Invalid syntax tree'); }

      const settings = Plugins.onConfigure(options);

      const syntaxes = Plugins.onLoadSyntax(settings);

      Plugins.onModuleStart(ast, syntaxes, settings);

      walker.traverse(ast,
      {
         enterNode: (node, parent) => { return Plugins.onEnterNode(node, parent); },
         exitNode: (node, parent) => { return Plugins.onExitNode(node, parent); }
      });

      return Plugins.onModuleEnd();
   }

   /**
    * Wraps processing the given ast and calculates metrics via plugins in a Promise.
    *
    * @param {object}   ast - Javascript AST.
    * @param {object}   options - module options
    *
    * @returns {*}
    */
   analyzeThen(ast, options)
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyze(ast, options)); }
         catch (err) { reject(err); }
      });
   }
}
