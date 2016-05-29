'use strict';

/**
 * Defines which modules to run tests.
 *
 * @type {{}}
 */
module.exports.modules =
{
    moduleAPI: false,
    moduleBabylon: false,
    moduleCore: true,
    moduleES6: false,
    traits: false
};

/**
 * Defines which parsers to use in testing.
 *
 * @type {{}}
 */
module.exports.parsers =
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
module.exports.parserDebug = true;

module.exports.TESTING = false;
