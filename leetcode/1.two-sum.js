/**
 * Problem: Two Sum
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array of integers `nums` and an integer `target`, 
 * return indices of the two numbers such that they add up to `target`.
 * Each input has exactly one solution.
 */

/* -------------------------
   Solution 1 — Brute force (nested loops)
-------------------------- */
/**
 * @param {number[]} nums - An array of integers
 * @param {number} target - The target sum
 * @return {number[]} - Indices of the two numbers that add up to target
 */
var twoSumBrute = function(nums, target) {
    // Loop through each number
    for (let i = 0; i < nums.length - 1; i++) {
        // For each number, check all numbers after it
        for (let j = i + 1; j < nums.length; j++) {
            // If the sum equals the target, return the indices
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    // If no solution found (problem guarantees one solution, so usually not needed)
    return [];
};

/* -------------------------
   Solution 2 — Optimized using hash map
-------------------------- */
/**
 * @param {number[]} nums - An array of integers
 * @param {number} target - The target sum
 * @return {number[]} - Indices of the two numbers that add up to target
 */
var twoSumHash = function(nums, target) {
    // Create a map to store numbers we have seen and their indices
    const map = new Map(); // key: number, value: index

    // Loop through each number
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // What number do we need to reach target?

        // Check if the complement already exists in the map
        if (map.has(complement)) {
            // If yes, return the indices of complement and current number
            return [map.get(complement), i];
        }

        // Otherwise, store the current number in the map
        map.set(nums[i], i);
    }

    // If no solution found (not needed for LeetCode problem)
    return [];
};

/* -------------------------
   Test cases (optional)
-------------------------- */
console.log(twoSumBrute([2,7,11,15], 9)); // [0,1]
console.log(twoSumHash([2,7,11,15], 9));  // [0,1]

console.log(twoSumBrute([3,2,4], 6));     // [1,2]
console.log(twoSumHash([3,2,4], 6));      // [1,2]

console.log(twoSumBrute([3,3], 6));       // [0,1]
console.log(twoSumHash([3,3], 6));        // [0,1]
