/**
 * Problem: Remove Duplicates from Sorted Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a sorted array of integers `nums`, remove the duplicates in-place 
 * such that each unique element appears only once. The relative order of the 
 * elements should be kept the same. Return the number of unique elements, k.
 * After removing duplicates, the first k elements of nums should contain the 
 * unique numbers in sorted order. It does not matter what you leave beyond k.
 */

/* -------------------------
   Solution 1 — Two Pointers
-------------------------- */
/**
 * @param {number[]} nums - A sorted array of integers
 * @return {number} - Number of unique elements
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // slow pointer

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]; // overwrite duplicate
        }
    }   

    return i + 1; // number of unique elements
    // +1 since i is the last index of a unique number
};
