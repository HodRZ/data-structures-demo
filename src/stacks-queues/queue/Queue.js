'use strict'

const { Node } = require("../Node");

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val) {
        const newNode = new Node(val)
        if (this.size === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return (`Added, Queue size= ${++this.size}`)
    }

    dequeue() {
        if (this.size === 0) return 'Queue is empty';
        const oldFirst = this.first;
        if (this.size === 1) {
            this.last = null;
        }
        this.first = this.first.next;
        oldFirst.next = null;
        this.size--;
        return oldFirst.val;

    }

    peek() {
        if (this.size === 0) return 'Queue is empty'
        return this.first.val
    }
    isEmpty() {
        return (this.size === 0) ? true : false
    }
}

module.exports = { Queue }