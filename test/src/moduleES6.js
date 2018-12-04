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
                  report = parser.analyze('function* foo(param1) {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","param1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function*"]');
               });

               test('method has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '[]');
               });

               test('method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["param1"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 1);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 2);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
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
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["value","10","20","30"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["forof","let","[]",","]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 157.358);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                     '["foo","\\"bar\\"","bar","\\"foo\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                     '["let","=","const"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","Bar","constructor"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","extends","()","super"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operands.identifiers),
                   '["constructor"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operators.identifiers),
                   '["()","super"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].halstead.operands.identifiers),
                   '[]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].halstead.operators.identifiers),
                   '["()","super"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[1].methods, 1);
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.classes[1].methods[0].paramCount, 0);
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
                  assert.strictEqual(report.classes[1].methods[0].halstead.difficulty, 1);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.volume, 2);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.effort, 2);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.bugs, 0.001);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.time, 0.111);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.667);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 25.266);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 67.377);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.743);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 147.742);
                  assert.strictEqual(report.classes[0].maintainability, 171);
                  assert.strictEqual(report.classes[1].maintainability, 168.629);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","constructor","foobar","\\"foobar\\"","Bar","test"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this","extends","let","super"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","foobar","\\"foobar\\""]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operands.identifiers),
                   '["constructor","test","foobar"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                  '["=",".","this"]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operators.identifiers),
                   '["let","=",".","super"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                  '["foobar","\\"foobar\\""]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].halstead.operands.identifiers),
                  '["test","foobar"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].halstead.operators.identifiers),
                   '["let","=",".","super"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 6);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 3);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
                  assert.strictEqual(report.classes[1].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
                  assert.strictEqual(report.classes[1].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
                  assert.lengthOf(report.classes[1].methods, 1);
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
                  assert.strictEqual(report.classes[1].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.classes[1].methods[0].paramCount, 0);
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
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
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
                  assert.strictEqual(report.classes[1].methods[0].halstead.difficulty, 2);
               });

               test('class method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.volume, 15.51);
               });

               test('class method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.effort, 31.02);
               });

               test('class method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.bugs, 0.005);
               });

               test('class method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[1].methods[0].halstead.time, 1.723);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 9);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 13);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 5.25);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 70.308);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 369.119);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.023);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 20.507);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 143.312);
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
                  assert.strictEqual(report.classes[1].maintainability, 159.254);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["iter","2","3","4","spreadTest","1","5"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","[]",",","... (spread)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 68.114);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 194.612);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.023);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 10.812);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 141.744);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('CallExpression (spread):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const iter = [2, 3, 4]; const foo = function(b, a, r) {}; foo(...iter);');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["iter","2","3","4","foo","b","a","r"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","[]",",","function","()","... (spread)"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '[]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["b","a","r"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 3);
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 78.138);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 341.853);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.026);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 18.992);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 142.188);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 3);
               });
            });

            suite('ArrowFunctionExpression (explicit):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = (x, y) => { return x + y; };');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","x","y"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return","+"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["x","y"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return","+"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["x","y"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 4);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 4);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 1);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 8);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 8);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.003);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.444);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 4.167);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 30);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 125);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.01);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 6.944);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 150.289);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 2);
               });
            });

            suite('ArrowFunctionExpression (explicit with default values):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = (x = 1, y = 2) => { return x + y; };');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["s_FOO","x","1","y","2"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima default values don't use AssignmentPattern.
                  assert.lengthOf(identifiers, 5);
                  assert.isAtLeast(identifiers.indexOf("s_FOO"), 0);
                  assert.isAtLeast(identifiers.indexOf("x"), 0);
                  assert.isAtLeast(identifiers.indexOf("1"), 0);
                  assert.isAtLeast(identifiers.indexOf("y"), 0);
                  assert.isAtLeast(identifiers.indexOf("2"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return","+"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["x","y"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return","+"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["x","y"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 2);
               });

               test('method has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 4);
               });

               test('method has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 4);
               });

               test('method has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 1);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 8);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 8);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.003);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 0.444);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 5);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 7);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.5);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 46.507);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 162.774);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.016);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 9.043);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 149.386);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 2);
               });
            });

            suite('ArrowFunctionExpression (implicit):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('array.forEach((entry) => !entry);');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["array","forEach","entry"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["()",".","function=>","! (prefix)"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["entry"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["! (prefix)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["entry"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 1);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 4);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.667);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 22.459);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 59.89);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.007);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.327);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 152.806);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
               });
            });

            suite('ArrowFunctionExpression (implicit with default values):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('array.forEach((entry = true) => !entry);');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["array","forEach","entry","true"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["()",".","function=>","=","! (prefix)"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["entry"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["! (prefix)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["entry"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 1);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.125);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 31.699);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 99.06);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5.503);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 151.085);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
               });
            });

            // To be valid an ArrowFunctionExpression must be part of an assignment or call expression.
            // ESComplex will not parse the ArrowFunctionExpression for metrics when invalid, but will still
            // contain a method / nestedMethod entry.
            suite('Invalid ArrowFunctionExpression (explicit):', () =>
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '[]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 0);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 0);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            // To be valid an ArrowFunctionExpression must be part of an assignment or call expression.
            // ESComplex will not parse the ArrowFunctionExpression for metrics when invalid, but will still
            // contain a method / nestedMethod entry.
            suite('Invalid ArrowFunctionExpression (implicit):', () =>
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '[]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 0);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 0);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","index","0"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function*","let","=","yield","++ (postfix)"]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["index","0"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["let","=","yield","++ (postfix)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 27);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 90);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.009);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 151.413);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","1","2","3"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function*","yield*","[]",","]');
               });

               test('module method has Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["1","2","3"]');
               });

               test('module method has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["yield*","[]",","]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 27);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 54);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.009);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 159.728);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","bar"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","``"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 11.61);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 17.414);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.004);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.967);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 161.228);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('TemplateLiteral / TemplateElement (variable):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const baz = "bar"; const foo = `fuz${baz + "biz"}`;');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["baz","\\"bar\\"","foo","\\"biz\\"","fuz"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 5);
                  assert.isAtLeast(identifiers.indexOf("baz"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"bar\""), 0);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"biz\""), 0);
                  assert.isAtLeast(identifiers.indexOf("fuz"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","``","${}","+"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 7);
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
                  assert.strictEqual(report.methodAggregate.halstead.length, 13);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 43.185);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 129.555);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.014);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 7.198);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 143.136);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["baz","\\"bar\\"","foo","JSON","stringify","fuz"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 6);
                  assert.isAtLeast(identifiers.indexOf("baz"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"bar\""), 0);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("JSON"), 0);
                  assert.isAtLeast(identifiers.indexOf("stringify"), 0);
                  assert.isAtLeast(identifiers.indexOf("fuz"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","``","${}","()","."]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 8);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 6);
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
                  assert.strictEqual(report.methodAggregate.halstead.length, 15);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 12);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.5);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 53.774);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 188.211);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.018);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 10.456);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 135.29);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["foo","tagged","bar"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 3);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("tagged"), 0);
                  assert.isAtLeast(identifiers.indexOf("bar"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","``"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 15.51);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 23.265);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.005);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1.292);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 149.008);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });
         });

         suite('Template Literals (exclude template elements from lloc and halstead)', () =>
         {
            suite('TemplateLiteral / TemplateElement (basic):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const foo = `bar`;', { templateExpression: false });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","bar"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","="]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 8);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 8);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.003);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.444);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 163.888);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('TemplateLiteral / TemplateElement (variable):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const baz = "bar"; const foo = `fuz${baz + "biz"}`;',
                   { templateExpression: false });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["baz","\\"bar\\"","foo","\\"biz\\"","fuz"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 5);
                  assert.isAtLeast(identifiers.indexOf("baz"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"bar\""), 0);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"biz\""), 0);
                  assert.isAtLeast(identifiers.indexOf("fuz"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","+"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.8);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 33);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 59.4);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.3);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 145.803);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('TemplateLiteral / TemplateElement (function):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const baz = "bar"; const foo = `fuz${JSON.stringify(baz)}`;',
                   { templateExpression: false });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["baz","\\"bar\\"","foo","JSON","stringify","fuz"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 6);
                  assert.isAtLeast(identifiers.indexOf("baz"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"bar\""), 0);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("JSON"), 0);
                  assert.isAtLeast(identifiers.indexOf("stringify"), 0);
                  assert.isAtLeast(identifiers.indexOf("fuz"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","()","."]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 43.185);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 100.765);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.014);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5.598);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 137.427);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('TaggedTemplateExpression:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const foo = tagged`bar`;', { templateExpression: false });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["foo","tagged","bar"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima has child nodes out of order (quasis before expressions)
                  assert.lengthOf(identifiers, 3);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("tagged"), 0);
                  assert.isAtLeast(identifiers.indexOf("bar"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","="]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 11.61);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 11.61);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.004);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.645);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 162.615);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["bar","a","1","b","2","c","3"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","{}",":"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 8);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 79.567);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 318.268);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.027);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 17.682);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 117.604);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["a","b","c","1","2","3"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","{}",":"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 7);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 63.117);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 252.467);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.021);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 14.026);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 120.559);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["id","\\"z\\"","foo","z","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","{}",":"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 44.379);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 106.509);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.015);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5.917);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 132.577);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('ObjectPattern (computed object property names and anonymous destructuring assignment):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const id = "z"; const { [id + "biz"]: foo } = { z: "bar" };');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["id","\\"z\\"","\\"biz\\"","foo","z","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","{}",":","+"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 7);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 6);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 16);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 11);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.917);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 55.351);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 161.44);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.018);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 8.969);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 131.154);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["a","b","1","2"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["let","=","{}",":"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 7);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 48);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 240);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.016);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 13.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 120.732);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","1","2","a","b"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","[]",",","let"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 46.507);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 139.521);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.016);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 7.751);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 142.882);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["a","b","1","2"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["let","=","[]",","]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 30);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 60);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.01);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 156.997);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["a","b","restTest","1","2","3","4","5"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                   assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","[]",",","... (rest)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 70.308);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 175.771);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.023);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 9.765);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 153.321);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('FunctionDeclaration `defaults` (esprima) / AssignmentPattern (acorn, babylon, espree):', () =>
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["foo","first","bar","\\"baz\\"","items"]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima default values don't use AssignmentPattern.
                  assert.lengthOf(identifiers, 5);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("first"), 0);
                  assert.isAtLeast(identifiers.indexOf("bar"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"baz\""), 0);
                  assert.isAtLeast(identifiers.indexOf("items"), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                  //  '["function","=","... (rest)"]');

                  const identifiers = report.methodAggregate.halstead.operators.identifiers;

                  // Must test individually as esprima default values don't use AssignmentPattern.
                  assert.lengthOf(identifiers, 3);
                  assert.isAtLeast(identifiers.indexOf("function"), 0);
                  assert.isAtLeast(identifiers.indexOf("="), 0);
                  assert.isAtLeast(identifiers.indexOf("... (rest)"), 0);
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '["first","bar","items"]');
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
                  assert.strictEqual(report.methods[0].paramCount, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 8);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('methodAggregate has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 24);
               });

               test('methodAggregate has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 36);
               });

               test('methodAggregate has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('methodAggregate has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 2);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 3);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 2);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 1);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.001);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.056);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });
            });

            suite('class declaration with super class (member expression):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo extends Bar.Baz {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","Bar","Baz"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","extends","."]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 15.51);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 23.265);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.005);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1.292);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 160.237);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.strictEqual(report.classes[0].superClassName, '<computed~Bar.Baz>');
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Bar","Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","extends"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 12);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 18);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.004);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 149.886);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Bar');
                  assert.strictEqual(report.classes[1].name, 'Foo');

                  assert.isUndefined(report.classes[0].superClassName);
                  assert.strictEqual(report.classes[1].superClassName, 'Bar');
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
                  assert.lengthOf(report.classes[1].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
                  assert.strictEqual(report.classes[1].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.paramCount, 0);
               });
            });

            suite('class declaration w/ constructor:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { constructor(ctorParam) { this.bar = 1; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","constructor","ctorParam","bar","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","ctorParam","bar","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["bar","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 28.529);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 57.059);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.01);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.17);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 152.971);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 3);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 4);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 7);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 7);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 19.651);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 29.477);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.007);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 1.638);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 1);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '["ctorParam"]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 1);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 24);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 48);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 2.667);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 153.563);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 3);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 6);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 15.51);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 23.265);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 1.292);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","baz","\\"x\\"","bar","biz","\\"y\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","function*","+","yield","yield*","()","[]","."]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","baz","\\"x\\"","bar","biz","\\"y\\""]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["function*","+","yield","yield*","()","[]","."]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["\\"x\\"","bar","biz","\\"y\\""]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["yield","yield*","()","[]","."]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 5);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 62.51);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 250.041);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.021);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 13.891);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 139.643);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 4);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 8);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 7);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 6);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 6);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 14);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 13);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 3.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 51.806);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 181.322);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.017);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 10.073);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 138.248);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + baz>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 3);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 6);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 5);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 4);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 4);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 10);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 9);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 2.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 31.699);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 79.248);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.011);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 4.403);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 24);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 48);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 2.667);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 153.563);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 3);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 6);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 15.51);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 23.265);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 1.292);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
               });
            });

            suite('class declaration w/ computed (variable) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [bar]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~bar>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 variable concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + bar>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (3 variable concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar+biz]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo + bar + biz>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","biz","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","biz","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 variable + literal concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar+'biz']() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + 'biz'>`);

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   `["Foo","foo","bar","'biz'","baz","1"]`);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   `["foo","bar","'biz'","baz","1"]`);
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 variable + numerical concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar+2]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + 2>`);

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","2","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","2","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 variable + numerical concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar+true]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + true>`);

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","true","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","true","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 variable + null concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo+bar+null]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, `<computed~foo + bar + null>`);

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","null","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","null","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (Symbol / 2 member expression) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [Symbol.iterator]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~Symbol.iterator>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","Symbol","iterator","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class",".","=","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["Symbol","iterator","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[".","=","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (3 member expression) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo.bar.biz]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar.biz>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","biz","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class",".","=","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","biz","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[".","=","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 member expression + concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo.bar+biz]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar + biz>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","biz","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+",".","=","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","biz","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+",".","=","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (2 member expression + concatenation with method called) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(`class Foo { [foo.bar+biz.toLowerCase()]() { this.baz = 1; } }`);
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~foo.bar + biz.toLowerCase()>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","biz","toLowerCase","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+",".","=","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","biz","toLowerCase","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+",".","=","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (template literal) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { [`${foo}`]() { this.baz = 1; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~`${foo}`>');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });
            });

            suite('class declaration w/ computed (template literal + concatenation) method:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('class Foo { [`${foo}`+bar]() { this.baz = 1; } }');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, '<computed~`${foo}` + bar>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","+","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["+","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","get","return"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","\\"bar\\""]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["get","return"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 15.51);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 23.265);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.005);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1.292);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 156.04);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 2);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 2);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 4);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 4);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 8);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 8);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.003);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.444);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 1);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 1);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 1);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","data","_bar"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","set","=",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","data","_bar"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["set","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["_bar","data"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.125);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 31.699);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 99.06);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5.503);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 151.085);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 4);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 8);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 7);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 2.667);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 22.459);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 59.89);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.007);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 3.327);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 1);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '["data"]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 1);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","static","return"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","\\"bar\\""]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["static","return"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 15.51);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 23.265);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.005);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1.292);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 156.04);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 2);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 2);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 4);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 4);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 8);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 8);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.003);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.444);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 1);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 1);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 1);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","constructor","new","target","name"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class","."]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","new","target","name"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["."]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["new","target","name"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["."]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.length, 8);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 7);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 22.459);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 22.459);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.007);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 1.248);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 156.16);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 1);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 4);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 5);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 13.932);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 6.966);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.387);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 165.496);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 2);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 3);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 3);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 4);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 10);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 5);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.003);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.278);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
               });
            });

            suite('all together - module method, class declaration, class method, nested methods:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(
                     `function methodFoo(value1) {`
                   + `  this.bar = [value1];`
                   + `  this.bar.forEach((entry1) => { return !entry1; });`
                   + `};`

                   + `class Foo {`
                   + `  constructor(value2 = "biz") {`
                   + `    this.bar = [value2];`
                   + `    this.bar.forEach((entry2) => !entry2);`
                   + `  }`
                   + `}`
                   + ``
                  );
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["methodFoo","value1","bar","forEach","entry1","Foo","constructor","value2","\\"biz\\"","entry2"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function","=",".","this","[]","()","function=>","return","! (prefix)","class"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["bar","value1","forEach","entry1"]');
                  assert.strictEqual(JSON.stringify(report.methods[1].halstead.operands.identifiers),
                   '["entry1"]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["=",".","this","[]","()","function=>"]');
                  assert.strictEqual(JSON.stringify(report.methods[1].halstead.operators.identifiers),
                   '["return","! (prefix)"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","value2","\\"biz\\"","bar","forEach","entry2"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this","[]","()","function=>","! (prefix)"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["bar","value2","forEach","entry2"]');
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[1].halstead.operands.identifiers),
                   '["entry2"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this","[]","()","function=>"]');
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[1].halstead.operators.identifiers),
                   '["! (prefix)"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 11);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 5);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 2);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 24);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 10);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 18);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 10);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 42);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 20);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 9);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 181.521);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 1633.689);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.061);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 90.76);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 138.428);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 4);
               });

               // module methods ---

               test('module methods name is correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'methodFoo');
                  assert.strictEqual(report.methods[1].name, '<anon method-1>');
               });

               test('module methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methods[0].sloc.logical, 3);
                  assert.strictEqual(report.methods[1].sloc.logical, 1);
               });

               test('module methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methods[0].cyclomatic, 1);
                  assert.strictEqual(report.methods[1].cyclomatic, 1);
               });

               test('module methods has correct length', () =>
               {
                  assert.lengthOf(report.methods[0].nestedMethods, 0);
                  assert.lengthOf(report.methods[1].nestedMethods, 0);
               });

               test('module methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.operators.total, 9);
                  assert.strictEqual(report.methods[1].halstead.operators.total, 2);
               });

               test('module methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.operators.distinct, 6);
                  assert.strictEqual(report.methods[1].halstead.operators.distinct, 2);
               });

               test('module methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.operands.total, 5);
                  assert.strictEqual(report.methods[1].halstead.operands.total, 1);
               });

               test('module methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.operands.distinct, 4);
                  assert.strictEqual(report.methods[1].halstead.operands.distinct, 1);
               });

               test('module methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.length, 14);
                  assert.strictEqual(report.methods[1].halstead.length, 3);
               });

               test('module methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.vocabulary, 10);
                  assert.strictEqual(report.methods[1].halstead.vocabulary, 3);
               });

               test('module methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.difficulty, 3.75);
                  assert.strictEqual(report.methods[1].halstead.difficulty, 1);
               });

               test('module methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.volume, 46.507);
                  assert.strictEqual(report.methods[1].halstead.volume, 4.755);
               });

               test('module methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.effort, 174.401);
                  assert.strictEqual(report.methods[1].halstead.effort, 4.755);
               });

               test('module methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.bugs, 0.016);
                  assert.strictEqual(report.methods[1].halstead.bugs, 0.002);
               });

               test('module methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methods[0].halstead.time, 9.689);
                  assert.strictEqual(report.methods[1].halstead.time, 0.264);
               });

               test('module methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.methods[0].paramCount, 1);
                  assert.strictEqual(report.methods[1].paramCount, 1);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 5);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 2);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 2);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 11);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 7);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 9);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 6);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 20);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 13);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 5.25);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 74.009);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 388.546);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.025);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 21.586);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 144.47);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 2);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');
                  assert.strictEqual(report.classes[0].methods[1].name, '<anon method-2>');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '["value2"]');
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[1].paramNames), '["entry2"]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 3);
                  assert.strictEqual(report.classes[0].methods[1].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
                  assert.strictEqual(report.classes[0].methods[1].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
                  assert.lengthOf(report.classes[0].methods[1].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 9);
                  assert.strictEqual(report.classes[0].methods[1].halstead.operators.total, 1);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 6);
                  assert.strictEqual(report.classes[0].methods[1].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 5);
                  assert.strictEqual(report.classes[0].methods[1].halstead.operands.total, 1);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 4);
                  assert.strictEqual(report.classes[0].methods[1].halstead.operands.distinct, 1);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 14);
                  assert.strictEqual(report.classes[0].methods[1].halstead.length, 2);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 10);
                  assert.strictEqual(report.classes[0].methods[1].halstead.vocabulary, 2);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 3.75);
                  assert.strictEqual(report.classes[0].methods[1].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 46.507);
                  assert.strictEqual(report.classes[0].methods[1].halstead.volume, 2);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 174.401);
                  assert.strictEqual(report.classes[0].methods[1].halstead.effort, 1);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.016);
                  assert.strictEqual(report.classes[0].methods[1].halstead.bugs, 0.001);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 9.689);
                  assert.strictEqual(report.classes[0].methods[1].halstead.time, 0.056);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 1);
                  assert.strictEqual(report.classes[0].methods[1].paramCount, 1);
               });
            });


            suite('class expression (anonymous):', () =>
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 8);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 12);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.003);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.667);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 151.273);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });
            });

            suite('class expression (named):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const FooClass = class Foo {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["FooClass","Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 2);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 1.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 11.61);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 17.414);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.004);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 0.967);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 149.999);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });
            });

            suite('class expression with super class (member expression):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const FooClass = class Foo extends Bar.Baz {}');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["FooClass","Foo","Bar","Baz"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","extends","."]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 28.529);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 71.323);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.01);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.962);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 145.177);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Foo');
                  assert.strictEqual(report.classes[0].superClassName, '<computed~Bar.Baz>');
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });
            });


            suite('class expression w/ superclass:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const BarClass = class {}; const FooClass = class extends BarClass {};');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["BarClass","FooClass"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","extends"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 6);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 25.85);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 77.549);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.009);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 4.308);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 133.662);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.strictEqual(report.classes[1].name, '<anon class-2>');
                  assert.isUndefined(report.classes[0].superClassName);
                  assert.strictEqual(report.classes[1].superClassName, 'BarClass');
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
                  assert.lengthOf(report.classes[1].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
                  assert.strictEqual(report.classes[1].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.paramCount, 0);
               });
            });

            suite('class expression (named) w/ superclass:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze(
                   'const BarClass = class Bar {}; const FooClass = class Foo extends BarClass {};');
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["BarClass","Bar","FooClass","Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","extends"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
                  assert.strictEqual(JSON.stringify(report.classes[1].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 36);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 90);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.012);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 5);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 133.153);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, 'Bar');
                  assert.strictEqual(report.classes[1].name, 'Foo');
                  assert.isUndefined(report.classes[0].superClassName);
                  assert.strictEqual(report.classes[1].superClassName, 'BarClass');
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.sloc.logical, 0);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.cyclomatic, 0);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 0);
                  assert.lengthOf(report.classes[1].methods, 0);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operators.distinct, 0);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.total, 0);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.operands.distinct, 0);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.length, 0);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.vocabulary, 0);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.difficulty, 0);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.volume, 0);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.effort, 0);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.bugs, 0);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.halstead.time, 0);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
                  assert.strictEqual(report.classes[1].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
                  assert.strictEqual(report.classes[1].methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","constructor","bar","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","bar","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["bar","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 31.699);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 79.248);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 4.403);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 147.187);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 3);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 6);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 15.51);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 23.265);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 1.292);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","baz","1"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","baz","1"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["baz","1"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 31.699);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 79.248);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 4.403);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 147.187);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 3);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 3);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 6);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 15.51);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 23.265);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 1.292);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","get","return"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","\\"bar\\""]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["get","return"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 8);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 24);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 60);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 148.139);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 2);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 2);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 4);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 4);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 8);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 8);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.003);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.444);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 1);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 1);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 1);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","data","_bar"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","set",".","this"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","data","_bar"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["set","=",".","this"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["_bar","data"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["=",".","this"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 4);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 12);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 10);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3.75);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 39.863);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 149.487);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.013);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 8.305);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 145.017);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 1);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 4);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 3);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 8);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 7);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 2.667);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 22.459);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 59.89);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.007);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 3.327);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 161.228);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 1);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '["data"]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 3);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 3);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 2);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 2);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 5);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 1.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 11.61);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 17.414);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.004);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.967);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 1);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","bar","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","static","return"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["bar","\\"bar\\""]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["static","return"]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 3);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 3);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 8);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 8);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2.5);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 24);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 60);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.008);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.333);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 148.139);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 2);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 2);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 4);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 4);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 1);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 8);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 8);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.003);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.444);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 171);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'bar');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 1);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 1);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 1);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 2);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 2);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 2);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 1);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.001);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.056);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo","constructor","new","target","name"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","class","."]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '["constructor","new","target","name"]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '["."]');
               });

               test('class methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operands.identifiers),
                   '["new","target","name"]');
               });

               test('class methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].halstead.operators.identifiers),
                   '["."]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 5);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 5);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 10);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 9);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 2);
               });

               test('method has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.volume, 31.699);
               });

               test('method has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.effort, 63.399);
               });

               test('method has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.bugs, 0.011);
               });

               test('method has correct Halstead time', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.time, 3.522);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 147.95);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });

               // classes ---

               test('class names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].name, '<anon class-1>');
                  assert.isUndefined(report.classes[0].superClassName);
               });

               test('class methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.sloc.logical, 2);
               });

               test('class methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods, 1);
               });

               test('class methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.total, 2);
               });

               test('class methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operators.distinct, 1);
               });

               test('class methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.total, 4);
               });

               test('class methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.operands.distinct, 4);
               });

               test('class methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.length, 6);
               });

               test('class methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.vocabulary, 5);
               });

               test('class methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.difficulty, 0.5);
               });

               test('class has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.volume, 13.932);
               });

               test('class has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.effort, 6.966);
               });

               test('class has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.bugs, 0.005);
               });

               test('class has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.halstead.time, 0.387);
               });

               test('class maintainability index is correct', () =>
               {
                  assert.strictEqual(report.classes[0].maintainability, 165.496);
               });

               test('class methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methodAggregate.paramCount, 0);
               });

               // class methods ---

               test('class method names are correct', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].name, 'constructor');

                  assert.strictEqual(JSON.stringify(report.classes[0].methods[0].paramNames), '[]');
               });

               test('class methods has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].sloc.logical, 1);
               });

               test('class methods has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].cyclomatic, 1);
               });

               test('class methods has correct length', () =>
               {
                  assert.lengthOf(report.classes[0].methods[0].nestedMethods, 0);
               });

               test('class methods has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.total, 2);
               });

               test('class methods has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operators.distinct, 1);
               });

               test('class methods has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.total, 3);
               });

               test('class methods has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.operands.distinct, 3);
               });

               test('class methods has correct Halstead length', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.length, 5);
               });

               test('class methods has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.vocabulary, 4);
               });

               test('class methods has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.difficulty, 0.5);
               });

               test('class methods has correct Halstead volume', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.volume, 10);
               });

               test('class methods has correct Halstead effort', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.effort, 5);
               });

               test('class methods has correct Halstead bugs', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.bugs, 0.003);
               });

               test('class methods has correct Halstead time', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].halstead.time, 0.278);
               });

               test('class methods has correct parameter count', () =>
               {
                  assert.strictEqual(report.classes[0].methods[0].paramCount, 0);
               });
            });
         });

         suite('Modules / settings.esmImportExport = true (include as module Halstead data)', () =>
         {
            suite('export all from import:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export * from "module";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["\\"module\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["export","*"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 165.668);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export default class declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export default class Foo {}', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["export","default","class"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export default function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export default function foo () { return "bar"; }',
                   { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["export","default","function","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 155.056);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export named from import:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export { foo, bar } from "module";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","bar","\\"module\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["export","{}"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export named function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('export function foo () { return "bar"; }', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["export","{}","function","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 155.056);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export default arrow function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export default s_FOO;',
                   { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return","export","default"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 145.726);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export named arrow function declaration:', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export { s_FOO };',
                   { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return","export","{}"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 145.726);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('export named arrow function declaration (aliased):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('const s_FOO = () => { return "bar"; }; export { s_FOO as s_BAR };',
                   { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\"","s_BAR"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return","export","{}","as"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 144.567);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
               });
            });

            suite('import default (1):', () =>
            {
               let report;

               setup(() =>
               {
                  report = parser.analyze('import foo from "module";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"module\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                   'import foo from "./foo.js";\nimport bar from "./bar.js";\nimport baz from "./baz.js";',
                    { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"./foo.js\\"","bar","\\"./bar.js\\"","baz","\\"./baz.js\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 140.947);
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
                  report = parser.analyze('import {baz} from "module";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["baz","\\"module\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from","{}"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 159.218);
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
                  report = parser.analyze('import {foo as bar} from "module";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  // Fails for esprima; see below.
                  // assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                  //  '["foo","bar","\\"module\\""]');

                  const identifiers = report.methodAggregate.halstead.operands.identifiers;

                  // Must test individually as esprima `local` node comes before `imported`.
                  assert.lengthOf(identifiers, 3);
                  assert.isAtLeast(identifiers.indexOf("foo"), 0);
                  assert.isAtLeast(identifiers.indexOf("bar"), 0);
                  assert.isAtLeast(identifiers.indexOf("\"module\""), 0);
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from","{}","as"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 158.444);
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
                  report = parser.analyze('import * as foo from "mod.js";', { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"mod.js\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from","*","as"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 158.726);
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
                   + 'import {bar as baz} from "./bar.js";\nimport * as bam from "./bam.js";',
                     { esmImportExport: true });
               });

               teardown(() =>
               {
                  report = undefined;
               });

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"./foo.js\\"","bar","\\"./bar.js\\"","baz","bam","\\"./bam.js\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["import","from","{}","as","*"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 4);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.maintainability, 128.953);
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

         suite('Modules / settings.esmImportExport = false (default, exclude as Halstead data)', () =>
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["Foo"]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["class"]');
               });

               test('class methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('class methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.classes[0].methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 1);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
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
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 166.259);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
               });

               test('maintainability index is correct', () =>
               {
                  assert.strictEqual(report.maintainability, 171);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["foo","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["function","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 2);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, 'foo');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 166.259);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 3);
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
                  assert.strictEqual(report.maintainability, 153.142);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 155.056);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '["s_FOO","\\"bar\\""]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '["const","=","function=>","return"]');
               });

               test('module methods has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operands.identifiers),
                   '["\\"bar\\""]');
               });

               test('module methods has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methods[0].halstead.operators.identifiers),
                   '["return"]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 3);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 2);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 1);
               });

               test('method names are correct', () =>
               {
                  assert.strictEqual(report.methods[0].name, '<anon method-1>');
                  assert.strictEqual(JSON.stringify(report.methods[0].paramNames), '[]');
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
                  assert.strictEqual(report.maintainability, 155.056);
               });

               test('methodAggregate has correct parameter count', () =>
               {
                  assert.strictEqual(report.methodAggregate.paramCount, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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

               test('methodAggregate has correct Halstead operand identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operands.identifiers),
                   '[]');
               });

               test('methodAggregate has correct Halstead operator identifiers', () =>
               {
                  assert.strictEqual(JSON.stringify(report.methodAggregate.halstead.operators.identifiers),
                   '[]');
               });

               test('methodAggregate has correct logical lines of code', () =>
               {
                  assert.strictEqual(report.methodAggregate.sloc.logical, 0);
               });

               test('methodAggregate has correct cyclomatic complexity', () =>
               {
                  assert.strictEqual(report.methodAggregate.cyclomatic, 1);
               });

               test('methods has correct length', () =>
               {
                  assert.lengthOf(report.methods, 0);
               });

               test('methodAggregate has correct Halstead total operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operators', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operators.distinct, 0);
               });

               test('methodAggregate has correct Halstead total operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.total, 0);
               });

               test('methodAggregate has correct Halstead distinct operands', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.operands.distinct, 0);
               });

               test('methodAggregate has correct Halstead length', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.length, 0);
               });

               test('methodAggregate has correct Halstead vocabulary', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.vocabulary, 0);
               });

               test('methodAggregate has correct Halstead difficulty', () =>
               {
                  assert.strictEqual(report.methodAggregate.halstead.difficulty, 0);
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
