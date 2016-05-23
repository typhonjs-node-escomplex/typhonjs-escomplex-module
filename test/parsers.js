/* eslint no-console: "off" */

'use strict';

var acorn = require('acorn');
var espree = require('espree');
var esprima = require('esprima');

var escomplex = require('../src/module');
var mozWalker = require('../src/walker');
var testconfig = require('./testconfig');

var esmRegex = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;

var acornOptions = { locations: true };
var acornESMOptions = { locations: true, sourceType: 'module' };

var esprimaOptions = { loc: true };
var esprimaESMOptions = { loc: true, sourceType: 'module' };

var espreeOptions = { loc: true, ecmaVersion: 6, ecmaFeatures: { jsx: true } };
var espreeESMOptions = { loc: true, ecmaVersion: 6, sourceType: 'module', ecmaFeatures: { jsx: true } };

var debug = false;

function log(message) {
    if (debug) {
        console.log(message);
    }
}

var parsers = [];

if (testconfig.parsers.acorn) {
    parsers.push({
        analyse: function (code, options) {
            var report = escomplex.analyse(this.parse(code), mozWalker, options);
            log('!! (acorn): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'acorn',
        parse: function (code) {
            var options = esmRegex.test(code) ? acornESMOptions : acornOptions;
            var ast = acorn.parse(code, options);
            log('!! (acorn): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}

if (testconfig.parsers.espree) {
    parsers.push({
        analyse: function (code, options) {
            var report = escomplex.analyse(this.parse(code), mozWalker, options);
            log('!! (espree): parser - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'espree',
        parse: function (code) {
            var options = esmRegex.test(code) ? espreeESMOptions : espreeOptions;
            var ast = espree.parse(code, options);
            log('!! (espree): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}

if (testconfig.parsers.esprima) {
    parsers.push({
        analyse: function (code, options) {
            var report = escomplex.analyse(this.parse(code), mozWalker, options);
            log('!! (esprima): analyse - report: ' + JSON.stringify(report));
            return report;
        },
        name: 'esprima',
        parse: function (code) {
            var options = esmRegex.test(code) ? esprimaESMOptions : esprimaOptions;
            var ast = esprima.parse(code, options);
            log('!! (esprima): parse - ast: ' + JSON.stringify(ast));
            return ast;
        }
    });
}


module.exports = parsers;
