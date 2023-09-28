const { zipLists, LinkedList } = require('../index.js');

function linkedListToArray(linkedList) {
  const result = [];
  let current = linkedList.head;
  while (current) {
    result.push(current.value);
    current = current.next;
  }
  return result;
}

describe('zipLists', () => {
  it('should zip two linked lists with equal lengths', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);
    list1.append(2);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zipped = zipLists(list1, list2);

    expect(linkedListToArray(zipped)).toEqual([1, 5, 3, 9, 2, 4]);
  });

  it('should zip two linked lists with different lengths', () => {
    const list1 = new LinkedList();
    list1.append(1);
    list1.append(3);

    const list2 = new LinkedList();
    list2.append(5);
    list2.append(9);
    list2.append(4);

    const zipped = zipLists(list1, list2);

    expect(linkedListToArray(zipped)).toEqual([1, 5, 3, 9, 4]);
  });

  it('should handle empty linked lists', () => {
    const list1 = new LinkedList();
    const list2 = new LinkedList();

    const zipped = zipLists(list1, list2);

    expect(linkedListToArray(zipped)).toEqual([]);
  });

  it('should handle one empty linked list', () => {
    const list1 = new LinkedList();
    list1.append(1);

    const list2 = new LinkedList();

    const zipped = zipLists(list1, list2);

    expect(linkedListToArray(zipped)).toEqual([1]);
  });
});
