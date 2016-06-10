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

var Plugins = function () {
   function Plugins() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, Plugins);

      this._pluginManager = new _typhonjsPluginManager2.default();

      if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) {/* nop */} else {
            this._pluginManager.addPlugin(new _PluginSyntaxBabylon2.default());
            this._pluginManager.addPlugin(new _PluginMetricsModule2.default());
         }
   }

   _createClass(Plugins, [{
      key: 'onConfigure',
      value: function onConfigure(options) {
         var settings = {};
         var event = this._pluginManager.invoke('onConfigure', { options: options, settings: settings }, true);
         return event !== null ? event.data.settings : settings;
      }
   }, {
      key: 'onEnterNode',
      value: function onEnterNode(node, parent) {
         var event = this._pluginManager.invoke('onEnterNode', { node: node, parent: parent }, false);
         return event !== null ? event.data.ignoreKeys : [];
      }
   }, {
      key: 'onExitNode',
      value: function onExitNode(node, parent) {
         this._pluginManager.invoke('onExitNode', { node: node, parent: parent }, false);
      }
   }, {
      key: 'onLoadSyntax',
      value: function onLoadSyntax(settings) {
         var syntaxes = {};
         var event = this._pluginManager.invoke('onLoadSyntax', { settings: settings, syntaxes: syntaxes }, true);
         return event !== null ? event.data.syntaxes : syntaxes;
      }
   }, {
      key: 'onModuleStart',
      value: function onModuleStart(ast, syntaxes, settings) {
         var report = {};
         this._pluginManager.invoke('onModuleStart', { ast: ast, report: report, syntaxes: syntaxes, settings: settings }, false);
         return report;
      }
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