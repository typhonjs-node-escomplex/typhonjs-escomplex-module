// import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleStage3'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (stage 3):`, () =>
      {
         // https://github.com/tc39/proposal-flatMap/blob/master/proposal.html
         suite('Array.prototype.{flat,flatMap}', () =>
         {
            setup(() =>
            {
               parser.analyze('let a = []; a.flat(1); a.flatMap(x => [x * 2]);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-object-from-entries
         suite('Object.fromEntries', () =>
         {
            setup(() =>
            {
               parser.analyze('let obj = Object.fromEntries([["a", 0], ["b", 1]]);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-dynamic-import
         suite('dynamic import()', () =>
         {
            setup(() =>
            {
               parser.analyze('import(`./language-packs/${navigator.language}.js`);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-bigint
         suite('BigInt', () =>
         {
            setup(() =>
            {
               parser.analyze('const previousMaxSafe = BigInt(Number.MAX_SAFE_INTEGER);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-import-meta
         suite('import.meta', () =>
         {
            setup(() =>
            {
               parser.analyze('const size = import.meta.scriptElement.dataset.size || 300;');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-private-methods
         suite('Private instance methods!!! / NO accessors', () =>
         {
            setup(() =>
            {
               parser.analyze(
                  'class Person {'
                  + '   #age = 19;'
                  + '   #increaseAge() {'
                  + '      this.#age++;'
                  + '   }'
                  + '   birthday() {'
                  + '      this.#increaseAge();'
                  + '      alert("Happy Birthday!");'
                  + '   }'
                  + '}');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-private-methods
         // As of Babel 7.2 private instance accessors is not implemented.
         // suite('Private instance accessors', () =>
         // {
         //    setup(() =>
         //    {
         //       parser.analyze(
         //          'class Person {'
         //          + '   #age = 19;'
         //          + '   get #age() { return #age; }'
         //          + '}');
         //    });
         //
         //    test('parses!', () => {});
         // });

         // https://github.com/tc39/proposal-class-fields
         suite('Class Public Instance Fields & Private Instance Fields', () =>
         {
            setup(() =>
            {
               parser.analyze('class Counter { #x = 0; clicked() { this.#x++; } }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-static-class-features/
         suite('Static class fields and private static methods', () =>
         {
            setup(() =>
            {
               parser.analyze('class Test { static #x = 1; static #click() { } }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-string-left-right-trim
         suite('String.prototype.{trimStart,trimEnd}', () =>
         {
            setup(() =>
            {
               parser.analyze('" foo".trimStart(); "bar ".trimEnd();');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-string-matchall
         suite('String.prototype.matchAll', () =>
         {
            setup(() =>
            {
               parser.analyze('"-a-a-a".matchAll(/-(a)/ug);');
            });

            test('parses!', () => {});
         });
      });
   });
}
