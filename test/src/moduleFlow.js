import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleFlow'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babylon' && parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (Flow Typing):`, () =>
      {
         suite('basic function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                'function foo<T: { x: number }>(obj: T): T { console.log(Math.abs(obj.x)); return obj; }', void 0,
                 void 0, { flow: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('functions has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'foo');
            });

            test('method has correct physical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.physical, 1);
            });

            test('method has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.logical, 3);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 1);
            });

            test('method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 7);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 11);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 18);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 12);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 2.75);
            });

            test('method has correct Halstead length', () =>
            {
               assert.strictEqual(report.methods[0].halstead.length, 15);
            });

            test('method has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methods[0].halstead.vocabulary, 10);
            });

            test('method has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methods[0].halstead.difficulty, 1.929);
            });

            test('method has correct Halstead volume', () =>
            {
               assert.strictEqual(report.methods[0].halstead.volume, 49.829);
            });

            test('method has correct Halstead effort', () =>
            {
               assert.strictEqual(report.methods[0].halstead.effort, 96.099);
            });

            test('method has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.methods[0].halstead.bugs, 0.017);
            });

            test('method has correct Halstead time', () =>
            {
               assert.strictEqual(report.methods[0].halstead.time, 5.339);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 144.43);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 1);
            });
         });
      });
   });
}
