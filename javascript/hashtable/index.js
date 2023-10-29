class HashTable {
  constructor(size) {
    this.size = size;
    this.buckets = new Array(size).fill(null).map(() => []);
  }

  hash(key) {
    let hashValue = 0;
    for (const char of key) {
      hashValue += char.charCodeAt(0);
    }
    return hashValue % this.size;
  }

  set(key, value) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    for (let i = 0; i < bucket.length; i++) {
      const [storedKey] = bucket[i];
      if (storedKey === key) {
        bucket[i] = [key, value];
        return;
      }
    }
    bucket.push([key, value]);
  }

  get(key) {
    const keyHash = this.hash(key);
    const bucket = this.buckets[keyHash];
    for (const [storedKey, storedValue] of bucket) {
      if (storedKey === key) {
        return storedValue;
      }
    }
    return null;
  }

  has(key) {
    const bucket = this.buckets[this.hash(key)];
    for (const [storedKey] of bucket) {
      if (storedKey === key) {
        return true;
      }
    }
    return false;
  }

  keys() {
    const allKeys = [];
    for (const bucket of this.buckets) {
      for (const [key] of bucket) {
        allKeys.push(key);
      }
    }
    return allKeys;
  }
}

module.exports = HashTable;
