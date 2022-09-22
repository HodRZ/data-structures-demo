'use tsrict'

const { Stack } = require("../src/stacks-queues/stacks/Stack")

describe('Stack Proof of Life', () => {
    it('should create a stack', () => {
        const newStack = new Stack
        expect(newStack).toBeInstanceOf(Stack)
        expect(newStack.top).toBeNull()
        expect(newStack.bottom).toBeNull()
        expect(newStack.size).toEqual(0)
    })
})

describe('Stack push', () => {
    it('should push a value to an empty stack', () => {
        const newStack = new Stack
        const addedNode = newStack.push('first')
        expect(newStack.size).toEqual(1)
        expect(newStack.top.val).toEqual('first')
        expect(newStack.bottom.val).toEqual('first')
        expect(addedNode).toEqual('Added, Stack size= 1')
    });
    it('should push a node as a new top to a non-empty stack', () => {
        const newStack = new Stack
        newStack.push('first')
        newStack.push('second')
        newStack.push('third')
        expect(newStack.size).toEqual(3)
        expect(newStack.top.val).toEqual('third')
        expect(newStack.top.next.val).toEqual('second')
        expect(newStack.top.next.next.val).toEqual('first')
        expect(newStack.bottom.val).toEqual('first')
        expect(newStack.bottom.next).toBeNull()
    });
});

describe('Stack pop', () => {
    it('should remove the top node from the stack', () => {
        const newStack = new Stack
        newStack.push('first')
        newStack.push('second')
        newStack.push('third')
        const oldTop = newStack.pop()
        expect(oldTop).toEqual('third')
        expect(newStack.top.val).toEqual('second')
        expect(newStack.size).toEqual(2)
    });
    it('should empty the stack if it contains a single node', () => {
        const newStack = new Stack
        newStack.push('first')
        const oldTop = newStack.pop()
        expect(oldTop).toEqual('first')
        expect(newStack.top).toBeNull()
        expect(newStack.bottom).toBeNull()
        expect(newStack.size).toEqual(0)
    });
    it('should raise an exception if the stack is empty', () => {
        const newStack = new Stack
        const error = newStack.pop()
        expect(error).toEqual('Stack is empty')
    });
});

describe('Stack peek', () => {
    it('should return the stack top', () => {
        const newStack = new Stack
        newStack.push('first')
        newStack.push('second')
        newStack.push('third')
        const peeked = newStack.peek()
        expect(peeked).toEqual(newStack.top.val)
        expect(peeked).toEqual('third')
    });
    it('should raise an exception if the stack is empty', () => {
        const newStack = new Stack
        const error = newStack.peek()
        expect(error).toEqual('Stack is empty')
    });
});

describe('Stack isEmpty', () => {
    it('should return false for a non-empty stack', () => {
        const newStack = new Stack
        newStack.push('first')
        newStack.push('second')
        newStack.push('third')
        const state = newStack.isEmpty()
        expect(state).toEqual(false)
        expect(state).toBeFalsy()
    });
    it('should return true for an empty stack', () => {
        const newStack = new Stack
        const state = newStack.isEmpty()
        expect(state).toEqual(true)
        expect(state).toBeTruthy()
    });
});