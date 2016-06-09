'use strict';

import PluginManager       from 'typhonjs-plugin-manager';

import PluginMetricsModule from 'escomplex-plugin-metrics-module/src/PluginMetricsModule.js';
import PluginSyntaxBabylon from 'escomplex-plugin-syntax-babylon/src/PluginSyntaxBabylon.js';

const s_PLUGIN_MANAGER = new PluginManager();

export default class Plugin
{
   static initialize(options = {})
   {
      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) { /* nop */ }
      else
      {
         s_PLUGIN_MANAGER.addPlugin(new PluginSyntaxBabylon());
         s_PLUGIN_MANAGER.addPlugin(new PluginMetricsModule());
      }
   }

   static onConfigure(options)
   {
      const settings = {};
      const event = s_PLUGIN_MANAGER.invoke('onConfigure', { options, settings }, true);
      return event !== null ? event.data.settings : settings;
   }

   static onEnterNode(node, parent)
   {
      const event = s_PLUGIN_MANAGER.invoke('onEnterNode', { node, parent }, false);
      return event !== null ? event.data.ignoreKeys : [];
   }

   static onExitNode(node, parent)
   {
      s_PLUGIN_MANAGER.invoke('onExitNode', { node, parent }, false);
   }

   static onLoadSyntax(settings)
   {
      const syntaxes = {};
      const event = s_PLUGIN_MANAGER.invoke('onLoadSyntax', { settings, syntaxes }, true);
      return event !== null ? event.data.syntaxes : syntaxes;
   }

   static onModuleStart(ast, syntaxes, settings)
   {
      s_PLUGIN_MANAGER.invoke('onModuleStart', { ast, syntaxes, settings }, false);
   }

   static onModuleEnd()
   {
      const event = s_PLUGIN_MANAGER.invoke('onModuleEnd');
      return event !== null ? event.data.report : {};
   }
}
