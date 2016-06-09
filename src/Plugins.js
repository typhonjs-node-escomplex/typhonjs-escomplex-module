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
      let settings;

      if (typeof options === 'object')
      {
         settings = options;
      }
      else
      {
         // Default escomplex settings
         settings = { logicalor: true, switchcase: true, forin: false, trycatch: false, newmi: false };
      }

      return settings;
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
      const event = s_PLUGIN_MANAGER.invoke('onLoadSyntax', { settings });
      return event !== null ? event.data.syntaxes : {};
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
