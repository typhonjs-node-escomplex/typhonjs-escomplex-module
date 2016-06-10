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
 * Provides ESComplex module processing functionality.
 */

var ESComplexModule = function () {
   /**
    * Initializes ESComplexModule
    *
    * @param {object}         options - module options
    */

   function ESComplexModule() {
      var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      _classCallCheck(this, ESComplexModule);

      if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
         throw new TypeError('ctor error: `options` is not an `object`.');
      }

      this._plugins = new _Plugins2.default(options);
   }

   /**
    * Processes the given ast and calculates metrics via plugins.
    *
    * @param {object|Array}   ast - Javascript AST.
    * @param {object}         options - module analyze options
    *
    * @returns {*}
    */


   _createClass(ESComplexModule, [{
      key: 'analyze',
      value: function analyze(ast) {
         var _this = this;

         var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

         if ((typeof ast === 'undefined' ? 'undefined' : _typeof(ast)) !== 'object' || Array.isArray(ast)) {
            throw new TypeError('Invalid syntax tree');
         }
         if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object') {
            throw new TypeError('analyze error: `options` is not an `object`.');
         }

         var settings = this._plugins.onConfigure(options);

         var syntaxes = this._plugins.onLoadSyntax(settings);

         var report = this._plugins.onModuleStart(ast, syntaxes, settings);

         _typhonjsAstWalker2.default.traverse(ast, {
            enterNode: function enterNode(node, parent) {
               return _this._plugins.onEnterNode(node, parent);
            },
            exitNode: function exitNode(node, parent) {
               return _this._plugins.onExitNode(node, parent);
            }
         });

         this._plugins.onModuleEnd();

         return report;
      }

      /**
       * Wraps processing the given ast and calculates metrics via plugins in a Promise.
       *
       * @param {object|Array}   ast - Javascript AST.
       * @param {object}         options - module options
       *
       * @returns {Promise}
       */

   }, {
      key: 'analyzeThen',
      value: function analyzeThen(ast) {
         var _this2 = this;

         var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

         return new Promise(function (resolve, reject) {
            try {
               resolve(_this2.analyze(ast, options));
            } catch (err) {
               reject(err);
            }
         });
      }
   }]);

   return ESComplexModule;
}();

exports.default = ESComplexModule;
module.exports = exports['default'];