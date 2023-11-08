class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(src, dest) {
    this.adjacencyList[src].push(dest);
  }

  depthFirstPreOrder(start) {
    const stack = [start];
    const result = [];
    const visited = {};

    visited[start] = true;
    if (!this.adjacencyList[start]) {
      throw new Error('Start node not found');
    }

    while (stack.length) {
      const current = stack.pop();
      result.push(current);

      const neighbors = this.adjacencyList[current];
      for (let i = neighbors.length - 1; i >= 0; i--) {
        const neighbor = neighbors[i];
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

module.exports = Graph;

