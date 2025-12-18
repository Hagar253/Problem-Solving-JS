/**
 * Problem: Promise Time Limit
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given an asynchronous function `fn` and a time limit `t` in milliseconds,
 * return a new function that calls `fn(...args)` but rejects with 
 * `"Time Limit Exceeded"` if `fn` does not resolve within `t` milliseconds.
 */

/* -------------------------
   Solution — Using Promise.race with setTimeout
-------------------------- */
/**
 * @param {Function} fn - Async function to execute
 * @param {number} t - Time limit in milliseconds
 * @return {Function} - A wrapped function that enforces the time limit
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        let timeoutID;

        // Promise that rejects after t milliseconds
        const timeoutPromise = new Promise((_, reject) => {
            timeoutID = setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        // Call fn with arguments
        const fnPromise = fn(...args).finally(() => clearTimeout(timeoutID)); // clear timer when done

        // Return whichever happens first: timeout or fn completion
        return Promise.race([timeoutPromise, fnPromise]);
    };
};
