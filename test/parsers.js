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

var espreeESMOptions = {
    loc: true,
    range: true,
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {}
};

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
            //var ast = JSON.parse('{"type":"Program","start":0,"end":143,"loc":{"start":{"line":4,"column":0},"end":{"line":14,"column":2}},"body":[{"type":"ExpressionStatement","start":39,"end":143,"loc":{"start":{"line":4,"column":0},"end":{"line":14,"column":2}},"expression":{"type":"CallExpression","start":39,"end":142,"loc":{"start":{"line":4,"column":0},"end":{"line":14,"column":1}},"callee":{"type":"Identifier","start":39,"end":47,"loc":{"start":{"line":4,"column":0},"end":{"line":4,"column":8}},"name":"parseInt"},"arguments":[{"type":"CallExpression","start":51,"end":134,"loc":{"start":{"line":5,"column":2},"end":{"line":12,"column":4}},"callee":{"type":"FunctionExpression","start":51,"end":132,"loc":{"start":{"line":5,"column":2},"end":{"line":12,"column":2}},"id":null,"generator":false,"expression":false,"params":[],"body":{"type":"BlockStatement","start":63,"end":132,"loc":{"start":{"line":5,"column":14},"end":{"line":12,"column":2}},"body":[{"type":"ReturnStatement","start":92,"end":129,"loc":{"start":{"line":8,"column":2},"end":{"line":11,"column":13}},"argument":{"type":"CallExpression","start":99,"end":128,"loc":{"start":{"line":8,"column":9},"end":{"line":11,"column":12}},"callee":{"type":"MemberExpression","start":99,"end":124,"loc":{"start":{"line":8,"column":9},"end":{"line":11,"column":8}},"object":{"type":"ArrayExpression","start":99,"end":119,"loc":{"start":{"line":8,"column":9},"end":{"line":11,"column":3}},"elements":[{"type":"Literal","start":104,"end":107,"loc":{"start":{"line":9,"column":3},"end":{"line":9,"column":6}},"value":"1","raw":"\"1\""},{"type":"Literal","start":112,"end":115,"loc":{"start":{"line":10,"column":3},"end":{"line":10,"column":6}},"value":"0","raw":"\"0\""}]},"property":{"type":"Identifier","start":120,"end":124,"loc":{"start":{"line":11,"column":4},"end":{"line":11,"column":8}},"name":"join"},"computed":false},"arguments":[{"type":"Literal","start":125,"end":127,"loc":{"start":{"line":11,"column":9},"end":{"line":11,"column":11}},"value":"","raw":"\"\""}]}}]}},"arguments":[]},{"type":"Literal","start":138,"end":140,"loc":{"start":{"line":13,"column":1},"end":{"line":13,"column":3}},"value":10,"raw":"10"}]}}],"sourceType":"script"}');
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
            var options = espreeESMOptions; //esmRegex.test(code) ? esprimaESMOptions : esprimaOptions;
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
