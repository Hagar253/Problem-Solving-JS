/**
 * Problem: Debounce 
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Implement a debounce function. Given a function `fn` and a delay `t` in milliseconds, 
 * return a new function that delays invoking `fn` until after `t` milliseconds have elapsed 
 * since the last time the returned function was called.
 */

/* -------------------------
   Solution — Using setTimeout
-------------------------- */
/**
 * @param {Function} fn - Function to debounce
 * @param {number} t - Delay in milliseconds
 * @return {Function} - Debounced function
 */
var debounce = function(fn, t) {
    let timeoutID;

    return function(...args) {
        // Clear any previous scheduled execution
        clearTimeout(timeoutID);

        // Schedule a new execution after t milliseconds
        timeoutID = setTimeout(() => {
            fn(...args);
        }, t);
    };
};

/**
 * Example:
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms after last call
 */
