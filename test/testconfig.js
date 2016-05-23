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
    'operands': true,
    'operators': true,
    'project': true,
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
    espree: true,
    esprima: true
};
