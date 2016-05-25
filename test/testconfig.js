'use strict';

/**
 * Defines which modules to run tests.
 *
 * @type {{}}
 */
module.exports.modules =
{
    'moduleAPI': true,
    'moduleCore': true,
    'moduleES6': true,
    'moduleES7': true,
    'operands': true,
    'operators': true,
    'traits': true,
    'walker': true,
    'walkerES6': true
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
module.exports.parserDebug = false;
