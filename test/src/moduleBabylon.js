'use strict';

import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleBabylon'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babylon') { return; }

      suite(`(${parser.name}): module (ES7):`, () =>
      {
         suite('Experimental', () =>
         {
            suite('object spread / rest:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 7);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 8);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 13);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 9);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 21);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 13);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.889);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 120.961);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('object spread / rest (abbreviated React example):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(
                     'function expectTree(rootID, expectedTree, parentPath) {\n'
                   + '    var childIDs = [];\n'
                   + '    var path = "TEST";\n'
                   + '    if (expectedTree.children !== undefined) {\n'
                   + '        for (var i = 0; i < childIDs.length; i++) {\n'
                   + '           expectTree(\n'
                   + '               childIDs[i],\n'
                   + '               { parentID: rootID, ...expectedTree.children[i] },\n'
                   + '               path,\n'
                   + '           );\n'
                   + '        }\n'
                   + '    }\n'
                   + '}\n');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 8);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 3);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method has correct name', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'expectTree');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 13);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 7);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 3);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 3);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 21);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 13);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 25);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 13);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 46);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 26);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 12.5);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 44);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 25);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 11.077);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 204.33);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 2263.344);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.068);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 125.741);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 112.805);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 3);
               });
            });
         });

         suite('Flow Typing', () =>
         {
            suite('basic function:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('function bar(x: string, y: number): string { return x.length * y; }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method has correct name', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'bar');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 1);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 2);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 10);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 8);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 6);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 20.68);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 51.699);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.007);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 2.872);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 157.507);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 2);
               });
            });
         });
      });
   });
}
