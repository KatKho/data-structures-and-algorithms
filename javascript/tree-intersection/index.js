class TreeNode {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
  }
}

// Define the tree_intersection function
function tree_intersection(tree1, tree2) {
  const map = {};
  const result = [];

  // Helper function to traverse the tree and fill the hashmap
  function traverseAndMap(node) {
      if (!node) return;
      map[node.value] = true;
      traverseAndMap(node.left);
      traverseAndMap(node.right);
  }

  // Helper function to traverse the tree and check against the hashmap
  function traverseAndCheck(node) {
      if (!node) return;
      if (map[node.value]) {
          result.push(node.value);
          // Remove the value from the map to avoid duplicates
          delete map[node.value];
      }
      traverseAndCheck(node.left);
      traverseAndCheck(node.right);
  }

  traverseAndMap(tree1);
  traverseAndCheck(tree2);

  return result;
}

module.exports = {TreeNode, tree_intersection};
