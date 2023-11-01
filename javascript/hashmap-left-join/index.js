function leftJoin(hashmap1, hashmap2) {
  const result = [];

  for (const [key, value] of Object.entries(hashmap1)) {
    const row = [key, value];

    if (hashmap2.hasOwnProperty(key)) {
      row.push(hashmap2[key]);
    } else {
      row.push(null);
    }
    result.push(row);
  }

  return result;
}

module.exports = leftJoin;
