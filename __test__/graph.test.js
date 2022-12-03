'use strict';

const { Graph } = require("../src/graph/graph");

describe('Graph', () => {
    it('should create a new graph', () => {
        const g = new Graph();
        expect(g).toBeInstanceOf(Graph);
    });

    it('should add a vertex to a graph', () => {
        const g = new Graph();
        g.addVertex('hello');
        expect(g.adjacencyList.hello).toEqual([]);
    });
    it('should add an edge to a graph', () => {
        const g = new Graph();
        g.addVertex('hello');
        g.addVertex('world');
        g.addEdge('hello', 'world');
        expect(g.adjacencyList.hello[0]).toEqual('world');
        expect(g.adjacencyList.world[0]).toEqual('hello');
    });

    it('should remove an edge from a graph', () => {
        const g = new Graph();
        g.addVertex('hello');
        g.addVertex('world');
        g.addVertex('hi');
        g.addVertex('there');
        g.addEdge('hello', 'world');
        g.addEdge('hello', 'there');
        g.addEdge('hi', 'world');
        g.removeEdge('hello', 'world');
        expect(g.adjacencyList.hello).toEqual(['there']);
        expect(g.adjacencyList.world).toEqual(['hi']);
    });

    it('should remove a vertex from a graph', () => {
        const g = new Graph();
        g.addVertex('hello');
        g.addVertex('world');
        g.addVertex('hi');
        g.addVertex('there');
        g.addEdge('hello', 'world');
        g.addEdge('hello', 'there');
        g.addEdge('hi', 'world');
        g.removeVertex('hello');
        expect(g.adjacencyList['hello']).toBeUndefined();
        expect(g.adjacencyList.world).toEqual(['hi']);
    });

    it('should do a depth first search', () => {
        const g = new Graph();
        g.addVertex('hello');
        g.addVertex('world');
        g.addVertex('hod had');
        g.addVertex('hi');
        g.addVertex('there');
        g.addEdge('hello', 'hod had');
        g.addEdge('hello', 'world');
        g.addEdge('hello', 'there');
        g.addEdge('hi', 'world');
        const result = g.DFTrecursive('hello');
    });
});