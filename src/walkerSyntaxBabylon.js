/*globals require, exports */

'use strict';

var safeName =  require('./traits/safeName');
var actualise = require('./traits/actualise');

var syntaxModules = loadSyntaxModules();

exports.get = getSyntax;

function getSyntax (syntaxes, settings) {
    var name;

    for (name in syntaxModules) {
        if (syntaxModules.hasOwnProperty(name)) {
            setSyntax(syntaxes, name, settings);
        }
    }

    return syntaxes;
}

function loadSyntaxModules () {
    var modules = [];

    // Unique Babylon AST nodes that are not present in ESTree (https://github.com/babel/babel/blob/master/doc/ast/spec.md)

    modules['BindExpression'] = BindExpression;
    modules['BooleanLiteral'] = BooleanLiteral;
    modules['ClassMethod'] = ClassMethod;
    modules['Decorator'] = Decorator;
    modules['Directive'] = Directive;
    modules['DirectiveLiteral'] = DirectiveLiteral;
    modules['NullLiteral'] = NullLiteral;
    modules['NumericLiteral'] = NumericLiteral;
    modules['ObjectMethod'] = ObjectMethod;
    modules['ObjectProperty'] = ObjectProperty;
    modules['RestProperty'] = RestProperty;
    modules['SpreadProperty'] = SpreadProperty;
    modules['StringLiteral'] = StringLiteral;

    return modules;
}

function setSyntax (syntaxes, name, settings) {
    syntaxes[name] = syntaxModules[name](settings);
}

function BindExpression () { return actualise(0, 0); }

function BooleanLiteral () { return actualise(0, 0, undefined, function (node) { return node.value; }); }

function ClassMethod () {
    return actualise(0, 0,
        function (node) {
            var operators = ['function'];
            if (node.kind && (node.kind === 'get' || node.kind === 'set')) { operators.push(node.kind); }
            if (typeof node.static === 'boolean' && node.static) { operators.push('static'); }
            return operators;
        },
        function (node) { return safeName(node.key); },
        // Note: must skip key as the assigned name is forwarded on to FunctionExpression.
        'key',
        true
    );
}

function Decorator () { return actualise(0, 0); }

function Directive () { return actualise(1, 0); }

function DirectiveLiteral () {
    return actualise(0, 0, undefined,
        function (node) {
            if (typeof node.value === 'string') {
                // Avoid conflicts between string literals and identifiers.
                return '"' + node.value + '"';
            }

            return node.value;
        }
    );
}

function NullLiteral () { return actualise(0, 0, undefined, 'null'); }

function NumericLiteral () { return actualise(0, 0, undefined, function (node) { return node.value; }); }

function ObjectMethod () {
    return actualise(0, 0,
        function (node) {
            return typeof node.kind === 'string' && (node.kind === 'get' || node.kind === 'set') ?
                node.kind : undefined;
        },
        undefined,
        'key'  // Note: must skip key as the assigned name is forwarded on to FunctionExpression.
    );
}

// Note that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
function ObjectProperty () {
    return actualise(1, 0,
        function (node) {
            return typeof node.shorthand === 'undefined' ? ':' :
                typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : undefined;
        }
    );
}

function RestProperty () { return actualise(0, 0); }

function SpreadProperty () { return actualise(0, 0); }

// Avoid conflicts between string literals and identifiers.
function StringLiteral () { return actualise(0, 0, undefined, function (node) { return '"' + node.value + '"'; }); }
