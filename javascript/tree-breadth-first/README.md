# Breadth-first Traversal

This JavaScript code defines a breadthFirst function that performs a breadth-first traversal of a binary tree. It collects the values of the tree nodes in the order they are encountered.

## Whiteboard Process

- [Whiteboard](./BFT.png)

## Approach & Efficiency

- Approach:

The breadthFirst function initializes an empty order array and starts by enqueuing the root node into the queue.
A while loop continues processing nodes until the queue is empty.
In each iteration, a node is dequeued, and its value is added to order. Child nodes are enqueued if they exist.
The traversal ensures each node is visited exactly once.

- Efficiency:

Time Complexity: O(n) - The function visits each of the n nodes once.
Space Complexity: O(w) - The space complexity depends on the maximum width (w) of the tree. In a balanced tree, w ≈ n/2, resulting in O(n) space complexity.

## Solution

- [Code Link](../tree-breadth-first/index.js)
- [GitHub Actions](https://github.com/KatKho/tree-breadth-first/actions)

## Contributors

- Ekaterina Khoroshilova
- ChatGPT
