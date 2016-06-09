'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typhonjsAstWalker = require('typhonjs-ast-walker');

var _typhonjsAstWalker2 = _interopRequireDefault(_typhonjsAstWalker);

var _Plugins = require('./Plugins.js');

var _Plugins2 = _interopRequireDefault(_Plugins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Provides the core ESComplex functionality.
 */

var ESComplexCore = function () {
   function ESComplexCore() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, ESComplexCore);

      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
         throw new TypeError('ctor error: `options` is not an `object`.');
      }

      _Plugins2.default.initialize(options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object}   ast - Javascript AST.
    * @param {object}   options - module options
    *
    * @returns {*}
    */


   _createClass(ESComplexCore, [{
      key: 'analyze',
      value: function analyze(ast, options) {
         if ((typeof ast === 'undefined' ? 'undefined' : _typeof(ast)) !== 'object' || Array.isArray(ast)) {
            throw new TypeError('Invalid syntax tree');
         }

         var settings = _Plugins2.default.onConfigure(options);

         var syntaxes = _Plugins2.default.onLoadSyntax(settings);

         _Plugins2.default.onModuleStart(ast, syntaxes, settings);

         _typhonjsAstWalker2.default.traverse(ast, {
            enterNode: function enterNode(node, parent) {
               return _Plugins2.default.onEnterNode(node, parent);
            },
            exitNode: function exitNode(node, parent) {
               return _Plugins2.default.onExitNode(node, parent);
            }
         });

         return _Plugins2.default.onModuleEnd();
      }

      /**
       * Wraps processing the given ast and calculates metrics via plugins in a Promise.
       *
       * @param {object}   ast - Javascript AST.
       * @param {object}   options - module options
       *
       * @returns {*}
       */

   }, {
      key: 'analyzeThen',
      value: function analyzeThen(ast, options) {
         var _this = this;

         return new Promise(function (resolve, reject) {
            try {
               resolve(_this.analyze(ast, options));
            } catch (err) {
               reject(err);
            }
         });
      }
   }]);

   return ESComplexCore;
}();

exports.default = ESComplexCore;
module.exports = exports['default'];