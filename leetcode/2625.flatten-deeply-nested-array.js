/**
 * Problem: Flatten Deeply Nested Array
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given a nested array `arr` and an integer `depth` `n`, 
 * flatten the array up to `n` levels deep.
 */

/* -------------------------
   Solution 1 — Iterative with recursion
-------------------------- */
/**
 * @param {Array} arr - Nested array to flatten
 * @param {number} depth - Levels to flatten
 * @return {Array} - Flattened array
 */
var flat = function(arr, n) {
    let flattened = [];

    for (const item of arr) {
        if (Array.isArray(item) && n > 0) {
            // Recursively flatten one level deeper
            flattened.push(...flat(item, n - 1));
        } else {
            // Either not an array, or depth exhausted
            flattened.push(item);
        }
    }

    return flattened;
};

/* -------------------------
   Solution 2 — Using reduce
-------------------------- */
/**
 * @param {Array} arr - Nested array to flatten
 * @param {number} depth - Levels to flatten
 * @return {Array} - Flattened array
 */
var flat = function(arr, n) {
    return arr.reduce((acc, item) => {
        // Check if the element is an array and if we still have depth to flatten it
        if (Array.isArray(item) && n > 0) {
            // Recursively flatten it one level deeper and merge with the accumulater 
            acc.push(...flat(item, n - 1));
        } else {
            // If it is not an array, push it into the accumulater directly
            acc.push(item);
        }
        return acc;
    }, []);
};

/**
 * Example:
 * flat([1, [2, [3, [4]]]], 2) // [1, 2, 3, [4]]
 */
