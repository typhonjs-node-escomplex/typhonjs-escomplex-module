'use strict';

import PluginMetricsModule from 'escomplex-plugin-metrics-module/src/PluginMetricsModule.js';
import PluginSyntaxBabylon from 'escomplex-plugin-syntax-babylon/src/PluginSyntaxBabylon.js';

import walker              from 'typhonjs-ast-walker';

/**
 * Processes the given ast and calculates metrics via plugins.
 *
 * @param {object}   ast - Javascript AST.
 * @param {object}   options - ESComplex options
 *
 * @returns {*}
 */
export function analyse(ast, options)
{
   // TODO: Asynchronise

   let settings;

   if (typeof ast !== 'object' || Array.isArray(ast)) { throw new TypeError('Invalid syntax tree'); }

   if (typeof options === 'object')
   {
      settings = options;
   }
   else
   {
      // Default escomplex settings
      settings = { logicalor: true, switchcase: true, forin: false, trycatch: false, newmi: false };
   }

   const event = { data: { settings } };

   new PluginSyntaxBabylon().onLoadSyntax(event);

   const metricPlugin = new PluginMetricsModule();

   event.data.ast = ast;

   metricPlugin.onModuleStart(event);

   walker.traverse(ast,
   {
      enterNode: (node, parent) =>
      {
         event.data.ignoreKeys = undefined;
         event.data.node = node;
         event.data.parent = parent;

         metricPlugin.onEnterNode(event);

         return event.data.ignoreKeys;
      },

      exitNode: (node, parent) =>
      {
         event.data.node = node;
         event.data.parent = parent;

         metricPlugin.onExitNode(event);
      }
   });

   metricPlugin.onModuleEnd(event);

   return event.data.report;
}
