# Multi-bracket Validation

The validateBrackets function is a JavaScript implementation for checking the balance of brackets in a given string. It ensures that all brackets, including round brackets (), square brackets [], and curly brackets {}, are correctly matched and nested.

## Whiteboard Process

- [Whiteboard](./IMG_0028.jpg)

## Approach & Efficiency

- The validateBrackets function utilizes a stack to keep track of opening brackets.
- It iterates through the input string character by character.
- When an opening bracket is encountered, it is pushed onto the stack.
- When a closing bracket is encountered, it checks if the corresponding opening bracket is at the top of the stack.
- If the brackets are balanced, the opening bracket is popped from the stack.
- If the stack is empty at the end of the iteration, all brackets are balanced, and the function returns true. Otherwise, it returns false.

- validateBrackets(str)

  - Validates the balance of brackets in the given string.

- Arguments:

  - str (string): The input string to validate.

- Returns:

  - boolean: true if all brackets are balanced, false otherwise.

## Solution

- [Code Link](../stack-queue-brackets/index.js)
- [GitHub Actions](https://github.com/KatKho/data-structures-and-algorithms/actions)

