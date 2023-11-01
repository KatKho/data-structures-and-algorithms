const leftJoin = require('./index');

test('Happy Path: Check with non-empty hashmaps', () => {
  const synonyms = {
    diligent: 'employed',
    fond: 'enamored',
    guide: 'usher',
    outfit: 'garb',
    wrath: 'anger',
  };

  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
    guide: 'follow',
    flow: 'jam',
    wrath: 'delight',
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([
    ['diligent', 'employed', 'idle'],
    ['fond', 'enamored', 'averse'],
    ['guide', 'usher', 'follow'],
    ['outfit', 'garb', null],
    ['wrath', 'anger', 'delight'],
  ]);
});

test('Expected failure: Check with empty hashmap1', () => {
  const synonyms = {};
  const antonyms = {
    diligent: 'idle',
    fond: 'averse',
  };

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([]);
});

test('Edge Case: Check with empty hashmaps', () => {
  const synonyms = {};
  const antonyms = {};

  const result = leftJoin(synonyms, antonyms);
  expect(result).toEqual([]);
});
