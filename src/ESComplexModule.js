'use strict';

import walker  from 'typhonjs-ast-walker';

import Plugins from './Plugins.js';

/**
 * Provides a runtime to invoke ESComplexModule plugins for processing / metrics calculations of independent modules.
 */
export default class ESComplexModule
{
   /**
    * Initializes ESComplexModule.
    *
    * @param {object}   options - module options including user plugins to load including:
    * ```
    * (boolean)         loadDefaultPlugins - When false ESComplexProject will not load any default plugins.
    * (Array<Object>)   plugins - A list of ESComplexModule plugins that have already been instantiated.
    * ```
    */
   constructor(options = {})
   {
      if (typeof options !== 'object') { throw new TypeError('ctor error: `options` is not an `object`.'); }

      this._plugins = new Plugins(options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - (Optional) module analyze options.
    *
    * @returns {object} - A single module report.
    */
   analyze(ast, options = {})
   {
      if (typeof ast !== 'object' || Array.isArray(ast))
      {
         throw new TypeError('analyze error: `ast` is not an `object` or `array`.');
      }

      if (typeof options !== 'object') { throw new TypeError('analyze error: `options` is not an `object`.'); }

      const settings = this._plugins.onConfigure(options);

      const syntaxes = this._plugins.onLoadSyntax(settings);

      const report = this._plugins.onModuleStart(ast, syntaxes, settings);

      // Completely traverse the provided AST and defer to plugins to process node traversal.
      walker.traverse(ast,
      {
         enterNode: (node, parent) => { return this._plugins.onEnterNode(node, parent); },
         exitNode: (node, parent) => { return this._plugins.onExitNode(node, parent); }
      });

      this._plugins.onModuleEnd();

      return report;
   }

   // Asynchronous Promise based methods ----------------------------------------------------------------------------

   /**
    * Wraps in a Promise processing the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - (Optional) module analyze options.
    *
    * @returns {Promise<object>} - A single module report.
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
