'use strict';

import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleES6'])
{
   parsers.forEach((parser) =>
   {
      suite(`(${parser.name}): module (ES6):`, () =>
      {
         suite('Functions', () =>
         {
            suite('generator functions:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('function* foo() {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
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
                  assert.strictEqual(report.methods[0].name, 'foo');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 0);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 1);
               });

               test('methodAggregate has generator function Halstead operator', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('function*'), 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 2);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 2);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0.5);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 0);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 0);
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
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Statements', () =>
         {
            suite('for...of:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('for (let value of [10, 20, 30]) {}');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has forof Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('forof'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 146.129);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Declarations', () =>
         {
            suite('let / const variable declarations', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('let foo = "bar"; const bar = "foo";');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has let and const Halstead operator identifiers', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('let'), 0);
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('const'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 8);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 147.742);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Expressions', () =>
         {
            suite('CallExpression (super):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo {}; class Bar extends Foo { constructor() { super(); } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[1].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.length, 2);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.vocabulary, 2);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.effort, 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.time, 0.056);
               });

               test('methodAggregate has super Halstead operand identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operands.identifiers.indexOf('super'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.875);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('MemberExpression (super):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { constructor() { this.foobar = "foobar"; } }; '
                   + 'class Bar extends Foo { constructor() { let test = super.foobar; } }');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[1].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.length, 6);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.vocabulary, 6);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.difficulty, 1.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.volume, 15.51);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.effort, 23.265);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.bugs, 0.005);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.time, 1.292);
               });

               test('methodAggregate has super Halstead operand identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operands.identifiers.indexOf('super'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 9);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
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
                  assert.strictEqual(report.methodAggregate.halstead.length, 20);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 13);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.438);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 161.224);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ArrayExpression (spread)', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const iter = [2, 3, 4]; const spreadTest = [1, ...iter, 5];');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has `... (spread)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('... (spread)'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 11);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 8);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 7);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 19);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 12);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.857);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 141.744);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('CallExpression (spread):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const iter = [2, 3, 4]; const foo = (b, a, r) => {}; foo(...iter);');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 0);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 3);
               });

               test('methodAggregate has `... (spread)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('... (spread)'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 10);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 7);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 10);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 8);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 20);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 15);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4.375);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 3);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 3);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 4.755);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 0);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.002);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 3);
               });
            });

            suite('ArrowFunctionExpression (explicit):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('(x, y) => { return x + y; };');
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
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
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 6);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 4);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 2);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 12);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 24);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.004);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 1.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 160.131);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 2);
               });
            });

            suite('ArrowFunctionExpression (implicit):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('(x, y) => x + y;');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 6);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 5);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 3);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 1);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 7.925);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 7.925);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.003);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.44);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 2);
               });
            });

            suite('YieldExpression (yield):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('function* foo() { let index = 0; yield index++; }');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
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
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.333);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 7);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 6);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 3);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 18.095);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 54.284);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.006);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 3.016);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 139.542);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('YieldExpression (yield*):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('function* foo() { yield* [1, 2, 3]; }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
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
                  assert.strictEqual(report.methods[0].name, 'foo');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 2);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has generator function Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('function*'), 0);
               });

               test('methodAggregate has delegate yield function Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('yield*'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 7);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 6);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 18.095);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 27.142);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.006);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 1.508);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 148.481);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Template Literals', () =>
         {
            suite('TemplateLiteral / TemplateElement (basic):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const foo = `bar`;');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 4);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 163.888);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('TemplateLiteral / TemplateElement (variable):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const baz = "bar"; const foo = `fuz${baz}`;');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 6);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.25);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 148.245);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('TemplateLiteral / TemplateElement (function):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const baz = "bar"; const foo = `fuz${JSON.stringify(baz)}`;');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 6);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 13);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 143.995);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('TaggedTemplateExpression:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const foo = tagged`bar`;');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 5);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Patterns', () =>
         {
            suite('ObjectPattern (destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const bar = { a: 1, b: 2, c: 3 }; const { a, b, c } = bar;');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 9);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 14);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 7);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 23);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 11);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 117.604);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ObjectPattern (anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const { a, b, c } = { a: 1, b: 2, c: 3 };');
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

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 12);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 6);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 19);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 120.559);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ObjectPattern (computed object property names and anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const id = "z"; const { [id]: foo } = { z: "bar" };');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 14);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 132.577);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ObjectPattern 2 (anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('let a, b; ({a, b} = { a:1, b:2 });');
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

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 10);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 16);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 120.732);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ArrayPattern (destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const foo = [1, 2]; let [a, b] = foo;');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate does not have <anonymous> (object) Halstead operand identifier', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.identifiers.indexOf('<anonymous>'), -1);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 8);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 14);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 142.882);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ArrayPattern (anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('let [a, b] = [1, 2];');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 156.997);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('ArrayPattern / RestElement (anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const [a, b, ...restTest] = [1, 2, 3, 4, 5];');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has `... (rest)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('... (rest)'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 11);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 8);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 8);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 19);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 13);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 153.321);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('FunctionDeclaration `defaults` (esprima) / AssignmentPattern (espree):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('function foo(first, bar = "baz", ...items) {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
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
                  assert.strictEqual(report.methods[0].name, 'foo');
               });

               test('method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.physical, 1);
               });

               test('method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 0);
               });

               test('method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
               });

               test('method has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].params, 3);
               });

               test('methodAggregate has `... (rest)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('... (rest)'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 5);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 5);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 11.61);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 5.805);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.004);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.322);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 3);
               });
            });
         });

         suite('Classes', () =>
         {
            suite('class declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 1);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 2);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 2);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ superclass:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Bar {} class Foo extends Bar {}');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 1);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 5);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 3);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0.75);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 153.675);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ constructor:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { constructor() { this.bar = 1; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { bar() { this.baz = 1; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ computed generator function method and computed delegated yield:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { *[foo + baz]() { yield 'x'; yield* [bar.biz](); yield 'y'; } }`);
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

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + baz>');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 6);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 10);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 9);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 2.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 31.699);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 79.248);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.011);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 4.403);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 9);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 8);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 7);
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","baz","\\"x\\"","bar","biz","\\"y\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","function*","yield","yield*","()","[]","."]');
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 16);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 15);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 127.019);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ computed (string) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { ['bar']() { this.baz = 1; } }`);
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ computed (variable) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [bar]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~bar>');
               });
            });

            suite('class declaration w/ computed (2 variable concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + bar>');
               });
            });

            suite('class declaration w/ computed (3 variable concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar+biz]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + bar + biz>');
               });
            });

            suite('class declaration w/ computed (2 variable + literal concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar+'biz']() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + 'biz'>`);
               });
            });

            suite('class declaration w/ computed (2 variable + numerical concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar+2]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + 2>`);
               });
            });

            suite('class declaration w/ computed (2 variable + numerical concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar+true]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + true>`);
               });
            });

            suite('class declaration w/ computed (2 variable + null concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo+bar+null]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + null>`);
               });
            });

            suite('class declaration w/ computed (Symbol / 2 member expression) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [Symbol.iterator]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~Symbol.iterator>');
               });
            });

            suite('class declaration w/ computed (3 member expression) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo.bar.biz]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar.biz>');
               });
            });

            suite('class declaration w/ computed (2 member expression + concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo.bar+biz]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar + biz>');
               });
            });

            suite('class declaration w/ computed (2 member expression + concatenation with method called) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze(`class Foo { [foo.bar+biz.toLowerCase()]() { this.baz = 1; } }`);
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar + biz.toLowerCase()>');
               });
            });

            suite('class declaration w/ computed (template literal) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze('class Foo { [`${foo}`]() { this.baz = 1; } }');
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~`${foo}`>');
               });
            });

            suite('class declaration w/ computed (template literal + concatenation) method:', () =>
            {
               test('class method has correct name', () =>
               {
                  const report = parser.analyze('class Foo { [`${foo}`+bar]() { this.baz = 1; } }');
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~`${foo}` + bar>');
               });
            });

            suite('class declaration w/ getter method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { get bar() { return "bar"; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('methodAggregate has `get` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('get'), 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ setter method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { set bar(data) { this._bar = data; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 1);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 6);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.333);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 13.932);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 18.575);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.005);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 1.032);
               });

               test('methodAggregate has `set` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('set'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 161.007);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 1);
               });
            });

            suite('class declaration w/ static method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { static bar() { return "bar"; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('methodAggregate has `static` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('static'), 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class declaration w/ constructor + meta property:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { constructor() { new.target.name; } }');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 4);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 10);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 5);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.003);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.278);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 165.496);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class {}');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 4);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 151.273);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression (named):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class Foo {}');
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
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 5);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 148.139);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ superclass:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Bar = class {}; const Foo = class extends Bar {};');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.25);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 135.373);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression (named) w/ superclass:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Bar = class Bar {}; const Foo = class Foo extends Bar {};');
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
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.75);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 132.94);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ constructor:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { constructor() { this.bar = 1; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { bar() { this.baz = 1; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 11.61);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.645);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ getter method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { get bar() { return "bar"; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('methodAggregate has `get` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('get'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ setter method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { set bar(data) { this._bar = data; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 1);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 6);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.333);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 13.932);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 18.575);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.005);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 1.032);
               });

               test('methodAggregate has `set` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('set'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 13);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 11);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.6);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 161.007);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 1);
               });
            });

            suite('class expression w/ static method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { static bar() { return "bar"; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('methodAggregate has `static` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.methodAggregate.halstead.operators.identifiers.indexOf('static'), 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('class expression w/ constructor + meta property:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const Foo = class { constructor() { new.target.name; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class method has correct name', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
               });

               test('class method has correct physical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.physical, 1);
               });

               test('class method has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class method has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
               });

               test('class method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 4);
               });

               test('class method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 10);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 5);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.003);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.278);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 165.496);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });
         });

         suite('Modules', () =>
         {
            suite('export all from import:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export * from "module";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 3);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 3);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export default class declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export default class Foo {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 1);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 1);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 4);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.502);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export default function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export default function foo () { return "bar"; }');
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
                  assert.strictEqual(report.methods[0].params, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 6);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 6);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 2);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 2);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export named from import:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export { foo, bar } from "module";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.667);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export named function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export function foo () { return "bar"; }');
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
                  assert.strictEqual(report.methods[0].params, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 6);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 6);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 2);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 2);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export default arrow function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export default s_FOO;');
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
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
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 9);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4.5);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 2);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 2);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export named arrow function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export { s_FOO };');
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
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
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 6);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 2);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 2);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('export named arrow function declaration (aliased):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export { s_FOO as s_BAR };');
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
                  assert.strictEqual(report.methods[0].name, '<anonymous>');
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
                  assert.strictEqual(report.methods[0].params, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 7);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 11);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4.667);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 2);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 2);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 0.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.params, 0);
               });
            });

            suite('import default (1):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('import foo from "module";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 4);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 4);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });
            });

            suite('import default (3):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(
                     'import foo from "./foo.js";\nimport bar from "./bar.js";\nimport baz from "./baz.js";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 2);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 6);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 6);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 12);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 3);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, './foo.js');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });

               test('methodAggregate has correct dependency entry[1] line', () =>
               {
                  assert.strictEqual(report.dependencies[1].line, 2);
               });

               test('methodAggregate has correct dependency entry[1] path', () =>
               {
                  assert.strictEqual(report.dependencies[1].path, './bar.js');
               });

               test('methodAggregate has correct dependency entry[1] type', () =>
               {
                  assert.strictEqual(report.dependencies[1].type, 'esm');
               });

               test('methodAggregate has correct dependency entry[2] line', () =>
               {
                  assert.strictEqual(report.dependencies[2].line, 3);
               });

               test('methodAggregate has correct dependency entry[2] path', () =>
               {
                  assert.strictEqual(report.dependencies[2].path, './baz.js');
               });

               test('methodAggregate has correct dependency entry[2] type', () =>
               {
                  assert.strictEqual(report.dependencies[2].type, 'esm');
               });
            });

            suite('import named (1):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('import {baz} from "module";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 6);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 5);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.25);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });
            });

            suite('import named as (1):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('import {foo as bar} from "module";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });
            });

            suite('import namespace (1):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('import * as foo from "mod.js";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 4);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 7);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 6);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'mod.js');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });
            });

            suite('import mixed (4):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(
                     'import foo from "./foo.js";\nimport {bar} from "./bar.js";\n'
                   + 'import {bar as baz} from "./bar.js";\nimport * as bam from "./bam.js";');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 14);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 10);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 7);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 24);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 12);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.571);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 4);
               });

               test('methodAggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('methodAggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, './foo.js');
               });

               test('methodAggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });

               test('methodAggregate has correct dependency entry[1] line', () =>
               {
                  assert.strictEqual(report.dependencies[1].line, 2);
               });

               test('methodAggregate has correct dependency entry[1] path', () =>
               {
                  assert.strictEqual(report.dependencies[1].path, './bar.js');
               });

               test('methodAggregate has correct dependency entry[1] type', () =>
               {
                  assert.strictEqual(report.dependencies[1].type, 'esm');
               });

               test('methodAggregate has correct dependency entry[2] line', () =>
               {
                  assert.strictEqual(report.dependencies[2].line, 3);
               });

               test('methodAggregate has correct dependency entry[2] path', () =>
               {
                  assert.strictEqual(report.dependencies[2].path, './bar.js');
               });

               test('methodAggregate has correct dependency entry[2] type', () =>
               {
                  assert.strictEqual(report.dependencies[2].type, 'esm');
               });

               test('methodAggregate has correct dependency entry[3] line', () =>
               {
                  assert.strictEqual(report.dependencies[3].line, 4);
               });

               test('methodAggregate has correct dependency entry[3] path', () =>
               {
                  assert.strictEqual(report.dependencies[3].path, './bam.js');
               });

               test('methodAggregate has correct dependency entry[3] type', () =>
               {
                  assert.strictEqual(report.dependencies[3].type, 'esm');
               });
            });
         });
      });
   });
}
