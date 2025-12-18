/**
 * Problem: Sort By
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * /**
 * Problem: Sort Array by Function
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array arr and a function fn, return a sorted array sortedArr. 
 * You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. 
 * sortedArr must be sorted in ascending order by fn output.
 */

/* -------------------------
   Solution — Using Array.sort
-------------------------- */
/**
 * @param {Array} arr - Array of elements to sort
 * @param {Function} fn - Function to map elements to values for sorting
 * @return {Array} - Sorted array
 */
var sortBy = function(arr, fn) {
    // Use Array.sort and compare based on fn(a) - fn(b)
    return arr.sort((a, b) => fn(a) - fn(b));
};

/**
 * Example:
 * sortBy([1,2,3,4,5], n => n % 2); 
 * // Returns: [2,4,1,3,5] (even numbers first, then odd)
 *
 * sortBy([{x:1},{x:3},{x:2}], obj => obj.x);
 * // Returns: [{x:1},{x:2},{x:3}]
 */
