import { assert }       from 'chai';

import * as testconfig  from './testconfig';

import escomplex        from '../../src';

if (testconfig.modules['moduleAPI'])
{
   suite('module (API): ', () =>
   {
      test('analyze function is exported', () =>
      {
         assert.isFunction(escomplex.analyze);
      });

      test('analyze does not throw with valid arguments', () =>
      {
         assert.doesNotThrow(() =>
         {
            escomplex.analyze({
               body: [],
               loc: {
                  start: {
                     line: 0
                  },
                  end: {
                     line: 0
                  }
               }
            });
         });
      });

      test('analyze throws when ast is string', () =>
      {
         assert.throws(() => { escomplex.analyze('console.log("foo");'); });
      });

      test('analyze throws when ast is array', () =>
      {
         assert.throws(() => { escomplex.analyze([]); });
      });

      test('analyze returns object', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }));
      });

      test('analyzeAsync returns object', () =>
      {
         const promise = escomplex.analyzeAsync({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         });

         promise.then((report) =>
         {
            assert.isObject(report);
         });
      });

      test('analyze returns aggregate object', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate);
      });

      test('analyze returns aggregate lines of code property', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.sloc);
      });

      test('analyze returns aggregate physical lines of code property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.sloc.physical);
      });

      test('analyze returns aggregate logical lines of code property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.sloc.logical);
      });

      test('analyze returns aggregate cyclomatic complexity property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.cyclomatic);
      });

      test('analyze returns aggregate cyclomatic complexity density property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.cyclomaticDensity);
      });

      test('analyze returns aggregate halstead property', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead);
      });

      test('analyze returns aggregate halstead operators property', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operators);
      });

      test('analyze returns aggregate halstead total operators property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operators.total);
      });

      test('analyze returns aggregate halstead distinct operators property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operators.distinct);
      });

      test('analyze returns aggregate halstead operator identifiers property', () =>
      {
         assert.isArray(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operators.identifiers);
      });

      test('analyze returns aggregate halstead operands property', () =>
      {
         assert.isObject(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operands);
      });

      test('analyze returns aggregate halstead total operands property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operands.total);
      });

      test('analyze returns aggregate halstead distinct operands property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operands.distinct);
      });

      test('analyze returns aggregate halstead operand identifiers property', () =>
      {
         assert.isArray(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).aggregate.halstead.operands.identifiers);
      });

      test('analyze returns maintainability property', () =>
      {
         assert.isNumber(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).maintainability);
      });

      test('analyze returns methods property', () =>
      {
         assert.isArray(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).methods);
      });

      test('analyze returns dependencies property', () =>
      {
         assert.isArray(escomplex.analyze({
            body: [],
            loc: {
               start: {
                  line: 0
               },
               end: {
                  line: 0
               }
            }
         }).dependencies);
      });
   });
}
