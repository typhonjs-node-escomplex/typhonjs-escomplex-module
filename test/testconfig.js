'use strict';

/**
 * Defines which modules to run tests.
 *
 * @type {{}}
 */
module.exports.modules =
{
    'module-api': true,
    'module-es5': true,
    'module-es6': true,
    'operands': true,
    'operators': true,
    'project': true,
    'traits': true,
    'walker': true,
    'walker-es6': true
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
