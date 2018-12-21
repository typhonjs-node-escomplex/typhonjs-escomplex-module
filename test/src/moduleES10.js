// import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleES10'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (ES10):`, () =>
      {
         // https://github.com/tc39/proposal-Symbol-description
         suite('Symbol.prototype.description', () =>
         {
            setup(() =>
            {
               parser.analyze('Symbol("desc").description');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-optional-catch-binding
         suite('Optional catch binding', () =>
         {
            setup(() =>
            {
               parser.analyze('try {} catch {}');
            });

            test('parses!', () => {});
         });
      });
   });
}
