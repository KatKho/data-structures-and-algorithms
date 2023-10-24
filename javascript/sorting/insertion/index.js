function insert(sorted, value) {
  let i = 0;
  while (i < sorted.length && value > sorted[i]) {
      i++;
  }
  while (i < sorted.length) {
      let temp = sorted[i];
      sorted[i] = value;
      value = temp;
      i++;
  }
  sorted.push(value);
}

function insertionSort(input) {
  if (input.length === 0) {
    return [];
  }
  // Check for non-numeric values and throw an error if found.
  for (const value of input) {
      if (typeof value !== 'number') {
          throw new Error('Input contains non-numeric values.');
      }
  }

  let sorted = [];
  sorted[0] = input[0];
  for (let i = 1; i < input.length; i++) {
      insert(sorted, input[i]);
  }
  return sorted;
}

module.exports = insertionSort;
