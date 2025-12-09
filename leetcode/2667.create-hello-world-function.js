/**
 * Problem: Create Hello World Function
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Write a function `createHelloWorld` that returns a new function
 * which always returns the string "Hello World" regardless of input.
 */

/* -------------------------
   Solution — Closure returning a constant value
-------------------------- */
/**
 * @return {Function} - A function that returns "Hello World"
 */
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello World";
    };
};

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
