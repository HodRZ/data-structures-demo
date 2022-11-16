'use strict';

const { Node } = require("./Node");



class BinarySearchTree {
    constructor() {
        this.root = null;
    };

    insert = (val) => {
        const newNode = new Node(val);
        if (!this.root) {
            this.root = newNode;
            return this;
        }
        let start = this.root;
        const finder = (current) => {
            if (val < current.val) {
                if (!current.left) {
                    current.left = newNode;
                    return this;
                }
                return finder(current.left);
            }
            if (val > current.val) {
                if (!current.right) {
                    current.right = newNode;
                    return this;
                }
                return finder(current.right);
            }
        };
        finder(start);
        return this;
    };

    find = (val) => {
        if (!this.root) return undefined;
        let start = this.root;
        const finder = (current) => {
            if (val === current.val) return current.val;
            if (val < current.val) {
                if (!current.left) {
                    return undefined;
                }
                return finder(current.left);
            }
            if (val > current.val) {
                if (!current.right) {
                    return undefined;
                }
                return finder(current.right);
            }
        };
        return finder(start);
    };

    breadthFirst = () => {
        if (!this.root) return undefined;
        let node = this.root;
        const queue = [];
        const result = [];
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            result.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return result;
    };

    preOrder = () => {
        if (!this.root) return undefined;
        let node = this.root;
        const list = [];
        const traverse = (node) => {
            list.push(node.val);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        };
        traverse(node);
        return list;
    };

    postOrder = () => {
        if (!this.root) return undefined;
        let node = this.root;
        const list = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            list.push(node.val);
        };
        traverse(node);
        return list;
    };

    inOrder = () => {
        if (!this.root) return undefined;
        let node = this.root;
        const list = [];
        const traverse = (node) => {
            if (node.left) traverse(node.left);
            list.push(node.val);
            if (node.right) traverse(node.right);
        };
        traverse(node);
        return list;
    };
}


module.exports = {
    BinarySearchTree
};