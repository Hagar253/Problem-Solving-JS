/**
 * Problem: Divide an Array Into Subarrays With Minimum Cost I
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array of integers `nums` of length n, divide `nums` into 3 
 * disjoint contiguous subarrays.
 * The cost of a subarray is the value of its first element.
 * Return the minimum possible sum of the costs of the three subarrays.
 */

/* -------------------------
   Solution — Brute Force
-------------------------- */
var minimumCost = function(nums) {
    const n = nums.length;
    let minSum = Infinity;

    for (let i = 1; i <= n - 2; i++) {
        for (let j = i + 1; j <= n - 1; j++) {
            // cost = first element of each subarray
            const cost = nums[0] + nums[i] + nums[j];
            minSum = Math.min(minSum, cost);
        }
    }

    return minSum;
};
