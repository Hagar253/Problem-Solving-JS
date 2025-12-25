/**
 * Problem: Merge Sorted Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * You are given two sorted integer arrays `nums1` and `nums2`,
 * with `m` and `n` representing the number of valid elements in each.
 * 
 * Merge `nums2` into `nums1` so that `nums1` becomes a single sorted array.
 * The result must be stored inside `nums1` (in-place).
 */

/* -------------------------
   Solution — Truncate, Append, and Sort
-------------------------- */
/**
 * @param {number[]} nums1 - First array with extra space
 * @param {number} m - Number of valid elements in nums1
 * @param {number[]} nums2 - Second array
 * @param {number} n - Number of elements in nums2
 * @return {void} Do not return anything, modify nums1 in-place instead
 */
var merge = function(nums1, m, nums2, n) {
    // Remove extra placeholder elements from nums1
    nums1.length = m;

    // Append all elements from nums2 into nums1
    for (let i = 0; i < n; i++) {
        nums1.push(nums2[i]);
    }

    // Sort nums1 to get the final merged sorted array
    nums1.sort((a, b) => a - b);
};

/**
 * Example:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 *
 * After merge:
 * nums1 = [1,2,2,3,5,6]
 */
