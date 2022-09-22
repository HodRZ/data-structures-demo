'use strict'

const { Node } = require("../Node");

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.size = 0
    }
    push(val) {
        const newTop = new Node(val)
        if (this.size === 0) {
            this.top = newTop;
            this.bottom = newTop;
        } else {
            newTop.next = this.top;
            this.top = newTop;
        }
        return (`Added, Stack size= ${++this.size}`)
    }
    pop() {
        if (this.size === 0) return 'Stack is empty';
        const oldTop = this.top;
        if (this.size === 1) {
            this.bottom = null;
        }
        this.top = this.top.next;
        oldTop.next = null;
        this.size--;
        return oldTop.val;

    }
    peek() {
        if (this.size === 0) return 'Stack is empty'
        return this.top.val
    }
    isEmpty() {
        return (this.size === 0) ? true : false
    }
}

module.exports = { Stack }