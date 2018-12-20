import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleCore'])
{
   parsers.forEach((parser) =>
   {
      suite(`(${parser.name}): module (Core):`, () =>
      {
         suite('function call:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('parseInt("10", 10);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct physical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.physical, 1);
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('aggregate has correct cyclomatic complexity density', () =>
            {
               assert.strictEqual(report.aggregate.cyclomaticDensity, 100);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 1);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });

            test('aggregate has correct Halstead operator identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operators.identifiers,
                  report.aggregate.halstead.operators.distinct
               );
            });

            test('aggregate has correct Halstead operand identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operands.identifiers,
                  report.aggregate.halstead.operands.distinct
               );
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 4);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
            });

            test('aggregate has correct Halstead volume', () =>
            {
               assert.strictEqual(report.aggregate.halstead.volume, 8);
            });

            test('aggregate has correct Halstead effort', () =>
            {
               assert.strictEqual(report.aggregate.halstead.effort, 4);
            });

            test('aggregate has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.aggregate.halstead.bugs, 0.003);
            });

            test('aggregate has correct Halstead time', () =>
            {
               assert.strictEqual(report.aggregate.halstead.time, 0.222);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 166.259);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 0);
            });

            test('mean logical LOC is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.sloc.logical, 1);
               assert.strictEqual(report.methodAverage.sloc.logical, 0);
            });

            test('mean cyclomatic complexity is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.cyclomatic, 1);
               assert.strictEqual(report.methodAverage.cyclomatic, 0);
            });

            test('mean Halstead effort is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.halstead.effort, 4);
               assert.strictEqual(report.methodAverage.halstead.effort, 0);
            });

            test('mean parameter count is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.paramCount, 0);
               assert.strictEqual(report.methodAverage.paramCount, 0);
            });

            test('dependencies is correct', () =>
            {
               assert.lengthOf(report.dependencies, 0);
            });
         });

         suite('condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if (true) { "foo"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct physical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.physical, 1);
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct cyclomatic complexity density', () =>
            {
               assert.strictEqual(report.aggregate.cyclomaticDensity, 100);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 1);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });

            test('aggregate has correct Halstead operator identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operators.identifiers,
                  report.aggregate.halstead.operators.distinct
               );
            });

            test('aggregate has correct Halstead operand identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operands.identifiers,
                  report.aggregate.halstead.operands.distinct
               );
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 3);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
            });

            test('aggregate has correct Halstead volume', () =>
            {
               assert.strictEqual(report.aggregate.halstead.volume, 4.755);
            });

            test('aggregate has correct Halstead effort', () =>
            {
               assert.strictEqual(report.aggregate.halstead.effort, 2.377);
            });

            test('aggregate has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.aggregate.halstead.bugs, 0.002);
            });

            test('aggregate has correct Halstead time', () =>
            {
               assert.strictEqual(report.aggregate.halstead.time, 0.132);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 156.116);
            });

            test('mean logical LOC is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.sloc.logical, 2);
               assert.strictEqual(report.methodAverage.sloc.logical, 0);
            });

            test('mean cyclomatic complexity is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.cyclomatic, 2);
               assert.strictEqual(report.methodAverage.cyclomatic, 0);
            });

            test('mean Halstead effort is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.halstead.effort, 2.377);
               assert.strictEqual(report.methodAverage.halstead.effort, 0);
            });

            test('mean parameter count is correct', () =>
            {
               assert.strictEqual(report.aggregateAverage.paramCount, 0);
               assert.strictEqual(report.methodAverage.paramCount, 0);
            });

            test('dependencies is correct', () =>
            {
               assert.lengthOf(report.dependencies, 0);
            });
         });

         suite('condition with alternate:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if (true) { "foo"; } else { "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct physical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.physical, 1);
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });

            test('aggregate has correct Halstead operator identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operators.identifiers,
                  report.aggregate.halstead.operators.distinct
               );
            });

            test('aggregate has correct Halstead operand identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operands.identifiers,
                  report.aggregate.halstead.operands.distinct
               );
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 5);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 1);
            });

            test('aggregate has correct Halstead volume', () =>
            {
               assert.strictEqual(report.aggregate.halstead.volume, 11.61);
            });

            test('aggregate has correct Halstead effort', () =>
            {
               assert.strictEqual(report.aggregate.halstead.effort, 11.61);
            });

            test('aggregate has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.aggregate.halstead.bugs, 0.004);
            });

            test('aggregate has correct Halstead time', () =>
            {
               assert.strictEqual(report.aggregate.halstead.time, 0.645);
            });
         });

         suite('dual condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if (true) { "foo"; } if (false) { "bar"; }');
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
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });

            test('aggregate has correct Halstead operator identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operators.identifiers,
                  report.aggregate.halstead.operators.distinct
               );
            });

            test('aggregate has correct Halstead operand identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operands.identifiers,
                  report.aggregate.halstead.operands.distinct
               );
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 6);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
            });
         });

         suite('alternate dual condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if (true) { "foo"; } else if (false) { "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 5);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });

            test('aggregate has correct Halstead operator identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operators.identifiers,
                  report.aggregate.halstead.operators.distinct
               );
            });

            test('aggregate has correct Halstead operand identifier length', () =>
            {
               assert.lengthOf(
                  report.aggregate.halstead.operands.identifiers,
                  report.aggregate.halstead.operands.distinct
               );
            });
         });

         suite('nested condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if (true) { "foo"; if (false) { "bar"; } }');
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
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });
         });

         suite('switch statement:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'switch (Date.now()) { case 1: "foo"; break; case 2: "bar"; break; default: "baz"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 10);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct cyclomatic complexity density', () =>
            {
               assert.strictEqual(report.aggregate.cyclomaticDensity, 30);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 8);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 7);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
            });
         });

         suite('switch statement with fall-through case:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('switch (Date.now()) { case 1: case 2: "foo"; break; default: "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 8);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 7);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 6);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
            });
         });

         suite('switch statement containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'switch (Date.now()) { '
                + '    case 1: "foo"; break; '
                + '    case 2: "bar"; break; '
                + '    default: if (true) { "baz"; } '
                + '}');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 11);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 4);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 9);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 7);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 8);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
            });
         });

         suite('for loop:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var i; for (i = 0; i < 10; i += 1) { "foo"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct Halstead operand identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operands.identifiers),
                '["i","0","10","1","\\"foo\\""]');
            });

            test('aggregate has correct Halstead operator identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operators.identifiers),
                '["var","for","=","<","+="]');
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 5);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 8);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 13);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 4);
            });
         });

         suite('for loop containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var i; for (i = 0; i < 10; i += 1) { if (true) { "foo"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 6);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 9);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
            });
         });

         suite('for...in loop:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var property; for (property in { foo: "bar", baz: "qux" }) { "wibble"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 5);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 7);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 12);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 2.333);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 137.7);
            });
         });

         suite('for...in loop containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'var property, object = { foo: "bar", baz: "qux" }; '
                + 'for (property in object) { if (object.hasOwnProperty(property)) { "wibble"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 9);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 8);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 12);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
            });
         });

         suite('while loop:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('while (true) { "foo"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 1);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('while loop containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('while (true) { if (true) { "foo"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('do...while loop:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('do { "foo"; } while (true)');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 1);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('do...while loop containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('do { if (true) { "foo"; } } while (true)');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('try...catch:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { "foo"; } catch (e) { e.message; }');
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
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('try containing condition', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { if (true) { "foo"; } } catch (e) { "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });
         });

         suite('catch containing condition', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { "foo"; } catch (e) { if (true) { "bar"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });
         });

         suite('catch with finally containing condition', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { "foo"; } catch (e) { } finally { if (true) { "bar"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 4);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });
         });

         suite('function declaration:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('methods has correct length', () =>
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
               assert.strictEqual(report.methods[0].sloc.logical, 1);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 1);
            });

            test('method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 1);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 3);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
            });

            test('method has correct Halstead length', () =>
            {
               assert.strictEqual(report.methods[0].halstead.length, 1);
            });

            test('method has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methods[0].halstead.vocabulary, 1);
            });

            test('method has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methods[0].halstead.difficulty, 0);
            });

            test('method has correct Halstead volume', () =>
            {
               assert.strictEqual(report.methods[0].halstead.volume, 0);
            });

            test('method has correct Halstead effort', () =>
            {
               assert.strictEqual(report.methods[0].halstead.effort, 0);
            });

            test('method has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.methods[0].halstead.bugs, 0);
            });

            test('method has correct Halstead time', () =>
            {
               assert.strictEqual(report.methods[0].halstead.time, 0);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 170.409);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 0);
            });
         });

         suite('nested function declaration:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { bar(); function bar () { "baz"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 2);
            });

            test('first method has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.logical, 2);
            });

            test('second method has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methods[1].sloc.logical, 1);
            });

            test('first method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'foo');
            });

            test('second method has correct name', () =>
            {
               assert.strictEqual(report.methods[1].name, 'bar');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('function declaration containing condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { if (true) { "bar"; } }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 2);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomaticDensity, 100);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('assignment expression', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = "bar";');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('methods is empty', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('member expression computed (literal)', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = this["bar"];');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 4);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });

            test('aggregate has correct Halstead operator identifier `[]`', () =>
            {
               assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('[]'), 0);
            });

            test('aggregate does not have Halstead operator identifier `.`', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.identifiers.indexOf('.'), -1);
            });
         });

         suite('member expression computed (binary expression)', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = this[bar + biz + baz];');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 6);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });

            test('aggregate has correct Halstead operator identifier `[]`', () =>
            {
               assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('[]'), 0);
               assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('+'), 0);
            });

            test('aggregate does not have Halstead operator identifier `.`', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.identifiers.indexOf('.'), -1);
            });

            test('aggregate has correct Halstead operand identifier `bar, biz, baz`', () =>
            {
               assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('bar'), 0);
               assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('biz'), 0);
               assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('baz'), 0);
            });
         });

         suite('regexp expression', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = /bar/g;');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('functions has correct length', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });

            test('aggregate has regex operand identifier', () =>
            {
               assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('/bar/g'), 0);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 4);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 1);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 163.888);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 0);
            });
         });

         suite('ternary condtional expression assigned to variable:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = true ? "bar" : "baz";');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });
         });

         suite('nested ternary condtional expression:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = true ? "bar" : (false ? "baz" : "qux");');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 4);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 6);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
            });
         });

         suite('logical or expression assigned to variable:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = true || false;');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('anonymous function assigned to variable:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = function () { "bar"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('named function assigned to variable:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = function bar () { "baz"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'bar');
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('ternary condtional expression returned from function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { return true ? "bar" : "baz"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
            });
         });

         suite('logical or expression returned from function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { return true || false; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('anonymous function returned from function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { return function () { "bar"; }; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 2);
            });

            test('first method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'foo');
            });

            test('second method is anonymous', () =>
            {
               assert.strictEqual(report.methods[1].name, '<anon method-1>');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('named function returned from function:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { return function bar () { "baz"; }; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('second method has correct name', () =>
            {
               assert.strictEqual(report.methods[1].name, 'bar');
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('ternary condtional expression passed as argument:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('parseInt("10", true ? 10 : 8);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 5);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
            });
         });

         suite('logical or expression passed as argument:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('parseInt("10", 10 || 8);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });
         });

         suite('anonymous function passed as argument:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('setTimeout(function () { "foo"; }, 1000);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method is anonymous', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('named function passed as argument:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('setTimeout(function foo () { "bar"; }, 1000);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, 'foo');
            });
         });

         suite('logical AND expression:', () =>
         {
            test('aggregate has correct cyclomatic complexity', () =>
            {
               const report = parser.analyze('var foo = true && false;', {});
               assert.strictEqual(report.aggregate.cyclomatic, 2);
               assert.strictEqual(report.methodAverage.cyclomatic, 0);
            });
         });

         suite('logical OR expression with logicalor false:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = true || false;', { logicalor: false });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });
         });

         suite('switch statement with switchcase false:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'switch (Date.now()) { case 1: "foo"; break; case 2: "bar"; break; default: "baz"; }',
                  { switchcase: false });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });
         });

         suite('for...in loop with forin true:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                'var property; for (property in { foo: "bar", baz: "qux" }) { "wibble"; }', { forin: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct Halstead operand identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operands.identifiers),
                '["property","foo","\\"bar\\"","baz","\\"qux\\"","\\"wibble\\""]');
            });

            test('aggregate has correct Halstead operator identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operators.identifiers),
                '["var","forin","{}",":"]');
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 137.007);
            });
         });

         suite('try...catch with trycatch true:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { "foo"; } catch (e) { e.message; }', { trycatch: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 2);
            });
         });

         suite('IIFE:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                '(function (foo) { if (foo === "foo") { console.log(foo); return; } "bar"; }("foo"));');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 6);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 2);
            });

            test('method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 7);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 8);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 1);
            });
         });

         suite('logical and condition:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('if ("foo" && "bar") { "baz"; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 2);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 3);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('call on function object:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('(function () { "foo"; }).call(this);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 4);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('anonymous function assigned to property:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = {}; foo.bar = function () { "foobar"; };');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 6);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
            });
         });

         suite('anonymous function assigned to property of literal:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('"".bar = function () { "bar"; };');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });
         });

         suite('empty object literal:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = {};');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 3);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 1);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
            });
         });

         suite('function property of literal object:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = { bar: "bar", baz: function () { "baz"; } };');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 5);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 6);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 5);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
            });
         });

         suite('duplicate function properties of literal object:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'var foo = { bar: function () { if (true) { "bar"; } }, bar: function () { "bar"; } };');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 2);
            });

            test('first method has correct name', () =>
            {
               assert.strictEqual(report.methods[0].name, '<anon method-1>');
            });

            test('second method has correct name', () =>
            {
               assert.strictEqual(report.methods[1].name, '<anon method-2>');
            });

            test('first method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 2);
            });

            test('second method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[1].cyclomatic, 1);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 4);
            });
         });

         suite('throw exception:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('try { throw new Error("foo"); } catch (e) { alert(error.message); }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 4);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 6);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 6);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 6);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
            });
         });

         suite('prefix and postfix increment:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var a = 0; ++a; a++;');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 3);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 4);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 4);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('array literal:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('[ "foo", "bar" ];');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 1);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 0);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 2);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
            });
         });

         suite('multiple physical lines:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  '// This is a\n// multi-line\n// comment.\nparseInt(\n\t(function () {\n\t\t// Moar\n\t\t'
                + '// commentz!\n\t\treturn [\n\t\t\t"1",\n\t\t\t"0"\n\t\t].join("");\n\t}()),\n\t10\n);');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('report has correct line start / end', () =>
            {
               switch (parser.name)
               {
                  // acorn, babelParser & babylon sets the start location at line 1 (first comment) instead of
                  // line 4 (first line of code).
                  case 'acorn':
                  case 'babelParser':
                  case 'babylon':
                     assert.strictEqual(report.lineStart, 1);
                     assert.strictEqual(report.lineEnd, 14);
                     break;
                  default:
                     assert.strictEqual(report.lineStart, 4);
                     assert.strictEqual(report.lineEnd, 14);
               }
            });

            test('aggregate has correct physical lines of code', () =>
            {
               switch (parser.name)
               {
                  // acorn, babelParser & babylon sets the start location at line 1 (first comment) instead of
                  // line 4 (first line of code).
                  case 'acorn':
                  case 'babelParser':
                  case 'babylon':
                     assert.strictEqual(report.aggregate.sloc.physical, 14);
                     break;
                  default:
                     assert.strictEqual(report.aggregate.sloc.physical, 11);
               }
            });

            test('aggregate has correct Halstead operand identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operands.identifiers),
                '["parseInt","\\"1\\"","\\"0\\"","join","\\"\\"","10"]');
            });

            test('aggregate has correct Halstead operator identifiers', () =>
            {
               assert.strictEqual(JSON.stringify(report.aggregate.halstead.operators.identifiers),
                '["()","function","return",".","[]",","]');
            });

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 5);
            });

            test('methods has correct length', () =>
            {
               assert.lengthOf(report.methods, 1);
            });

            test('method has correct physical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.physical, 8);
            });

            test('method has correct logical lines of code', () =>
            {
               assert.strictEqual(report.methods[0].sloc.logical, 2);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 141.377);
            });
         });

         suite('multiple functions:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'function foo (a, b) { if (a) { b(a); } else { a(b); } } '
                + 'function bar (c, d) { var i; for (i = 0; i < c.length; i += 1) { d += 1; } console.log(d); }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 129.225);
            });

            test('first method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 2);
            });

            test('second method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[1].paramCount, 2);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 4);
            });

            test('mean logical LOC is correct', () =>
            {
               assert.strictEqual(report.methodAverage.sloc.logical, 4);
            });

            test('mean cyclomatic complexity is correct', () =>
            {
               assert.strictEqual(report.methodAverage.cyclomatic, 2);
            });

            test('mean Halstead effort is correct', () =>
            {
               assert.strictEqual(report.methodAverage.halstead.effort, 283.607);
            });

            test('mean parameter count is correct', () =>
            {
               assert.strictEqual(report.methodAverage.paramCount, 2);
            });
         });

         suite('issue 3 / reddit.ISV_Damocles:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'var callback = arguments[arguments.length-1] instanceof Function ? '
                + 'arguments[arguments.length-1] : function() {};');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 150.966);
            });
         });

         suite('empty return:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { return; }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 2);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 1);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 1);
            });

            test('method has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 168.038);
            });
         });

         suite('Empty nested functions', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo () { function bar () {} }');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 171);
            });
         });

         suite('Microsoft variant maintainability index:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'function foo (a, b) { if (a) { b(a); } else { a(b); } }'
                 + 'function bar (c, d) { var i; for (i = 0; i < c.length; i += 1) { d += 1; } console.log(d); }',
                    { newmi: true }
               );
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 75.57);
            });
         });

         suite('Functions with consistent parameter counts:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('function foo (a) {} function bar (b) {} function baz (c) {}');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 3);
            });

            test('mean parameter count is correct', () =>
            {
               assert.strictEqual(report.methodAverage.paramCount, 1);
            });
         });

         suite('Functions with inconsistent parameter counts:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze(
                  'function foo (a, b, c, d, e) {} function bar (a, b, c, d, e) {} function baz (a) {}');
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 11);
            });

            test('mean parameter count is correct', () =>
            {
               assert.strictEqual(report.methodAverage.paramCount, 3.667);
            });
         });

         suite('CommonJS require literal:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('require("./foo");', { commonjs: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('dependencies has correct length', () =>
            {
               assert.lengthOf(report.dependencies, 1);
            });

            test('dependencies are correct', () =>
            {
               assert.isObject(report.dependencies[0]);
               assert.strictEqual(report.dependencies[0].line, 1);
               assert.strictEqual(report.dependencies[0].path, './foo');
               assert.strictEqual(report.dependencies[0].type, 'cjs');
            });
         });

         suite('alternative CommonJS require literal:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('require("./bar");', { commonjs: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('dependencies are correct', () =>
            {
               assert.strictEqual(report.dependencies[0].path, './bar');
            });
         });

         suite('CommonJS require multiple:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('require("./foo");\nrequire("./bar");\n\nrequire("./baz");', { commonjs: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('dependencies has correct length', () =>
            {
               assert.lengthOf(report.dependencies, 3);
            });

            test('dependencies are correct', () =>
            {
               assert.strictEqual(report.dependencies[0].line, 1);
               assert.strictEqual(report.dependencies[0].path, './foo');
               assert.strictEqual(report.dependencies[1].line, 2);
               assert.strictEqual(report.dependencies[1].path, './bar');
               assert.strictEqual(report.dependencies[2].line, 4);
               assert.strictEqual(report.dependencies[2].path, './baz');
            });
         });

         suite('CommonJS require variable:', () =>
         {
            let report;

            setup(() =>
            {
               report = parser.analyze('var foo = "./foo";require(foo);', { commonjs: true });
            });

            teardown(() =>
            {
               report = undefined;
            });

            test('dependencies has correct length', () =>
            {
               assert.lengthOf(report.dependencies, 1);
            });

            test('dependencies are correct', () =>
            {
               assert.isObject(report.dependencies[0]);
               assert.strictEqual(report.dependencies[0].line, 1);
               assert.strictEqual(report.dependencies[0].path, '* dynamic dependency *');
               assert.strictEqual(report.dependencies[0].type, 'cjs');
            });
         });
      });
   });
}
