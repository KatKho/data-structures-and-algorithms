'use strict';

// storage container (knot)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// the whole rope!
class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node with the given value to the head of the list.
  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Indicates whether the given value exists as a Node's value in the list.
  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  // Returns a string representing all the values in the Linked List.
  toString() {
    let current = this.head;
    let result = '';
    while (current) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    return result + 'NULL';
  }

  // Adds a new node with the given value to the end of the list.
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // Adds a new node with the given new value immediately before the first node that has the target value specified.
  insertBefore(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return "Linked list is empty";
    }
    if (this.head.value === targetValue) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.value === targetValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return "Target value not found in linked list";
  }

  // Adds a new node with the given new value immediately after the first node that has the target value specified.
  insertAfter(targetValue, newValue) {
    const newNode = new Node(newValue);
    if (!this.head) {
      return "Linked list is empty";
    }
    let current = this.head;
    while (current) {
      if (current.value === targetValue) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    return "Target value not found in linked list";
  }

  // New method: Returns the node's value that is k places from the tail of the linked list.
  kthFromEnd(k) {
    if (k < 0 || !Number.isInteger(k)) {
      throw new Error('Invalid input: k should be a non-negative integer.');
    }

    let first = this.head;
    let second = this.head;

    // Move the first pointer k nodes ahead
    for (let i = 0; i < k; i++) {
      if (first === null) {
        throw new Error('Invalid input: k exceeds the length of the linked list.');
      }
      first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
      first = first.next;
      second = second.next;
    }

    if (second === null) {
      throw new Error('Invalid input: k exceeds the length of the linked list.');
    }

    return second.value;
  }
}

module.exports = {
  LinkedList,
  Node,
};

