/**
 * Problem: Filter Elements from Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an integer array `arr` and a filtering function `fn`, return a new array
 * that only includes the elements for which `fn(arr[i], i)` returns `true`.
 * You must implement this without using the built-in `Array.filter` method.
 */

/* -------------------------
   Solution — Manual filtering with condition check
-------------------------- */
/**
 * @param {number[]} arr - The input array
 * @param {Function} fn - A function that determines whether each element is kept (value, index)
 * @return {number[]} - A new array containing only elements that pass the filter
 */
var filter = function(arr, fn) {
    var filteredArr = [];
    
    for (let i = 0 ; i < arr.length ; i++) {
        // If the function returns true, include the element in the result
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]); // Add the element to the filtered array
        }
    }

    return filteredArr;
};

/**
 * Example:
 * const arr = [0, 10, 20, 30];
 * const fn = function(n) { return n > 10 };
 * filter(arr, fn); // [20, 30]
 */
