/*globals exports, require */

'use strict';

exports.walk = walk;

function walk (tree, callbacks) {
    if (typeof callbacks !== 'object') { throw new TypeError('Invalid callbacks'); }
    if (typeof callbacks.enterNode !== 'function') { throw new TypeError('Invalid enterNode callback'); }
    if (typeof callbacks.exitNode !== 'function') { throw new TypeError('Invalid exitNode callback'); }

    if (Array.isArray(tree)) {
        visitNodes(tree);
    }
    else if (typeof tree === 'object') {
        visitNode(tree);
    }
    else {
        throw new TypeError('Invalid syntax tree body');
    }

    function visitNodes (nodes, parent) {
        nodes.forEach(function (node) {
            visitNode(node, parent);
        });
    }

    function visitNode (node, parent) {
        if (node !== null && typeof node === 'object') {
            var ignoreNodeKeys = callbacks.enterNode(node, parent);

            visitChildren(node, ignoreNodeKeys);

            callbacks.exitNode(node, parent);
        }
    }

    function visitChildren (node, ignoreNodeKeys) {
        ignoreNodeKeys = Array.isArray(ignoreNodeKeys) ? ignoreNodeKeys : [];

        // Visit all node keys which are an array or an object.
        Object.keys(node).forEach(function(key) {
            if (ignoreNodeKeys.indexOf(key) >= 0) {
                return;
            }

            if (Array.isArray(node[key]) || typeof node[key] === 'object') {
                visitChild(node[key], node);
            }
        });
    }

    function visitChild (child, parent) {
        var visitor = Array.isArray(child) ? visitNodes : visitNode;
        visitor(child, parent);
    }
}
