/*globals exports, require */

'use strict';

var safeName, syntaxDefinitions, syntaxDefinitionsES6;

safeName = require('./safeName');
syntaxDefinitions = require('./syntax');
syntaxDefinitionsES6 = require('./syntax-es6');

exports.walk = walk;

// Settings
// - trycatch (Boolean)
// - forin (Boolean)
// - logicalor (Boolean)
// - switchcase (Boolean)
//
function walk (tree, settings, callbacks) {
    var syntaxes;

    if (typeof tree !== 'object') { throw new TypeError('Invalid syntax tree'); }
    if (!Array.isArray(tree.body)) { throw new TypeError('Invalid syntax tree body'); }
    if (typeof settings !== 'object') { throw new TypeError('Invalid settings'); }
    if (typeof callbacks !== 'object') { throw new TypeError('Invalid callbacks'); }
    if (typeof callbacks.processNode !== 'function') { throw new TypeError('Invalid processNode callback'); }
    if (typeof callbacks.createScope !== 'function') { throw new TypeError('Invalid createScope callback'); }
    if (typeof callbacks.popScope !== 'function') { throw new TypeError('Invalid popScope callback'); }

    syntaxes = syntaxDefinitions.get(settings);

    syntaxDefinitionsES6.get(syntaxes, settings);

    visitNodes(tree.body);

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
                    callbacks.createScope(safeName(node.id, assignedName), node.loc, node.params.length);
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

        if (Array.isArray(syntax.children)) {
            syntax.children.forEach(function (child) {
                visitChild(
                    node[child],
                    typeof syntax.assignableName === 'function' ? syntax.assignableName(node) : undefined
                );
            });
        }
    }

    function visitChild (child, assignedName) {
        var visitor = Array.isArray(child) ? visitNodes : visitNode;
        visitor(child, assignedName);
    }
}

