class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
}

class KaryTree {
  constructor(root = null) {
    this.root = root;
  }
}

const fizzBuzzTree = (tree) => {
  if (!tree.root) {
    return null;
  }

  const newRoot = new Node(null);
  const newTree = new KaryTree(newRoot);

  const nodePairs = [{ oldNode: tree.root, newNode: newRoot }];

  while (nodePairs.length) {
    const { oldNode, newNode } = nodePairs.shift();

    if (oldNode.value % 15 === 0) {
      newNode.value = 'FizzBuzz';
    } else if (oldNode.value % 3 === 0) {
      newNode.value = 'Fizz';
    } else if (oldNode.value % 5 === 0) {
      newNode.value = 'Buzz';
    } else {
      newNode.value = oldNode.value.toString();
    }

    for (let i = 0; i < oldNode.children.length; i++) {
      const newChild = new Node(null);
      newNode.children.push(newChild);
      nodePairs.push({ oldNode: oldNode.children[i], newNode: newChild });
    }
  }

  return newTree;
};

module.exports = { Node, KaryTree, fizzBuzzTree } ;
