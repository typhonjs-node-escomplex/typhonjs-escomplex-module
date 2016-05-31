'use strict';

import { assert }       from 'chai';

import * as testconfig  from './testconfig';

const modulePath = '../../dist/module';

if (testconfig.modules['moduleAPI'])
{
   suite('module (API): ', () =>
   {
      test('require does not throw', () =>
      {
         assert.doesNotThrow(() => { require(modulePath); });
      });

      test('require returns object', () =>
      {
         assert.isObject(require(modulePath));
      });

      suite('require:', () =>
      {
         let escomplex;

         setup(() => { escomplex = require(modulePath); });

         teardown(() => { escomplex = undefined; });

         test('analyse function is exported', () =>
         {
            assert.isFunction(escomplex.analyse);
         });

         test('analyse does not throw with valid arguments', () =>
         {
            assert.doesNotThrow(() =>
            {
               escomplex.analyse({
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

         test('analyse throws when ast is string', () =>
         {
            assert.throws(() => { escomplex.analyse('console.log("foo");'); });
         });

         test('analyse throws when ast is array', () =>
         {
            assert.throws(() => { escomplex.analyse([]); });
         });

         test('analyse returns object', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate object', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate lines of code property', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate physical lines of code property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate logical lines of code property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate cyclomatic complexity property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate cyclomatic complexity density property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate halstead property', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate halstead operators property', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate halstead total operators property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate halstead distinct operators property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate halstead operator identifiers property', () =>
         {
            assert.isArray(escomplex.analyse({
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

         test('analyse returns aggregate halstead operands property', () =>
         {
            assert.isObject(escomplex.analyse({
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

         test('analyse returns aggregate halstead total operands property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate halstead distinct operands property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns aggregate halstead operand identifiers property', () =>
         {
            assert.isArray(escomplex.analyse({
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

         test('analyse returns maintainability property', () =>
         {
            assert.isNumber(escomplex.analyse({
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

         test('analyse returns functions property', () =>
         {
            assert.isArray(escomplex.analyse({
               body: [],
               loc: {
                  start: {
                     line: 0
                  },
                  end: {
                     line: 0
                  }
               }
            }).functions);
         });

         test('analyse returns dependencies property', () =>
         {
            assert.isArray(escomplex.analyse({
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
   });
}
