/**
 * Defines which modules to run tests.
 *
 * @type {{}}
 */
export const modules =
{
   moduleAPI: true,
   moduleBabylon: true,
   moduleCore: true,
   moduleES6: true
};

/**
 * Defines which parsers to use in testing.
 *
 * @type {{}}
 */
export const parsers =
{
   acorn: true,
   babylon: true,
   espree: true,
   esprima: true
};

/**
 * Potentially enables extra debug statements to output AST and report JSON in `./parsers.js`
 *
 * @type {boolean}
 */
export const parserDebug = false;
