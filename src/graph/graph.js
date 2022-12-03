'use strict';

class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return undefined;
        this.adjacencyList[vertex] = [];
    };
    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return undefined;
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(item => item != vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(item => item != vertex1);
    }
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        for (let edge of this.adjacencyList[vertex]) {
            this.removeEdge(edge, vertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFTrecursive(entry) {
        const result = [];
        const visited = {};
        const dfs = (vertex) => {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) return dfs(neighbor);
            });
        };
        dfs(entry);
        return result;
    }
}

module.exports = { Graph };