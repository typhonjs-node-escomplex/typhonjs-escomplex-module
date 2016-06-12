'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typhonjsPluginManager = require('typhonjs-plugin-manager');

var _typhonjsPluginManager2 = _interopRequireDefault(_typhonjsPluginManager);

var _PluginMetricsModule = require('escomplex-plugin-metrics-module/dist/PluginMetricsModule.js');

var _PluginMetricsModule2 = _interopRequireDefault(_PluginMetricsModule);

var _PluginSyntaxBabylon = require('escomplex-plugin-syntax-babylon/dist/PluginSyntaxBabylon.js');

var _PluginSyntaxBabylon2 = _interopRequireDefault(_PluginSyntaxBabylon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides a wrapper around PluginManager for ESComplexModule. Several convenience methods for the plugin callbacks
 * properly manage and or create initial data that are processed by the plugins.
 *
 * The default plugins loaded include:
 * @see https://www.npmjs.com/package/escomplex-plugin-metrics-module
 * @see https://www.npmjs.com/package/escomplex-plugin-syntax-babylon
 */

var Plugins = function () {
   /**
    * Initializes Plugins.
    *
    * @param {object}   options - module options including user plugins to load including:
    * ```
    * (boolean)         loadDefaultPlugins - When false ESComplexModule will not load any default plugins.
    * (Array<Object>)   plugins - A list of ESComplexModule plugins that have already been instantiated.
    * ```
    */

   function Plugins() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Plugins);

      this._pluginManager = new _typhonjsPluginManager2.default();

      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) {/* nop */} else {
            this._pluginManager.addPlugin(new _PluginSyntaxBabylon2.default());
            this._pluginManager.addPlugin(new _PluginMetricsModule2.default());
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


   _createClass(Plugins, [{
      key: 'onConfigure',
      value: function onConfigure(options) {
         var settings = {};
         var event = this._pluginManager.invoke('onConfigure', { options: options, settings: settings }, true);
         return event !== null ? event.data.settings : settings;
      }

      /**
       * Invokes the `onEnterNode` plugin callback during AST traversal when a node is entered.
       *
       * @param {object}   node - The node being entered.
       * @param {object}   parent - The parent node of the node being entered.
       *
       * @returns {Array<string>|null} - A directive indicating children keys to be skipped or if null all keys entirely.
       */

   }, {
      key: 'onEnterNode',
      value: function onEnterNode(node, parent) {
         var event = this._pluginManager.invoke('onEnterNode', { node: node, parent: parent }, false);
         return event !== null ? event.data.ignoreKeys : [];
      }

      /**
       * Invokes the `onExitNode` plugin callback during AST traversal when a node is exited.
       *
       * @param {object}   node - The node being entered.
       * @param {object}   parent - The parent node of the node being entered.
       */

   }, {
      key: 'onExitNode',
      value: function onExitNode(node, parent) {
         this._pluginManager.invoke('onExitNode', { node: node, parent: parent }, false);
      }

      /**
       * Initializes the trait `syntaxes` object hash and then invokes the `onLoadSyntax` plugin callback for all loaded
       * plugins.
       *
       * @param {object}   settings - Settings for module processing.
       *
       * @returns {object} - Loaded trait `syntaxes` for AST nodes.
       */

   }, {
      key: 'onLoadSyntax',
      value: function onLoadSyntax(settings) {
         var syntaxes = {};
         var event = this._pluginManager.invoke('onLoadSyntax', { settings: settings, syntaxes: syntaxes }, true);
         return event !== null ? event.data.syntaxes : syntaxes;
      }

      /**
       * Initializes the default `report` object hash and then invokes the `onModuleStart` plugin callback for all loaded
       * plugins.
       *
       * @param {object}   ast - Settings for module processing.
       * @param {object}   syntaxes - All loaded trait syntaxes for AST nodes.
       * @param {object}   settings - Settings for module processing.
       *
       * @returns {object} - The report object hash.
       */

   }, {
      key: 'onModuleStart',
      value: function onModuleStart(ast, syntaxes, settings) {
         var report = {};
         this._pluginManager.invoke('onModuleStart', { ast: ast, report: report, syntaxes: syntaxes, settings: settings }, false);
         return report;
      }

      /**
       * Invokes the `onModuleEnd` plugin callback for all loaded plugins such they might finish calculating results.
       */

   }, {
      key: 'onModuleEnd',
      value: function onModuleEnd() {
         var event = this._pluginManager.invoke('onModuleEnd');
         return event !== null ? event.data.report : {};
      }
   }]);

   return Plugins;
}();

exports.default = Plugins;
module.exports = exports['default'];