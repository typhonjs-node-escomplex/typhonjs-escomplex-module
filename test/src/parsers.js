'use strict';

import * as acorn       from 'acorn';
import * as babylon     from 'babylon';
import * as espree      from 'espree';
import * as esprima     from 'esprima';

import * as testconfig  from './testconfig';

import escomplex        from '../../src';

const esmRegex = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?[^"'\(\)\n;]+\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s* (\{|default|function|class|var|const|let|async\s+function))/;

const acornOptions = { locations: true };

const babylonOptions =
{
   plugins: ['asyncFunctions', 'asyncGenerators', 'classConstructorCall', 'classProperties', 'decorators',
    'doExpressions', 'exportExtensions', 'exponentiationOperator', 'flow', 'functionBind', 'functionSent',
     'jsx', 'objectRestSpread', 'trailingFunctionCommas']
};

const esprimaOptions = { loc: true };

const espreeOptions = { loc: true, ecmaVersion: 6, ecmaFeatures: { jsx: true } };

/**
 * Provides a debug logger.
 * @param {string}   message - log message
 */
function log(message)
{
   if (testconfig.parserDebug) { console.log(message); }
}

const parsers = [];

if (testconfig.parsers.acorn)
{
   parsers.push(
   {
      analyse: function(code, options, parserOptions)
      {
         const report = escomplex.analyse(this.parse(code, parserOptions), options);
         log(`!! (acorn): analyse - report: ${JSON.stringify(report)}`);
         return report;
      },
      name: 'acorn',
      parse: function(code, options)
      {
         options = typeof options === 'object' ? options : acornOptions;
         options.sourceType = esmRegex.test(code) ? 'module' : 'script';
         const ast = acorn.parse(code, options);
         log(`!! (acorn): parse - ast: ${JSON.stringify(ast)}`);
         return ast;
      }
   });
}

if (testconfig.parsers.babylon)
{
   parsers.push(
   {
      analyse: function(code, options, parserOptions)
      {
         const report = escomplex.analyse(this.parse(code, parserOptions), options);
         log(`!! (babylon): analyse - report: ${JSON.stringify(report)}`);
         return report;
      },
      name: 'babylon',
      parse: function(code, options)
      {
         options = typeof options === 'object' ? options : babylonOptions;
         options.sourceType = esmRegex.test(code) ? 'module' : 'script';
         const ast = babylon.parse(code, options);
         log(`!! (babylon): parse - ast: ${JSON.stringify(ast)}`);
         return ast;
      }
   });
}

if (testconfig.parsers.espree)
{
   parsers.push(
   {
      analyse: function(code, options, parserOptions)
      {
         const report = escomplex.analyse(this.parse(code, parserOptions), options);
         log(`!! (espree): analyse - report: ${JSON.stringify(report)}`);
         return report;
      },
      name: 'espree',
      parse: function(code, options)
      {
         options = typeof options === 'object' ? options : espreeOptions;
         options.sourceType = esmRegex.test(code) ? 'module' : 'script';
         const ast = espree.parse(code, options);
         log(`!! (espree): parse - ast: ${JSON.stringify(ast)}`);
         return ast;
      }
   });
}

if (testconfig.parsers.esprima)
{
   parsers.push(
   {
      analyse: function(code, options, parserOptions)
      {
         const report = escomplex.analyse(this.parse(code, parserOptions), options);
         log(`!! (esprima): analyse - report: ${JSON.stringify(report)}`);
         return report;
      },
      name: 'esprima',
      parse: function(code, options)
      {
         options = typeof options === 'object' ? options : esprimaOptions;
         options.sourceType = esmRegex.test(code) ? 'module' : 'script';
         const ast = esprima.parse(code, esprimaOptions);
         log(`!! (esprima): parse - ast: ${JSON.stringify(ast)}`);
         return ast;
      }
   });
}


export default parsers;
