# FizzBuzz Tree

This JavaScript code defines a fizzBuzzTree function that performs a breadth-first traversal of a k-ary tree while applying FizzBuzz logic to the values of the nodes. It returns a new k-ary tree with the FizzBuzzed values.

## Whiteboard Process

- [Whiteboard](./fizzbuzz.png)

## Approach & Efficiency

- Approach:
The fizzBuzzTree function:

Initializes a new k-ary tree (newTree) with a root node (newRoot) having a null value.
Utilizes an array nodePairs to store pairs of corresponding nodes from the original tree and the new tree.
Performs a breadth-first traversal using the nodePairs array.
In each iteration, it dequeues a node pair and applies FizzBuzz logic to the value of the old node, then sets the value of the corresponding new node.
Enqueues pairs of child nodes to continue the traversal.

- Efficiency:
Time Complexity: O(n) - Each of the n nodes in the original k-ary tree is visited exactly once.

Space Complexity: O(n) - A new tree is created with the same number of nodes as the original tree, and an array (acting as a queue) is used for traversal, which will also store at most n node pairs.

## Solution

- [Code Link](../tree-fizz-buzz/index.js)
- [GitHub Actions](https://github.com/KatKho/data-structures-and-algorithms/actions)

## Contributors

- Ekaterina Khoroshilova
- ChatGPT
