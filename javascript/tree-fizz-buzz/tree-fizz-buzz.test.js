const { Node, KaryTree, fizzBuzzTree } = require('./index'); 

test('Empty tree returns null', () => {
  const tree = new KaryTree();
  expect(fizzBuzzTree(tree)).toBe(null);
});

test('Tree with only root', () => {
  const tree = new KaryTree(new Node(1));
  const newTree = fizzBuzzTree(tree);
  expect(newTree.root.value).toBe('1');
});

test('Tree with multiple nodes', () => {
  const root = new Node(1);
  const child1 = new Node(3);
  const child2 = new Node(5);
  const child3 = new Node(15);

  root.children.push(child1, child2, child3);
  child1.children.push(new Node(2), new Node(4));
  child2.children.push(new Node(6));

  const tree = new KaryTree(root);
  const newTree = fizzBuzzTree(tree);

  expect(newTree.root.value).toBe('1');
  expect(newTree.root.children[0].value).toBe('Fizz');
  expect(newTree.root.children[1].value).toBe('Buzz');
  expect(newTree.root.children[2].value).toBe('FizzBuzz');
});
