import PluginMetricsModule from 'escomplex-plugin-metrics-module/src/PluginMetricsModule';
import PluginSyntaxBabylon from 'escomplex-plugin-syntax-babylon/src/PluginSyntaxBabylon';

import ModuleReport        from 'typhonjs-escomplex-commons/src/module/report/ModuleReport';

import PluginManager       from 'typhonjs-plugin-manager/src/PluginManager';

/**
 * Provides a wrapper around PluginManager for ESComplexModule. Several convenience methods for the plugin callbacks
 * properly manage and or create initial data that are processed by the plugins.
 *
 * The default plugins loaded include:
 * @see https://www.npmjs.com/package/escomplex-plugin-metrics-module
 * @see https://www.npmjs.com/package/escomplex-plugin-syntax-babylon
 */
export default class Plugins
{
   /**
    * Initializes Plugins.
    *
    * @param {object}   options - module options including user plugins to load including:
    * ```
    * (boolean)         loadDefaultPlugins - When false ESComplexModule will not load any default plugins.
    * (Array<Object>)   plugins - A list of ESComplexModule plugins that have already been instantiated.
    * ```
    */
   constructor(options = {})
   {
      /**
       * Provides a generic plugin manager for dispatching events to module plugins.
       * @type {PluginManager}
       * @private
       */
      this._pluginManager = new PluginManager();

      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) { /* nop */ }
      else
      {
         this._pluginManager.add({ name: 'escomplex-plugin-syntax-babylon', instance: new PluginSyntaxBabylon() });
         this._pluginManager.add({ name: 'escomplex-plugin-metrics-module', instance: new PluginMetricsModule() });
      }
   }

   /**
    * Initializes the default `settings` object hash and then invokes the `onConfigure` plugin callback for all loaded
    * plugins.
    *
    * @param {object}   options - (Optional) module processing options.
    *
    * @returns {object}
    */
   onConfigure(options)
   {
      let settings = {};
      const event = this._pluginManager.invokeSyncEvent('onConfigure', void 0, { options, settings });

      settings = event !== null ? event.settings : settings;
      Object.freeze(settings);
      return event !== null ? event.settings : settings;
   }

   /**
    * Invokes the `onEnterNode` plugin callback during AST traversal when a node is entered.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {Array<string>}        ignoreKeys - Any syntax assigned ignore keys for AST traversal.
    * @param {object}               syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    *
    * @returns {Array<string>|null} - A directive indicating children keys to be skipped or if null all keys entirely.
    */
   onEnterNode(moduleReport, scopeControl, ignoreKeys, syntaxes, settings, node, parent)
   {
      const event = this._pluginManager.invokeSyncEvent('onEnterNode', void 0,
       { moduleReport, scopeControl, ignoreKeys, syntaxes, settings, node, parent });

      return event !== null ? event.ignoreKeys : [];
   }

   /**
    * Invokes the `onExitNode` plugin callback during AST traversal when a node is exited.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {object}               syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    */
   onExitNode(moduleReport, scopeControl, syntaxes, settings, node, parent)
   {
      this._pluginManager.invokeSyncEvent('onExitNode', void 0,
       { moduleReport, scopeControl, syntaxes, settings, node, parent });
   }

   /**
    * Initializes the trait `syntaxes` object hash and then invokes the `onLoadSyntax` plugin callback for all loaded
    * plugins.
    *
    * @param {object}   settings - Settings for module processing.
    *
    * @returns {object} - Loaded trait `syntaxes` for AST nodes.
    */
   onLoadSyntax(settings)
   {
      const syntaxes = {};
      const event = this._pluginManager.invokeSyncEvent('onLoadSyntax', void 0, { settings, syntaxes });
      return event !== null ? event.syntaxes : syntaxes;
   }

   /**
    * Initializes the default ModuleReport and then invokes the `onModuleStart` plugin callback for all loaded plugins.
    *
    * @param {object}   ast - Settings for module processing.
    * @param {object}   syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}   settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleStart(ast, syntaxes, settings)
   {
      const moduleReport = new ModuleReport(ast.loc.start.line, ast.loc.end.line, settings);
      this._pluginManager.invokeSyncEvent('onModuleStart', void 0, { ast, moduleReport, syntaxes, settings });
      return moduleReport;
   }

   /**
    * Invokes the `onModuleAverage` plugin callback for all loaded plugins such they might average any calculated
    * results.
    *
    * @param {ModuleReport}   moduleReport - The ModuleReport being processed.
    * @param {object}         syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}         settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleAverage(moduleReport, syntaxes, settings)
   {
      this._pluginManager.invokeSyncEvent('onModuleAverage', void 0, { moduleReport, syntaxes, settings });
      return moduleReport;
   }

   /**
    * Invokes the `onModuleCalculate` plugin callback for all loaded plugins such they might finish calculating results.
    *
    * @param {ModuleReport}   moduleReport - The ModuleReport being processed.
    * @param {object}         syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}         settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleCalculate(moduleReport, syntaxes, settings)
   {
      this._pluginManager.invokeSyncEvent('onModuleCalculate', void 0, { moduleReport, syntaxes, settings });
      return moduleReport;
   }

   /**
    * Invokes the `onModuleEnd` plugin callback for all loaded plugins at the end of module processing.
    *
    * @param {ModuleReport}   moduleReport - The ModuleReport being processed.
    * @param {object}         syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}         settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModuleEnd(moduleReport, syntaxes, settings)
   {
      this._pluginManager.invokeSyncEvent('onModuleEnd', void 0, { moduleReport, syntaxes, settings });
      return moduleReport;
   }

   /**
    * Invokes the `onModulePostAverage` plugin callback for all loaded plugins such they might finish any calculations
    * that involve averaged results.
    *
    * @param {ModuleReport}   moduleReport - The ModuleReport being processed.
    * @param {object}         syntaxes - All loaded trait syntaxes for AST nodes.
    * @param {object}         settings - Settings for module processing.
    *
    * @returns {ModuleReport} - The ModuleReport being processed.
    */
   onModulePostAverage(moduleReport, syntaxes, settings)
   {
      this._pluginManager.invokeSyncEvent('onModulePostAverage', void 0, { moduleReport, syntaxes, settings });
      return moduleReport;
   }

   /**
    * Invokes the `onModulePostScopeCreated` plugin callback during AST traversal after a new module report scope is
    * created.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {object}               newScope - An object hash defining the new scope including:
    * ```
    * (string) type - Type of report to create.
    * (string) name - Name of the class or method.
    * (number) lineStart - Start line of method.
    * (number) lineEnd - End line of method.
    * (number) paramCount - (For method scopes) Number of parameters for method.
    * ```
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    */
   onModulePostScopeCreated(moduleReport, scopeControl, newScope, settings, node, parent)
   {
      this._pluginManager.invokeSyncEvent('onModulePostScopeCreated', void 0,
       { moduleReport, scopeControl, newScope, settings, node, parent });
   }

   /**
    * Invokes the `onModulePostScopePopped` plugin callback during AST traversal after a module report scope is
    * popped / exited.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {object}               scope - An object hash defining the new scope including:
    * ```
    * (string) type - Type of report to pop.
    * ```
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    */
   onModulePostScopePopped(moduleReport, scopeControl, scope, settings, node, parent)
   {
      this._pluginManager.invokeSyncEvent('onModulePostScopePopped', void 0,
       { moduleReport, scopeControl, scope, settings, node, parent });
   }

   /**
    * Invokes the `onModulePreScopeCreated` plugin callback during AST traversal before a new module report scope is
    * created.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {object}               newScope - An object hash defining the new scope including:
    * ```
    * (string) type - Type of report to create.
    * (string) name - Name of the class or method.
    * (number) lineStart - Start line of method.
    * (number) lineEnd - End line of method.
    * (number) paramCount - (For method scopes) Number of parameters for method.
    * ```
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    */
   onModulePreScopeCreated(moduleReport, scopeControl, newScope, settings, node, parent)
   {
      this._pluginManager.invokeSyncEvent('onModulePreScopeCreated', void 0,
       { moduleReport, scopeControl, newScope, settings, node, parent });
   }

   /**
    * Invokes the `onModulePreScopePopped` plugin callback during AST traversal before a module report scope is
    * popped / exited.
    *
    * @param {ModuleReport}         moduleReport - The ModuleReport being processed.
    * @param {ModuleScopeControl}   scopeControl - The associated module report scope control.
    * @param {object}               scope - An object hash defining the new scope including:
    * ```
    * (string) type - Type of report to pop.
    * ```
    * @param {object}               settings - Settings for module processing.
    * @param {object}               node - The node being entered.
    * @param {object}               parent - The parent node of the node being entered.
    */
   onModulePreScopePopped(moduleReport, scopeControl, scope, settings, node, parent)
   {
      this._pluginManager.invokeSyncEvent('onModulePreScopePopped', void 0,
       { moduleReport, scopeControl, scope, settings, node, parent });
   }
}
