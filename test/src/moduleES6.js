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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 1);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 2);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 2);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 0.5);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('aggregate has forof Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('forof'), 0);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 148);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('aggregate has let and const Halstead operator identifiers', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('let'), 0);
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('const'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 4);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 8);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 148);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.time), 0);
               });

               test('aggregate has super Halstead operand identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('super'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 4);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 12);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 12);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
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
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.volume), 16);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.effort), 23);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[1].methods[0].halstead.time), 1);
               });

               test('aggregate has super Halstead operand identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operands.identifiers.indexOf('super'), 0);
               });

               test('aggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.total, 9);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
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
                  assert.strictEqual(report.aggregate.halstead.length, 20);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 13);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 161);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('aggregate has `... (spread)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('... (spread)'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 8);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 15);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 143);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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

               test('aggregate has `... (spread)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('... (spread)'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 10);
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
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 14);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.volume), 5);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 0);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 3);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 160);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 2);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 4);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 6);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.volume), 8);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.effort), 8);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 2);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 4);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 4);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.volume), 18);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.effort), 54);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 140);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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

               test('aggregate has generatorfunction Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('generatorfunction'), 0);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
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
                  assert.strictEqual(report.methods[0].halstead.difficulty, 1);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.volume), 12);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.effort), 12);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 151);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 164);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 4);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 148);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
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
                  assert.strictEqual(report.aggregate.halstead.length, 13);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 144);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 8);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 9);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 14);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 23);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 118);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 7);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 7);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 12);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 6);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 19);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 121);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 4);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 8);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 6);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 14);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 133);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 7);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 10);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 4);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 16);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 121);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
               });

               test('functions has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('aggregate does not have <anonymous> (object) Halstead operand identifier', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.identifiers.indexOf('<anonymous>'), -1);
               });

               test('aggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 6);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 12);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 144);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 4);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 8);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 159);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has `... (rest)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('... (rest)'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 8);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 8);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 13);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 12);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 155);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has `... (rest)` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('... (rest)'), 0);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.volume), 12);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.effort), 6);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 3);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 1);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 1);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 2);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 2);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
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
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 1);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 5);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 3);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 154);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 12);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 12);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
               });

               test('class method has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].params, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 12);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 12);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
               });

               test('aggregate has `get` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('get'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.difficulty), 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 14);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 19);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
               });

               test('aggregate has `set` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('set'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 6);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 161);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 1);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
               });

               test('aggregate has `static` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('static'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 10);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 5);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 165);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
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
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 151);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 5);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 4);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 148);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 4);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 135);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 4);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 3);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 133);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 12);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 12);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 12);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 12);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
               });

               test('aggregate has `get` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('get'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.difficulty), 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 14);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 19);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 1);
               });

               test('aggregate has `set` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('set'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 5);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 13);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 11);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 161);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 1);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 1);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
               });

               test('aggregate has `static` Halstead operator identifier', () =>
               {
                  assert.isAtLeast(report.aggregate.halstead.operators.identifiers.indexOf('static'), 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 9);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 3);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.volume), 10);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.effort), 5);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.bugs), 0);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.classes[0].methods[0].halstead.time), 0);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 165);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 1);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 1);
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
                  assert.strictEqual(report.aggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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
                  assert.strictEqual(report.aggregate.halstead.difficulty, 1.5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 163);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 6);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 2);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 5);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 5);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 6);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 2);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 9);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 5);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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
                  assert.strictEqual(report.aggregate.halstead.operands.total, 4);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 10);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 6);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 2);
               });

               test('aggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.aggregate.cyclomatic, 1);
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

               test('aggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.total, 7);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 7);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 4);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 11);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 10);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 5);
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
                  assert.strictEqual(Math.round(report.methods[0].halstead.bugs), 0);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(Math.round(report.methods[0].halstead.time), 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('aggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.aggregate.params, 0);
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('aggregate has correct dependency entry[0] type', () =>
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 6);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 2);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 6);
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
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 8);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 3);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, './foo.js');
               });

               test('aggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });

               test('aggregate has correct dependency entry[1] line', () =>
               {
                  assert.strictEqual(report.dependencies[1].line, 2);
               });

               test('aggregate has correct dependency entry[1] path', () =>
               {
                  assert.strictEqual(report.dependencies[1].path, './bar.js');
               });

               test('aggregate has correct dependency entry[1] type', () =>
               {
                  assert.strictEqual(report.dependencies[1].type, 'esm');
               });

               test('aggregate has correct dependency entry[2] line', () =>
               {
                  assert.strictEqual(report.dependencies[2].line, 3);
               });

               test('aggregate has correct dependency entry[2] path', () =>
               {
                  assert.strictEqual(report.dependencies[2].path, './baz.js');
               });

               test('aggregate has correct dependency entry[2] type', () =>
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 2);
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
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('aggregate has correct dependency entry[0] type', () =>
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 4);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 4);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 3);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 3);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 7);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'module');
               });

               test('aggregate has correct dependency entry[0] type', () =>
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 5);
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

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 7);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 6);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.difficulty, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 1);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, 'mod.js');
               });

               test('aggregate has correct dependency entry[0] type', () =>
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

               test('aggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.aggregate.sloc.logical, 0);
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
                  assert.strictEqual(report.aggregate.halstead.operators.total, 14);
               });

               test('aggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operators.distinct, 5);
               });

               test('aggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.total, 10);
               });

               test('aggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.operands.distinct, 7);
               });

               test('aggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.length, 24);
               });

               test('aggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.aggregate.halstead.vocabulary, 12);
               });

               test('aggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(Math.round(report.aggregate.halstead.difficulty), 4);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(Math.round(report.maintainability), 171);
               });

               test('aggregate has correct dependency length', () =>
               {
                  assert.lengthOf(report.dependencies, 4);
               });

               test('aggregate has correct dependency entry[0] line', () =>
               {
                  assert.strictEqual(report.dependencies[0].line, 1);
               });

               test('aggregate has correct dependency entry[0] path', () =>
               {
                  assert.strictEqual(report.dependencies[0].path, './foo.js');
               });

               test('aggregate has correct dependency entry[0] type', () =>
               {
                  assert.strictEqual(report.dependencies[0].type, 'esm');
               });

               test('aggregate has correct dependency entry[1] line', () =>
               {
                  assert.strictEqual(report.dependencies[1].line, 2);
               });

               test('aggregate has correct dependency entry[1] path', () =>
               {
                  assert.strictEqual(report.dependencies[1].path, './bar.js');
               });

               test('aggregate has correct dependency entry[1] type', () =>
               {
                  assert.strictEqual(report.dependencies[1].type, 'esm');
               });

               test('aggregate has correct dependency entry[2] line', () =>
               {
                  assert.strictEqual(report.dependencies[2].line, 3);
               });

               test('aggregate has correct dependency entry[2] path', () =>
               {
                  assert.strictEqual(report.dependencies[2].path, './bar.js');
               });

               test('aggregate has correct dependency entry[2] type', () =>
               {
                  assert.strictEqual(report.dependencies[2].type, 'esm');
               });

               test('aggregate has correct dependency entry[3] line', () =>
               {
                  assert.strictEqual(report.dependencies[3].line, 4);
               });

               test('aggregate has correct dependency entry[3] path', () =>
               {
                  assert.strictEqual(report.dependencies[3].path, './bam.js');
               });

               test('aggregate has correct dependency entry[3] type', () =>
               {
                  assert.strictEqual(report.dependencies[3].type, 'esm');
               });
            });
         });
      });
   });
}
