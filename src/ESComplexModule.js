'use strict';

import walker  from 'typhonjs-ast-walker';

import Plugins from './Plugins.js';

/**
 * Provides ESComplex module processing functionality.
 */
export default class ESComplexModule
{
   /**
    * Initializes ESComplexModule
    *
    * @param {object}         options - module options
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
    * @param {object}         options - module analyze options
    *
    * @returns {*}
    */
   analyze(ast, options = {})
   {
      if (typeof ast !== 'object' || Array.isArray(ast)) { throw new TypeError('Invalid syntax tree'); }
      if (typeof options !== 'object') { throw new TypeError('analyze error: `options` is not an `object`.'); }

      const settings = this._plugins.onConfigure(options);

      const syntaxes = this._plugins.onLoadSyntax(settings);

      const report = this._plugins.onModuleStart(ast, syntaxes, settings);

      walker.traverse(ast,
      {
         enterNode: (node, parent) => { return this._plugins.onEnterNode(node, parent); },
         exitNode: (node, parent) => { return this._plugins.onExitNode(node, parent); }
      });

      this._plugins.onModuleEnd();

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
