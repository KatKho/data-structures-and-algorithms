# Data Structures and Algorithms

## Linked List Kth

The LinkedList class represents a data structure that stores a collection of elements.

## Whiteboard Process

No whiteboard utilized.

## Approach & Efficiency

Initialize two pointers, first and second, both initially pointing to the head of the linked list.

Move the first pointer k nodes ahead in the linked list. This can be done using a loop.

After moving the first pointer, start moving both first and second pointers simultaneously until the first pointer reaches the end of the linked list. This will ensure that the second pointer is k nodes from the end of the list.

Once the first pointer reaches the end of the list, check if the second pointer is still pointing to a valid node. If it is, return the value of that node; otherwise, throw an exception indicating that k exceeds the length of the linked list.

## Solution

- [Code Link](../linked-list-kth/index.js)
