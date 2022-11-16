'use strict';

const { BinarySearchTree } = require("../src/BST/bst");


describe('BTS methods', () => {
    it('should create a new binary search tree', () => {
        const bts = new BinarySearchTree;
        expect(bts).toBeInstanceOf(BinarySearchTree);
    });

    it('should insert a new root to an empty tree', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        expect(bts.root.val).toEqual(10);
    });

    it('should insert a node less than the root to the left of the root', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(9);
        bts.insert(7);
        expect(bts.root.left.val).toEqual(9);
        expect(bts.root.left.left.val).toEqual(7);
    });

    it('should insert a node greater than the root to the right of the root', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(12);
        bts.insert(14);
        bts.insert(13);
        expect(bts.root.right.val).toEqual(12);
        expect(bts.root.right.right.val).toEqual(14);
        expect(bts.root.right.right.left.val).toEqual(13);
    });

    it('should find a node in the list', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(12);
        bts.insert(14);
        bts.insert(13);
        const found = bts.find(13);
        const foundError = bts.find(11);
        expect(foundError).toEqual(undefined);
        expect(found).toEqual(13);
    });

    it('should do a breadth first traversal', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(13);
        bts.insert(12);
        bts.insert(14);
        bts.insert(9);
        bts.insert(7);
        bts.insert(5);
        const bft = bts.breadthFirst();
        expect(bft).toEqual([10, 9, 13, 7, 12, 14, 5]);
    });

    it('should do a preOrder traverse', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(13);
        bts.insert(12);
        bts.insert(14);
        bts.insert(9);
        bts.insert(7);
        bts.insert(5);
        const pre = bts.preOrder();
        expect(pre).toEqual([10, 9, 7, 5, 13, 12, 14]);
    });

    it('should do a postOrder traverse', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(13);
        bts.insert(12);
        bts.insert(14);
        bts.insert(9);
        bts.insert(7);
        bts.insert(5);
        const post = bts.postOrder();
        expect(post).toEqual([5, 7, 9, 12, 14, 13, 10]);
    });

    it('should do an inOrder traverse', () => {
        const bts = new BinarySearchTree;
        bts.insert(10);
        bts.insert(13);
        bts.insert(12);
        bts.insert(14);
        bts.insert(9);
        bts.insert(7);
        bts.insert(5);
        const order = bts.inOrder();
        expect(order).toEqual([5, 7, 9, 10, 12, 13, 14]);
    });
});

//        10
//      9     13
//    7     12   14
//  5       
