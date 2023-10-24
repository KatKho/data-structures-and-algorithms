const mergeSort = require('./index');

test('sorts an empty array', () => {
  const arr = [];
  mergeSort(arr);
  expect(arr).toEqual([]);
});

test('sorts an array with one element', () => {
  const arr = [5];
  mergeSort(arr);
  expect(arr).toEqual([5]);
});

test('sorts an array with multiple elements', () => {
  const arr = [34, 7, 23, 32, 5, 62];
  mergeSort(arr);
  expect(arr).toEqual([5, 7, 23, 32, 34, 62]);
});

test('sorts an already sorted array', () => {
  const arr = [1, 2, 3, 4, 5];
  mergeSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5]);
});
