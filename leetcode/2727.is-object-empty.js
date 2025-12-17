/**
 * Problem: Is Object Empty
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an object or an array `obj`, return `true` if it is empty,
 * otherwise return `false`.
 * 
 * An object is considered empty if it has no own enumerable properties.
 * An array is considered empty if its length is 0.
 */

/* -------------------------
   Solution — Using Object.keys
-------------------------- */
/**
 * @param {Object|Array} obj - The object or array to check
 * @return {boolean} - Returns true if obj is empty, otherwise false
 */
var isEmpty = function(obj) {
    // Object.keys returns an array of own enumerable property names
    // If the length is 0, the object or array is empty
    return Object.keys(obj).length === 0;
};

