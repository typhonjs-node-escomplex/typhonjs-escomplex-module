/* eslint no-console: "off" */

'use strict';

var acorn = require('acorn');
var babylon = require('babylon');
var espree = require('espree');
var esprima = require('esprima');

var escomplex = require('../src/module');
var mozWalker = require('../src/walker');
var testconfig = require('./testconfig');

var esmRegex = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;

var acornOptions = { locations: true };
var babylonOptions = { plugins: ['asyncFunctions', 'asyncGenerators', 'classConstructorCall', 'classProperties',
    'decorators', 'doExpressions', 'exportExtensions', 'exponentiationOperator', 'flow', 'functionBind', 'functionSent',
    'jsx', 'objectRestSpread', 'trailingFunctionCommas'] };
var esprimaOptions = { loc: true };
var espreeOptions = { loc: true, ecmaVersion: 6, ecmaFeatures: { jsx: true } };

function log(message) {
    if (testconfig.parserDebug) {
        console.log(message);
    }
}

var parsers = [];

if (testconfig.parsers.acorn) {
    parsers.push({
        analyse: function (code, options, parserOptions) {
            var report = escomplex.analyse(this.parse(code, parserOptions), mozWalker, options);
            log('!! (acorn): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'acorn',
        parse: function (code, options) {
            options = typeof options === 'object' ? options : acornOptions;
            options.sourceType = esmRegex.test(code) ? 'module' : 'script';
            var ast = acorn.parse(code, options);
            log('!! (acorn): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}

if (testconfig.parsers.babylon) {
    parsers.push({
        analyse: function (code, options, parserOptions) {
            var report = escomplex.analyse(this.parse(code, parserOptions), mozWalker, options);
            log('!! (babylon): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'babylon',
        parse: function (code, options) {
            options = typeof options === 'object' ? options : babylonOptions;
            options.sourceType = esmRegex.test(code) ? 'module' : 'script';
            var ast = babylon.parse(code, options);
            log('!! (babylon): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}

if (testconfig.parsers.espree) {
    parsers.push({
        analyse: function (code, options, parserOptions) {
            var report = escomplex.analyse(this.parse(code, parserOptions), mozWalker, options);
            log('!! (espree): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'espree',
        parse: function (code, options) {
            options = typeof options === 'object' ? options : espreeOptions;
            options.sourceType = esmRegex.test(code) ? 'module' : 'script';
            var ast = espree.parse(code, options);
            log('!! (espree): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}

if (testconfig.parsers.esprima) {
    parsers.push({
        analyse: function (code, options, parserOptions) {
            var report = escomplex.analyse(this.parse(code, parserOptions), mozWalker, options);
            log('!! (esprima): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'esprima',
        parse: function (code, options) {
            options = typeof options === 'object' ? options : esprimaOptions;
            options.sourceType = esmRegex.test(code) ? 'module' : 'script';
            var ast = esprima.parse(code, esprimaOptions);
            log('!! (esprima): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}


module.exports = parsers;
