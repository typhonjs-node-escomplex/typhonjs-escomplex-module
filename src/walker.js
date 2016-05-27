/*globals exports, require */

'use strict';

var safeName, syntaxDefinitions, syntaxDefinitionsES6, syntaxDefinitionsBabylon;

safeName = require('./safeName');
syntaxDefinitions = require('./walkerSyntaxCore');
syntaxDefinitionsES6 = require('./walkerSyntaxES6');
syntaxDefinitionsBabylon = require('./walkerSyntaxBabylon');

exports.walk = walk;

// Settings
// - trycatch (Boolean)
// - forin (Boolean)
// - logicalor (Boolean)
// - switchcase (Boolean)
//
function walk (tree, settings, callbacks) {
    var syntaxes = [];

    if (typeof tree !== 'object') { throw new TypeError('Invalid syntax tree'); }
    if (typeof settings !== 'object') { throw new TypeError('Invalid settings'); }
    if (typeof callbacks !== 'object') { throw new TypeError('Invalid callbacks'); }
    if (typeof callbacks.processNode !== 'function') { throw new TypeError('Invalid processNode callback'); }
    if (typeof callbacks.createScope !== 'function') { throw new TypeError('Invalid createScope callback'); }
    if (typeof callbacks.popScope !== 'function') { throw new TypeError('Invalid popScope callback'); }

    syntaxDefinitions.get(syntaxes, settings);
    syntaxDefinitionsES6.get(syntaxes, settings);
    syntaxDefinitionsBabylon.get(syntaxes, settings);

    if (Array.isArray(tree.body)) {
        visitNodes(tree.body);
    }
    else if (typeof tree.program === 'object' && Array.isArray(tree.program.body)) {
        visitNodes(tree.program.body);
    }
    else {
        throw new TypeError('Invalid syntax tree body');
    }

    function visitNodes (nodes, assignedName) {
        nodes.forEach(function (node) {
            visitNode(node, assignedName);
        });
    }

    function visitNode (node, assignedName) {
        var syntax;

        if (node !== null && typeof node === 'object') {
            syntax = syntaxes[node.type];

            if (syntax !== null && typeof syntax === 'object') {
                callbacks.processNode(node, syntax, assignedName);

                if (syntax.newScope) {
                    // Note that Babylon AST ClassMethod doesn't always have a value / FunctionExpression node so also
                    // potentially use `node.key` to find the Identifier / name.
                    callbacks.createScope(safeName(node.id || node.key, assignedName), node.loc, node.params.length);
                }

                visitChildren(node);

                if (syntax.newScope) {
                    callbacks.popScope();
                }
            }
        }
    }

    function visitChildren (node) {
        var syntax = syntaxes[node.type];

        // Visit all node keys which are an array or an object.
        Object.keys(node).forEach(function(key) {
            if (Array.isArray(syntax.ignoreKeys) && syntax.ignoreKeys.indexOf(key) >= 0) {
                return;
            }

            if (Array.isArray(node[key]) || typeof node[key] === 'object') {
                visitChild(
                    node[key],
                    typeof syntax.assignableName === 'function' ? syntax.assignableName(node) : undefined
                );
            }
        });
    }

    function visitChild (child, assignedName) {
        var visitor = Array.isArray(child) ? visitNodes : visitNode;
        visitor(child, assignedName);
    }
}
