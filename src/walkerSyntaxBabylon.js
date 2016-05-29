/*globals require, exports */

'use strict';

var safeName = require('./safeName');
var traits = require('./traits');

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

function BindExpression () { return traits.actualise(0, 0); }

function BooleanLiteral () { return traits.actualise(0, 0, undefined, function (node) { return node.value; }); }

function ClassMethod () {
    return traits.actualise(0, 0,
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

function Decorator () { return traits.actualise(0, 0); }

function Directive () { return traits.actualise(1, 0); }

function DirectiveLiteral () {
    return traits.actualise(0, 0, undefined,
        function (node) {
            if (typeof node.value === 'string') {
                // Avoid conflicts between string literals and identifiers.
                return '"' + node.value + '"';
            }

            return node.value;
        }
    );
}

function NullLiteral () { return traits.actualise(0, 0, undefined, 'null'); }

function NumericLiteral () { return traits.actualise(0, 0, undefined, function (node) { return node.value; }); }

function ObjectMethod () {
    return traits.actualise(0, 0,
        function (node) {
            return typeof node.kind === 'string' && (node.kind === 'get' || node.kind === 'set') ?
                node.kind : undefined;
        },
        undefined,
        // Note: must skip key as the assigned name is forwarded on to FunctionExpression.
        'key'
    );
}

function ObjectProperty () {
    return traits.actualise(1, 0,
        function (node) {
            // Note that w/ ES6+ `:` may be omitted and the Property node defines `shorthand` to indicate this case.
            return typeof node.shorthand === 'undefined' ? ':' :
                typeof node.shorthand === 'boolean' && !node.shorthand ? ':' : undefined;
        }
    );
}

function RestProperty () { return traits.actualise(0, 0); }

function SpreadProperty () { return traits.actualise(0, 0); }

function StringLiteral () {
    return traits.actualise(0, 0, undefined,
        function (node) {
            // Avoid conflicts between string literals and identifiers.
            return '"' + node.value + '"';
        }
    );
}
