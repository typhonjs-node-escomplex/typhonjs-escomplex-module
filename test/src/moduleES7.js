// import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleES7'])
{
   parsers.forEach((parser) =>
   {
      suite(`(${parser.name}): module (ES7):`, () =>
      {
         // https://github.com/tc39/Array.prototype.includes
         suite('Array.prototype.includes', () =>
         {
            setup(() =>
            {
               parser.analyze('const array = []; array.includes(123);');
            });

            test('parses!', () => {});
         });

         // https://github.com/rwaldron/exponentiation-operator
         suite('Exponentiation operator', () =>
         {
            setup(() =>
            {
               parser.analyze('let squared = 2 ** 2; let a = 2; a **= 2;');
            });

            test('parses!', () => {});
         });
      });
   });
}
