'use strict';

var module = require('./module');

exports.analyse = analyse;

function analyse (ast, options) {
    return module.analyse(ast, options);
}

