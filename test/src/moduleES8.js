// import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleES8'])
{
   parsers.forEach((parser) =>
   {
      suite(`(${parser.name}): module (ES8):`, () =>
      {
         // https://github.com/tc39/ecmascript-asyncawait
         suite('Async functions', () =>
         {
            setup(() =>
            {
               parser.analyze('async function foo() { await bar(); }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-trailing-function-commas
         suite('Trailing commas in function parameter lists and calls', () =>
         {
            setup(() =>
            {
               parser.analyze('function foo(a, b, c,) {} foo(1, 2, 3,);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-object-getownpropertydescriptors
         suite('Object.getOwnPropertyDescriptors', () =>
         {
            setup(() =>
            {
               parser.analyze('Object.getOwnPropertyDescriptors(object);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-string-pad-start-end
         suite('String padding', () =>
         {
            setup(() =>
            {
               parser.analyze('"foo".padEnd(4, "12"); "bar".padStart(4, "12");');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-object-values-entries
         suite('Object.values/Object.entries', () =>
         {
            setup(() =>
            {
               parser.analyze('Object.values(object); Object.entries(object);');
            });

            test('parses!', () => {});
         });
      });
   });
}
