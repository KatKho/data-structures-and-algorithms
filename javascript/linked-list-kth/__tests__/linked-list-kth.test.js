// Import the Node class from your index.js file
const { LinkedList, Node } = require('../index.js');

describe('LinkedList', () => {
  describe('#kthFromEnd', () => {
    it('should return an exception when k is greater than the length of the linked list', () => {
      const ll = new LinkedList();

      // Create the linked list directly
      ll.head = new Node(1);
      ll.head.next = new Node(2);
      ll.head.next.next = new Node(3);

      expect(() => ll.kthFromEnd(4)).toThrow('Invalid input: k exceeds the length of the linked list.');
    });
  });
});
