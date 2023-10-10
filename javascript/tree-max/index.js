class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMaxValue() {
    if (this.root === null) {
      return null;
    }

    let max = this.root.value;

    function inOrderTraversal(node) {
      if (node === null) {
        return;
      }
      inOrderTraversal(node.left);
      if (node.value > max) {
        max = node.value;
      }
      inOrderTraversal(node.right);
    }

    inOrderTraversal(this.root);

    return max;
  }
}

module.exports = { BinaryTree, TreeNode };

