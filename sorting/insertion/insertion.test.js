const insertionSort = require('./index');

test('Sorts an array of numbers using insertion sort', () => {
    expect(insertionSort([8, 4, 23, 42, 16, 15])).toEqual([4, 8, 15, 16, 23, 42]);
    expect(insertionSort([20, 18, 12, 8, 5, -2])).toEqual([-2, 5, 8, 12, 18, 20]);
    expect(insertionSort([5, 12, 7, 5, 5, 7])).toEqual([5, 5, 5, 7, 7, 12]);
    expect(insertionSort([2, 3, 5, 7, 13, 11])).toEqual([2, 3, 5, 7, 11, 13]);
    expect(insertionSort([])).toEqual([]);
    expect(insertionSort([42])).toEqual([42]);
});

test('Handles non-numeric values gracefully', () => {
    expect(() => {
        insertionSort(['a', 'b', 'c']);
    }).toThrow();
});
