const HashTable = require('./index');

describe('HashTable', () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable(10);
  });

  test('Setting a key/value results in the value being in the data structure', () => {
    hashTable.set('name', 'John');
    expect(hashTable.get('name')).toBe('John');
  });

  test('Retrieving based on a key returns the value stored', () => {
    hashTable.set('age', 30);
    expect(hashTable.get('age')).toBe(30);
  });

  test('Successfully returns null for a key that does not exist', () => {
    expect(hashTable.get('missing')).toBe(null);
  });

  test('Successfully returns a list of all unique keys that exist', () => {
    hashTable.set('key1', 'value1');
    hashTable.set('key2', 'value2');
    expect(hashTable.keys()).toEqual(expect.arrayContaining(['key1', 'key2']));
  });

  test('Successfully handles a collision within the hash table', () => {
    const firstHash = hashTable.hash('abc');
    const secondHash = hashTable.hash('cba');
    expect(firstHash).toBe(secondHash);
    hashTable.set('abc', 'value1');
    hashTable.set('cba', 'value2');
    expect(hashTable.get('abc')).toBe('value1');
    expect(hashTable.get('cba')).toBe('value2');
  });

  test('Successfully retrieves a value from a bucket that has a collision', () => {
    hashTable.set('abc', 'value1');
    hashTable.set('cba', 'value2');
    expect(hashTable.get('abc')).toBe('value1');
  });

  test('Successfully hashes a key to an in-range value', () => {
    const hashValue = hashTable.hash('test');
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(hashTable.size);
  });

  test('Successfully checks if a key exists in the hashtable', () => {
    hashTable.set('exists', 'value');
    expect(hashTable.has('exists')).toBe(true);
    expect(hashTable.has('doesNotExist')).toBe(false);
  });

  test('Successfully updates the value for an existing key', () => {
    hashTable.set('keyToUpdate', 'initialValue');
    expect(hashTable.get('keyToUpdate')).toBe('initialValue');

    hashTable.set('keyToUpdate', 'updatedValue');
    expect(hashTable.get('keyToUpdate')).toBe('updatedValue');
  });
});
