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

var s_PLUGIN_MANAGER = new _typhonjsPluginManager2.default();

var Plugin = function () {
   function Plugin() {
      _classCallCheck(this, Plugin);
   }

   _createClass(Plugin, null, [{
      key: 'initialize',
      value: function initialize() {
         var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

         if (typeof options.loadDefaultPlugins === 'boolean' && !options.loadDefaultPlugins) {/* nop */} else {
               s_PLUGIN_MANAGER.addPlugin(new _PluginSyntaxBabylon2.default());
               s_PLUGIN_MANAGER.addPlugin(new _PluginMetricsModule2.default());
            }
      }
   }, {
      key: 'onConfigure',
      value: function onConfigure(options) {
         var settings = {};
         var event = s_PLUGIN_MANAGER.invoke('onConfigure', { options: options, settings: settings }, true);
         return event !== null ? event.data.settings : settings;
      }
   }, {
      key: 'onEnterNode',
      value: function onEnterNode(node, parent) {
         var event = s_PLUGIN_MANAGER.invoke('onEnterNode', { node: node, parent: parent }, false);
         return event !== null ? event.data.ignoreKeys : [];
      }
   }, {
      key: 'onExitNode',
      value: function onExitNode(node, parent) {
         s_PLUGIN_MANAGER.invoke('onExitNode', { node: node, parent: parent }, false);
      }
   }, {
      key: 'onLoadSyntax',
      value: function onLoadSyntax(settings) {
         var syntaxes = {};
         var event = s_PLUGIN_MANAGER.invoke('onLoadSyntax', { settings: settings, syntaxes: syntaxes }, true);
         return event !== null ? event.data.syntaxes : syntaxes;
      }
   }, {
      key: 'onModuleStart',
      value: function onModuleStart(ast, syntaxes, settings) {
         var report = {};
         s_PLUGIN_MANAGER.invoke('onModuleStart', { ast: ast, report: report, syntaxes: syntaxes, settings: settings }, false);
         return report;
      }
   }, {
      key: 'onModuleEnd',
      value: function onModuleEnd() {
         var event = s_PLUGIN_MANAGER.invoke('onModuleEnd');
         return event !== null ? event.data.report : {};
      }
   }]);

   return Plugin;
}();

exports.default = Plugin;
module.exports = exports['default'];