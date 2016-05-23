'use strict';

var module = require('./module');
var walker = require('./walker');

exports.analyse = analyse;

function analyse (ast, options) {
    return module.analyse(ast, options, walker);
}

