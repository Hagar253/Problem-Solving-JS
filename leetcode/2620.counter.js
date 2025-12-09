/**
 * Problem: Counter
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an integer `n`, write a function `createCounter` that returns another
 * function. Each time the returned function is called, it should return the
 * current value of `n`, then increment it by 1.
 */

/* -------------------------
   Solution — Using closure to preserve state
-------------------------- */
/**
 * @param {number} n - The starting number for the counter
 * @return {Function} - A function that returns the next number each time it is called
 */
var createCounter = function(n) {

    return function() {
        // Return current value, then increment for next call
        return n++;
    };
};

/**
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 */
