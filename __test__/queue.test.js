'use strict'

const { Queue } = require("../src/stacks-queues/queue/Queue");

describe('Queue proof of life', () => {
    it('should create a queue', () => {
        const newQueue = new Queue
        expect(newQueue).toBeInstanceOf(Queue)
        expect(newQueue.first).toBeNull()
        expect(newQueue.last).toBeNull()
        expect(newQueue.size).toEqual(0)
    })
});

describe('Queue enqueue', () => {
    it('should add a node to the queue', () => {
        const newQueue = new Queue;
        newQueue.enqueue('first')
        newQueue.enqueue('second')
        newQueue.enqueue('third')
        expect(newQueue.first.val).toEqual('first')
        expect(newQueue.last.val).toEqual('third')
        expect(newQueue.size).toEqual(3)
    });
    it('should add a node to an empty queue', () => {
        const newQueue = new Queue;
        newQueue.enqueue('first')
        expect(newQueue.first.val).toEqual('first')
        expect(newQueue.last.val).toEqual('first')
        expect(newQueue.size).toEqual(1)
    });
});

describe('Queue dequeue', () => {
    it('should remove the first node from the queue', () => {
        const newQueue = new Queue;
        newQueue.enqueue('first')
        newQueue.enqueue('second')
        newQueue.enqueue('third')
        const removed = newQueue.dequeue()
        expect(removed).toEqual('first')
        expect(newQueue.first.val).toEqual('second')
        expect(newQueue.size).toEqual(2)
    });
    it('should empty the stack if it contains a single node', () => {
        const newQueue = new Queue;
        newQueue.enqueue('first')
        const removed = newQueue.dequeue()
        expect(removed).toEqual('first')
        expect(newQueue.first).toBeNull()
        expect(newQueue.last).toBeNull()
        expect(newQueue.size).toEqual(0)
    });
    it('should raise an exception if the queue is empty', () => {
        const newQueue = new Queue;
        const error = newQueue.dequeue()
        expect(error).toEqual('Queue is empty')
    });
});

describe('Queue peek', () => {
    it('should return the queue first', () => {
        const newQueue = new Queue
        newQueue.enqueue('first')
        newQueue.enqueue('second')
        newQueue.enqueue('third')
        const peeked = newQueue.peek()
        expect(peeked).toEqual(newQueue.first.val)
        expect(peeked).toEqual('first')
    });
    it('should raise an exception if the stack is empty', () => {
        const newQueue = new Queue
        const error = newQueue.peek()
        expect(error).toEqual('Queue is empty')
    });
});

describe('Queue isEmpty', () => {
    it('should return false for a non-empty stack', () => {
        const newQueue = new Queue
        newQueue.enqueue('first')
        newQueue.enqueue('second')
        newQueue.enqueue('third')
        const state = newQueue.isEmpty()
        expect(state).toEqual(false)
        expect(state).toBeFalsy()
    });
    it('should return true for an empty stack', () => {
        const newQueue = new Queue
        const state = newQueue.isEmpty()
        expect(state).toEqual(true)
        expect(state).toBeTruthy()
    });
});