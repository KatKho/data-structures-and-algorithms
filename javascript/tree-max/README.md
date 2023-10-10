# Maximum Value in a Binary Tree

This JavaScript code includes a method that finds the maximum value stored in the tree.

## Whiteboard Process

- [Whiteboard](./tree-max.png)

## Approach & Efficiency

- To find the maximum value in a binary tree, we employ a recursive algorithm that performs an in-order traversal of the tree. This method initializes a max variable with the root node's value and then compares it with other node values as it traverses the tree. The time complexity is O(n), where n is the number of nodes in the tree, as we must visit each node at least once. The space complexity is O(h), where h is the height of the tree, as it depends on the call stack depth during recursion.

## Solution

- [Code Link](../tree-max/index.js)
- [GitHub Actions](https://github.com/KatKho/tree-max/actions)

## Contributors

- Ekaterina Khoroshilova
- ChatGPT
