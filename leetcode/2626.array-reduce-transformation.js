/**
 * Problem: Array Reduce Transformation
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array `nums`, a function `fn`, and an initial value `init`,
 * apply the reducer function across the elements of the array such that:
 * 
 *    val = fn(val, nums[i])
 * 
 * The reduction starts with the value `init` and processes each element
 * sequentially. You must implement this without using the built-in
 * `Array.reduce` method.
 */

/* -------------------------
   Solution — Manual reduction using accumulator
-------------------------- */
/**
 * @param {number[]} nums - The input array
 * @param {Function} fn - The reducer function (accumulator, currentValue)
 * @param {number} init - The initial value for the accumulator
 * @return {number} - The final accumulated value
 */
var reduce = function(nums, fn, init) {
    var val = init; // Start accumulator with initial value

    for (let i = 0 ; i < nums.length ; i++) {
        val = fn(val, nums[i]); // Update accumulator using reducer function
    }

    return val; // Return final accumulated result
};
