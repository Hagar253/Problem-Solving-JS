/**
 * Problem: Memoize
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given a function `fn`, return a memoized version of that function.
 * A memoized function caches the results of previous function calls
 * and returns the cached result when the same inputs occur again,
 * avoiding unnecessary recomputation.
 */

/* -------------------------
   Solution 1 — Using plain object as cache
-------------------------- */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {}; // Stores results for previously used arguments

    return function(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }

        const result = fn.apply(this, args);
        cache[key] = result;
        return result;
    };
}

/* -------------------------
   Solution 2 — Optimized (using Map)
-------------------------- */
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoizeOptimized(fn) {
    // Map is used for better performance and safer key handling
    // Key   → function arguments
    // Value → computed result
    const cache = new Map();

    return function (...args) {
        // Use the argument directly as key if only one argument exists
        // Otherwise, stringify arguments to form a unique key
        const key = args.length === 1 ? args[0] : JSON.stringify(args);

        // If result is already cached, return it immediately
        if (cache.has(key)) {
            return cache.get(key);
        }

        // Call the original function with correct `this` context
        const result = fn.apply(this, args);

        // Cache the computed result for future calls
        cache.set(key, result);

        return result;
    };
}

