const validateBrackets = require('./index');

describe('validateBrackets', () => {
  it('should return true for balanced brackets', () => {
    expect(validateBrackets('{}')).toBe(true);
    expect(validateBrackets('{}(){}')).toBe(true);
    expect(validateBrackets('()[[Extra Characters]]')).toBe(true);
    expect(validateBrackets('(){}[[]]')).toBe(true);
    expect(validateBrackets('{}{Code}[Fellows](())')).toBe(true);
  });

  it('should return false for unbalanced brackets', () => {
    expect(validateBrackets('[({}]')).toBe(false);
    expect(validateBrackets('(](')).toBe(false);
    expect(validateBrackets('{(})')).toBe(false);
  });

  it('should handle empty string', () => {
    expect(validateBrackets('')).toBe(true);
  });

  it('should handle non-bracket characters', () => {
    expect(validateBrackets('Hello, world!')).toBe(true);
  });
});
