# Data Structures and Algorithms

## Stacks and Queues

A stack is a data structure that follows the Last-In, First-Out (LIFO) principle, while a queue follows the First-In, First-Out (FIFO) principle.

## Whiteboard Process

No whiteboard utilized.

## Approach & Efficiency

### Stack Class:

1. push Method: The push method adds a new node with the given value to the top of the stack. It achieves this by creating a new node and updating the top reference, making it a constant-time (O(1)) operation.

2. pop Method: The pop method removes and returns the value of the node at the top of the stack. It updates the top reference to the next node in the stack. This operation is also a constant-time (O(1)) operation but should raise an exception when called on an empty stack.

3. peek Method: The peek method returns the value of the node located at the top of the stack without removing it. It accesses the top node's value, making it a constant-time (O(1)) operation but should raise an exception when called on an empty stack.

4. isEmpty Method: The isEmpty method checks whether the stack is empty or not by verifying if the top reference is null. This operation is a constant-time (O(1)) operation.

### Queue Class:

1. enqueue Method: The enqueue method adds a new node with the given value to the back of the queue. It updates the rear reference to the new node, making it a constant-time (O(1)) operation.

2. dequeue Method: The dequeue method removes and returns the value of the node at the front of the queue. It updates the front reference to the next node in the queue. This operation is also a constant-time (O(1)) operation but should raise an exception when called on an empty queue.

3. peek Method: The peek method returns the value of the node located at the front of the queue without removing it. It accesses the front node's value, making it a constant-time (O(1)) operation but should raise an exception when called on an empty queue.

4. isEmpty Method: The isEmpty method checks whether the queue is empty or not by verifying if the front reference is null. This operation is a constant-time (O(1)) operation.

## Solution

- [Code Link](../stack-and-queue/index.js)
- [GitHub Actions](https://github.com/KatKho/data-structures-and-algorithms/actions)
