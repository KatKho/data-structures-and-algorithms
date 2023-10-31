const { TreeNode, tree_intersection } = require('./index');

describe('Test tree_intersection function', () => {

    test('Trees with some common values', () => {
        const tree1 = new TreeNode(100);
        tree1.left = new TreeNode(160);
        tree1.right = new TreeNode(200);

        const tree2 = new TreeNode(100);
        tree2.left = new TreeNode(160);
        tree2.right = new TreeNode(350);

        expect(tree_intersection(tree1, tree2)).toEqual([100, 160]);
    });

    test('One tree is empty', () => {
        const tree1 = new TreeNode(100);
        tree1.left = new TreeNode(160);
        tree1.right = new TreeNode(200);

        const tree2 = null;

        expect(tree_intersection(tree1, tree2)).toEqual([]);
    });

    test('Both trees are identical', () => {
        const tree1 = new TreeNode(100);
        tree1.left = new TreeNode(160);
        tree1.right = new TreeNode(200);

        const tree2 = new TreeNode(100);
        tree2.left = new TreeNode(160);
        tree2.right = new TreeNode(200);

        expect(tree_intersection(tree1, tree2)).toEqual([100, 160, 200]);
    });

    test('Trees with no common values', () => {
        const tree1 = new TreeNode(50);
        tree1.left = new TreeNode(30);
        tree1.right = new TreeNode(70);

        const tree2 = new TreeNode(100);
        tree2.left = new TreeNode(90);
        tree2.right = new TreeNode(110);

        expect(tree_intersection(tree1, tree2)).toEqual([]);
    });
});
