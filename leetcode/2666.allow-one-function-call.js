/**
 * Problem: Allow One Function Call
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a function `fn`, return a new function that ensures `fn` is called
 * at most once. On the first call, it should return the result of `fn`.
 * On subsequent calls, it should return `undefined` without invoking `fn`.
 */

/* -------------------------
   Solution 1 — Using a boolean flag (closure)
-------------------------- */
/**
 * @param {Function} fn - The function that should only be called once
 * @return {Function} - A new function that allows only one execution
 */
var once = function(fn) {
    let called = false;

    return function(...args) {
        if (!called) {
            called = true;
            return fn(...args);
        } else {
            return undefined;
        }
    };
};

/* -------------------------
   Solution 2 — Nullifying function reference
-------------------------- */
/**
 * @param {Function} fn - The function that should only be called once
 * @return {Function} - A new function that allows only one execution
 */
var onceOptimized = function(fn) {

    return function(...args) {
        if (!fn) return undefined; // If fn is null, it has already been called

        const result = fn(...args); // Call the function on first execution
        fn = null; // Remove reference to prevent future calls
        return result;
    };
};

/**
 * Example:
 * let fn = (a, b, c) => (a + b + c);
 *
 * let onceFn = once(fn);
 * onceFn(1, 2, 3); // 6
 * onceFn(2, 3, 6); // undefined
 *
 * let onceFnOptimized = onceOptimized(fn);
 * onceFnOptimized(1, 2, 3); // 6
 * onceFnOptimized(2, 3, 6); // undefined
 */

