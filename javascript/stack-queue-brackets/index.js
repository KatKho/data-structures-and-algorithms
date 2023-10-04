function validateBrackets(str) {
  const stack = [];
  const bracketPairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (let char of str) {
    if (char in bracketPairs) {
      // If it's an opening bracket, push it onto the stack
      stack.push(char);
    } else if (char === ')' || char === ']' || char === '}') {

      // Check if the stack is empty or if the last opening bracket doesn't match
      if (!stack.length || bracketPairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are balanced
  return stack.length === 0;
}

module.exports = validateBrackets;
