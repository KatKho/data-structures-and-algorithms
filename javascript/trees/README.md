# Binary Tree and Binary Search Tree Implementation

This JavaScript code defines classes for Binary Trees and Binary Search Trees. It includes methods for depth-first traversal (pre-order, in-order, and post-order) in binary trees and methods for adding values and checking the existence of values in binary search trees.

## Whiteboard Process

- [Whiteboard](./IMG_0029.jpg)

## Approach & Efficiency

- BinaryTree Class:
  The depth-first traversal methods (pre-order, in-order, and post-order) have a time complexity of O(n), where n is the number of nodes in the tree. This is because they visit each node once.

- BinarySearchTree Class:
  The add method adds a node in the correct location, and its time complexity is O(h), where h is the height of the tree. In a balanced binary search tree, the height is approximately log₂(n), where n is the number of nodes. In the worst case (unbalanced tree), the height can be n, resulting in O(n) time complexity.
  The contains method searches for a value in the tree and has a time complexity of O(h), similar to the add method.

## Solution

- [Code Link](../trees/index.js)
- [GitHub Actions](https://github.com/KatKho/data-structures-and-algorithms/actions)
