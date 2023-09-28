# Data Structures and Algorithms

## Linked List Zip

The LinkedList class represents a data structure that stores a collection of elements.

## Whiteboard Process

No whiteboard utilized.

## Approach & Efficiency

Create an empty linked list zippedList to store the result.

Initialize two pointers, current1 and current2, to the heads of the input linked lists list1 and list2, respectively.

Use a while loop to iterate as long as either current1 or current2 is not null.

Within the loop:
If current1 is not null, append the value of current1 to zippedList, and move current1 to the next node (if exists).
If current2 is not null, append the value of current2 to zippedList, and move current2 to the next node (if exists).

Continue this process until both current1 and current2 become null.

Return the zippedList, which contains the zipped nodes from the input linked lists.

In summary, the algorithm iterates through both input linked lists, alternately appending nodes to the result zippedList. This ensures that the nodes from the two lists are zipped together as described in the problem statement. The algorithm handles cases where the input lists have different lengths or are empty.

## Solution

- [Code Link](../linked-list-zip/index.js)
