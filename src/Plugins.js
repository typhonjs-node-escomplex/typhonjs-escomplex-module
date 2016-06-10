'use strict';

import PluginManager       from 'typhonjs-plugin-manager';

import PluginMetricsModule from 'escomplex-plugin-metrics-module/src/PluginMetricsModule.js';
import PluginSyntaxBabylon from 'escomplex-plugin-syntax-babylon/src/PluginSyntaxBabylon.js';

export default class Plugins
{
   constructor(options = {})
   {
      this._pluginManager = new PluginManager();

      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) { /* nop */ }
      else
      {
         this._pluginManager.addPlugin(new PluginSyntaxBabylon());
         this._pluginManager.addPlugin(new PluginMetricsModule());
      }
   }

   onConfigure(options)
   {
      const settings = {};
      const event = this._pluginManager.invoke('onConfigure', { options, settings }, true);
      return event !== null ? event.data.settings : settings;
   }

   onEnterNode(node, parent)
   {
      const event = this._pluginManager.invoke('onEnterNode', { node, parent }, false);
      return event !== null ? event.data.ignoreKeys : [];
   }

   onExitNode(node, parent)
   {
      this._pluginManager.invoke('onExitNode', { node, parent }, false);
   }

   onLoadSyntax(settings)
   {
      const syntaxes = {};
      const event = this._pluginManager.invoke('onLoadSyntax', { settings, syntaxes }, true);
      return event !== null ? event.data.syntaxes : syntaxes;
   }

   onModuleStart(ast, syntaxes, settings)
   {
      const report = {};
      this._pluginManager.invoke('onModuleStart', { ast, report, syntaxes, settings }, false);
      return report;
   }

   onModuleEnd()
   {
      const event = this._pluginManager.invoke('onModuleEnd');
      return event !== null ? event.data.report : {};
   }
}
