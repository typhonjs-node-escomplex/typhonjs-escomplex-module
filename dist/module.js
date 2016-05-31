'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.analyse = analyse;

var _PluginMetricsModule = require('escomplex-plugin-metrics-module/dist/PluginMetricsModule.js');

var _PluginMetricsModule2 = _interopRequireDefault(_PluginMetricsModule);

var _PluginSyntaxBabylon = require('escomplex-plugin-syntax-babylon/dist/PluginSyntaxBabylon.js');

var _PluginSyntaxBabylon2 = _interopRequireDefault(_PluginSyntaxBabylon);

var _typhonjsAstWalker = require('typhonjs-ast-walker');

var _typhonjsAstWalker2 = _interopRequireDefault(_typhonjsAstWalker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Processes the given ast and calculates metrics via plugins.
 *
 * @param {object}   ast - Javascript AST.
 * @param {object}   options - ESComplex options
 *
 * @returns {*}
 */
function analyse(ast, options) {
   // TODO: Asynchronise

   var settings = void 0;

   if ((typeof ast === 'undefined' ? 'undefined' : _typeof(ast)) !== 'object' || Array.isArray(ast)) {
      throw new TypeError('Invalid syntax tree');
   }

   if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
      settings = options;
   } else {
      // Default escomplex settings
      settings = { logicalor: true, switchcase: true, forin: false, trycatch: false, newmi: false };
   }

   var event = { data: { settings: settings } };

   new _PluginSyntaxBabylon2.default().onLoadSyntax(event);

   var metricPlugin = new _PluginMetricsModule2.default();

   event.data.ast = ast;

   metricPlugin.onModuleStart(event);

   _typhonjsAstWalker2.default.traverse(ast, {
      enterNode: function enterNode(node, parent) {
         event.data.ignoreKeys = undefined;
         event.data.node = node;
         event.data.parent = parent;

         metricPlugin.onEnterNode(event);

         return event.data.ignoreKeys;
      },

      exitNode: function exitNode(node, parent) {
         event.data.node = node;
         event.data.parent = parent;

         metricPlugin.onExitNode(event);
      }
   });

   metricPlugin.onModuleEnd(event);

   return event.data.report;
}