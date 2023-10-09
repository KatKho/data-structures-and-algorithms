const { Node, BinaryTree, BinarySearchTree } = require('./index'); 
describe('BinaryTree and BinarySearchTree', () => {
  let tree;

  beforeEach(() => {
    tree = new BinarySearchTree();
    /*
    Construct a simple binary search tree:
        10
       /  \
      5    15
     / \     \
    3   7     20
    */
    tree.add(10);
    tree.add(5);
    tree.add(15);
    tree.add(3);
    tree.add(7);
    tree.add(20);
  });

  describe('BinaryTree', () => {
    it('should perform pre-order traversal', () => {
      expect(tree.preOrder()).toEqual([10, 5, 3, 7, 15, 20]);
    });

    it('should perform in-order traversal', () => {
      expect(tree.inOrder()).toEqual([3, 5, 7, 10, 15, 20]);
    });

    it('should perform post-order traversal', () => {
      expect(tree.postOrder()).toEqual([3, 7, 5, 20, 15, 10]);
    });
  });

  describe('BinarySearchTree', () => {
    it('should add a value to the tree', () => {
      tree.add(12);
      expect(tree.inOrder()).toEqual([3, 5, 7, 10, 12, 15, 20]);
    });

    it('should check if a value exists in the tree', () => {
      expect(tree.contains(7)).toBe(true);
      expect(tree.contains(12)).toBe(false);
    });
  });
});
