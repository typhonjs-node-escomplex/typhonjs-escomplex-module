import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

/**
 * Pending further testing:
 * - Lifting template literal restriction
 */
if (testconfig.modules['moduleES9'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babylon' && parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (ES9):`, () =>
      {
         // https://github.com/tc39/proposal-async-iteration
         // Only including for-await-of for parsing
         suite('Asynchronous Iteration', () =>
         {
            setup(() =>
            {
               parser.analyze('async function f() { for await (const x of createAsyncIterable(["a", "b"])) {} }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-promise-finally
         suite('Promise.prototype.finally', () =>
         {
            setup(() =>
            {
               parser.analyze('Promise.resolve(2).finally(() => {})');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-unicode-property-escapes
         suite('RegExp Unicode Property Escapes', () =>
         {
            setup(() =>
            {
               parser.analyze('const regexGreekSymbol = /\p{Script=Greek}/u; regexGreekSymbol.test("π");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-lookbehind
         suite('RegExp Lookbehind Assertions', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'const RE_DOLLAR_PREFIX = /(?<=\$)foo/g; "$foo %foo foo".replace(RE_DOLLAR_PREFIX, "bar");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-lookbehind
         suite('RegExp Lookbehind Assertions', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'const RE_DOLLAR_PREFIX = /(?<=\$)foo/g; "$foo %foo foo".replace(RE_DOLLAR_PREFIX, "bar");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-named-groups
         suite('RegExp named capture groups', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u; let result = re.exec("2015-01-02");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-named-groups
         suite('RegExp named capture groups', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u; let result = re.exec("2015-01-02");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-dotall-flag
         suite('s (dotAll) flag for regular expressions', () =>
         {
            setup(() =>
            {
               parser.analyze('const re = /foo.bar/s;');
            });

            test('parses!', () => {});
         });

         // TODO verify parsing soon. Appears to fail.
         // https://github.com/tc39/proposal-template-literal-revision
         // suite('Lifting template literal restriction', () =>
         // {
         //    setup(() =>
         //    {
         //       parser.analyze('tagFunc`\unicode`;');
         //    });
         //
         //    test('parses!', () => {});
         // });

         suite('Rest/Spread - object pattern function', () =>
         {
            setup(() =>
            {
               parser.analyze('function foo({ name, ...others }) { }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-object-rest-spread
         suite('Rest/Spread Properties', () =>
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

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 7);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 1);
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
               assert.strictEqual(report.aggregate.halstead.operands.total, 13);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 9);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 22);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 14);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 3.611);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 119.941);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 0);
            });
         });

         // https://github.com/tc39/proposal-object-rest-spread
         suite('Rest/Spread Properties (abbreviated React example):', () =>
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

            test('aggregate has correct logical lines of code', () =>
            {
               assert.strictEqual(report.aggregate.sloc.logical, 7);
            });

            test('aggregate has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.aggregate.cyclomatic, 4);
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
               assert.strictEqual(report.methods[0].sloc.logical, 6);
            });

            test('method has correct cyclomatic complexity', () =>
            {
               assert.strictEqual(report.methods[0].cyclomatic, 3);
            });

            test('method has correct parameter count', () =>
            {
               assert.strictEqual(report.methods[0].paramCount, 3);
            });

            test('aggregate has correct Halstead total operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.total, 22);
            });

            test('aggregate has correct Halstead distinct operators', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operators.distinct, 14);
            });

            test('aggregate has correct Halstead total operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.total, 25);
            });

            test('aggregate has correct Halstead distinct operands', () =>
            {
               assert.strictEqual(report.aggregate.halstead.operands.distinct, 13);
            });

            test('aggregate has correct Halstead length', () =>
            {
               assert.strictEqual(report.aggregate.halstead.length, 47);
            });

            test('aggregate has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.aggregate.halstead.vocabulary, 27);
            });

            test('aggregate has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.aggregate.halstead.difficulty, 13.462);
            });

            test('method has correct Halstead length', () =>
            {
               assert.strictEqual(report.methods[0].halstead.length, 42);
            });

            test('method has correct Halstead vocabulary', () =>
            {
               assert.strictEqual(report.methods[0].halstead.vocabulary, 25);
            });

            test('method has correct Halstead difficulty', () =>
            {
               assert.strictEqual(report.methods[0].halstead.difficulty, 11.375);
            });

            test('method has correct Halstead volume', () =>
            {
               assert.strictEqual(report.methods[0].halstead.volume, 195.042);
            });

            test('method has correct Halstead effort', () =>
            {
               assert.strictEqual(report.methods[0].halstead.effort, 2218.602);
            });

            test('method has correct Halstead bugs', () =>
            {
               assert.strictEqual(report.methods[0].halstead.bugs, 0.065);
            });

            test('method has correct Halstead time', () =>
            {
               assert.strictEqual(report.methods[0].halstead.time, 123.256);
            });

            test('maintainability index is correct', () =>
            {
               assert.strictEqual(report.maintainability, 124.991);
            });

            test('aggregate has correct parameter count', () =>
            {
               assert.strictEqual(report.aggregate.paramCount, 3);
            });
         });
      });
   });
}
