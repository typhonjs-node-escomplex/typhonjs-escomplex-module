// import { assert }       from 'chai';

import parsers          from './parsers';
import * as testconfig  from './testconfig';

if (testconfig.modules['moduleStage2'])
{
   parsers.forEach((parser) =>
   {
      if (parser.name !== 'babelParser') { return; }

      suite(`(${parser.name}): module (stage 3):`, () =>
      {
         // https://github.com/tc39/proposal-throw-expressions
         suite('throw expressions', () =>
         {
            setup(() =>
            {
               // Parameter initializers
               parser.analyze('function save(filename = throw new TypeError("Argument required")) {}');

               // Arrow function bodies
               parser.analyze(`lint(ast, { with: () => throw new Error("avoid using 'with' statements.") });`);

               // Conditional expressions
               parser.analyze(
                  'function test(val) {'
                  + '   const enc = val === "utf8" ? new UTF8Encoder()'
                  + '      : val === "utf16le" ? new UTF16Encoder(false)'
                  + '         : val === "utf16be" ? new UTF16Encoder(true)'
                  + '            : throw new Error("Unsupported encoding");'
                  + '}'
               );

               // Logical operations
               parser.analyze(
                  'class Product {'
                  + '   get id() { return this._id; }'
                  + '   set id(value) { this._id = value || throw new Error("Invalid value"); }'
                  + '}'
               );
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-numeric-separator
         suite('Numeric separators', () =>
         {
            setup(() =>
            {
               parser.analyze('const val = 1_000_000_000;');
            });

            test('parses!', () => {});
         });

         // https://github.com/allenwb/ESideas/blob/master/Generator%20metaproperty.md
         suite('function.sent metaproperty', () =>
         {
            setup(() =>
            {
               parser.analyze('function *adder() { let val = function.sent; }');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-decorators
         suite('Decorators', () =>
         {
            setup(() =>
            {
               parser.analyze(
                  '@defineElement("num-counter")'
                  + 'class Counter {'
                  + '   @observed #x = 0;'
                  + '   @bound #clicked() { this.#x++; }'
                  + '}'
               );
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-atomics-wait-async
         suite('Atomics.waitAsync', () =>
         {
            setup(() =>
            {
               parser.analyze(
                  'Atomics.waitAsync(ia, 37, 0x1337).then(function (r) { log("Resolved 1: " + r); });');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-top-level-await
         // suite('Top-level await', () =>
         // {
         //    setup(() =>
         //    {
         //       parser.analyze('const strings = await import(`/i18n/${navigator.language}`);');
         //    });
         //
         //    test('parses!', () => {});
         // });

         // https://github.com/tc39/proposal-set-methods
         suite('New Set methods', () =>
         {
            setup(() =>
            {
               parser.analyze('const set = new Set([1, 2]); set.intersection(set2); set.union(set2); '
                + 'set.difference(set2); set.symmetricDifference(set2); set.isSubsetOf(set2); set.isDisjoinWith(set2); '
                + 'set.isSupersetOf(set2);');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-realms
         suite('Realms', () =>
         {
            setup(() =>
            {
               parser.analyze('let r = new Realm(); let f = r.evaluate("(function() { return 17 })");');
            });

            test('parses!', () => {});
         });

         // https://github.com/domenic/proposal-arraybuffer-transfer/
         suite('ArrayBuffer.prototype.transfer', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'const buffer = new ArrayBuffer(1024); const transferred = buffer.transfer(); buffer.realloc(256)');
            });

            test('parses!', () => {});
         });

         // https://github.com/tc39/proposal-regexp-unicode-sequence-properties
         suite('Sequence properties in Unicode property escapes', () =>
         {
            setup(() =>
            {
               parser.analyze(
                'const regexEmojiKeycap = /\p{Emoji_Keycap_Sequence}/u; regexEmojiKeycap.test("4️⃣");');
            });

            test('parses!', () => {});
         });
      });
   });
}
