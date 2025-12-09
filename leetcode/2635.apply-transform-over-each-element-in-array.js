/**
 * Problem: Apply Transform Over Each Element in Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an integer array `arr` and a mapping function `fn`, return a new array
 * where `returnedArray[i] = fn(arr[i], i)`.  
 * You must implement this without using the built-in `Array.map` method.
 */

/* -------------------------
   Solution — Manual iteration & transformation
-------------------------- */
/**
 * @param {number[]} arr - The input array of integers
 * @param {Function} fn - A function applied to each element (value, index)
 * @return {number[]} - A new array with transformed values
 */
var map = function(arr, fn) {
    var returnedArray = [];
    
    // Loop through each element manually
    for (let i = 0 ; i < arr.length ; i++) {
        returnedArray[i] = fn(arr[i], i); // Apply transformation
    }
    
    return returnedArray;
};

/**
 * Example:
 * const arr = [1, 2, 3];
 * const fn = function(n, i) { return n + i };
 * map(arr, fn); // [1, 3, 5]
 */
