const repeatedWord = require('./index');

describe('repeatedWord function', () => {

  it('should return the first repeated word in a given string', () => {
    const input = "Once upon a time, there was a brave princess who...";
    const output = repeatedWord(input);
    expect(output).toBe("a");
  });

  it('should return null if there are no repeated words', () => {
    const input = "Hello world!";
    const output = repeatedWord(input);
    expect(output).toBeNull();
  });

  it('should be case-insensitive and ignore punctuation', () => {
    const input = "Hello, hello. How are you?";
    const output = repeatedWord(input);
    expect(output).toBe("hello");
  });

});

