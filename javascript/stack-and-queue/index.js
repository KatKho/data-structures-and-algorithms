class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    const topNode = this.top;
    this.top = this.top.next;
    return topNode.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return this.top === null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const frontNode = this.front;
    this.front = this.front.next;
    if (!this.front) {
      // If the queue is now empty, reset the rear pointer.
      this.rear = null;
    }
    return frontNode.value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null;
  }
}

// Example usage:

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false

const queue = new Queue();
queue.enqueue('a');
queue.enqueue('b');
queue.enqueue('c');

console.log(queue.dequeue()); // Output: 'a'
console.log(queue.peek()); // Output: 'b'
console.log(queue.isEmpty()); // Output: false


module.exports = {
  Node,
  Stack,
  Queue,
};
