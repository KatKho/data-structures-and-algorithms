const { BinaryTree, TreeNode } = require('./index.js');

describe('Binary Tree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinaryTree();
    tree.root = new TreeNode(10);
    tree.root.left = new TreeNode(5);
    tree.root.right = new TreeNode(15);
    tree.root.left.left = new TreeNode(3);
    tree.root.left.right = new TreeNode(7);
    tree.root.right.right = new TreeNode(20);
  });

  test('Find maximum value in a binary tree', () => {
    expect(tree.findMaxValue()).toBe(20);
  });

  test('Find maximum value in a binary tree with a single node', () => {
    const singleNodeTree = new BinaryTree();
    singleNodeTree.root = new TreeNode(42);
    expect(singleNodeTree.findMaxValue()).toBe(42);
  });

  test('Find maximum value in an empty binary tree', () => {
    const emptyTree = new BinaryTree();
    expect(emptyTree.findMaxValue()).toBeNull();
  });
});
