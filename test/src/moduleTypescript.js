import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleTypescript'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (Typescript):`, () =>
      {
         suite('basic function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                'function foo<T extends { x: number }>(obj: T): T { console.log(Math.abs(obj.x)); return obj; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('methodAggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methodAggregate.sloc.logical, 4);
            });

            test('methodAggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methodAggregate.cyclomatic, 2);
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

            test('methodAggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.total, 7);
            });

            test('methodAggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
            });

            test('methodAggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.total, 11);
            });

            test('methodAggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 8);
            });

            test('methodAggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.length, 18);
            });

            test('methodAggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.vocabulary, 12);
            });

            test('methodAggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.75);
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

            test('methodAggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.methodAggregate.paramCount, 1);
            });
         });
      });
   });
}
