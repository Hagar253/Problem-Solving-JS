/**
 * Problem: Valid Parentheses
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * An input string is valid if:
 * 1. Open brackets are closed by the same type of brackets.
 * 2. Open brackets are closed in the correct order.
 */

/* -------------------------
   Solution — Stack-based
-------------------------- */
var isValid = function(s) {
    const stack = []; // stack to track open brackets
    const map = { // mapping of closing -> opening brackets
        ')' : '(',
        ']' : '[',
        '}' : '{'
    };

    for (const char of s) {
        // If opening bracket, push to stack
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            // If stack empty or top doesn't match, invalid
            if (stack.length === 0 || stack[stack.length - 1] !== map[char]) {
                return false;
            }
            stack.pop(); // matched, remove from stack
        }
    }

    // Valid if stack is empty at the end
    return stack.length === 0;
};

/**
 * Example:
 * isValid("()"); // true
 * isValid("()[]{}"); // true
 * isValid("(]"); // false
 */
