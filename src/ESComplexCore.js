'use strict';

import walker  from 'typhonjs-ast-walker';

import Plugins from './Plugins.js';

/**
 * Provides ESComplex module processing functionality.
 */
export default class ESComplexCore
{
   /**
    * Initializes ESComplexModule
    *
    * @param {object}         options - module options
    */
   constructor(options = {})
   {
      if (typeof options !== 'object') { throw new TypeError('ctor error: `options` is not an `object`.'); }

      Plugins.initialize(options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - module analyze options
    *
    * @returns {*}
    */
   analyze(ast, options = {})
   {
      if (typeof ast !== 'object' || Array.isArray(ast)) { throw new TypeError('Invalid syntax tree'); }
      if (typeof options !== 'object') { throw new TypeError('analyze error: `options` is not an `object`.'); }

      const settings = Plugins.onConfigure(options);

      const syntaxes = Plugins.onLoadSyntax(settings);

      const report = Plugins.onModuleStart(ast, syntaxes, settings);

      walker.traverse(ast,
      {
         enterNode: (node, parent) => { return Plugins.onEnterNode(node, parent); },
         exitNode: (node, parent) => { return Plugins.onExitNode(node, parent); }
      });

      Plugins.onModuleEnd();

      return report;
   }

   /**
    * Wraps processing the given ast and calculates metrics via plugins in a Promise.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - module options
    *
    * @returns {Promise}
    */
   analyzeThen(ast, options = {})
   {
      return new Promise((resolve, reject) =>
      {
         try { resolve(this.analyze(ast, options)); }
         catch (err) { reject(err); }
      });
   }
}
