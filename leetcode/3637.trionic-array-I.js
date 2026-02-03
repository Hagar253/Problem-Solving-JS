/**
 * Problem: Trionic Array I
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * You are given an integer array `nums` of length n.
 * An array is called trionic if there exist indices 0 < p < q < n − 1 such that:
 * 1. nums[0...p] is strictly increasing
 * 2. nums[p...q] is strictly decreasing
 * 3. nums[q...n − 1] is strictly increasing
 * Return true if nums is trionic, otherwise return false.
 */

/* -------------------------
   Solution — One Pass Scan
-------------------------- */
var isTrionic = function(nums) {
    let reachedP = false;     // finished first increasing phase
    let reachedQ = false;     // finished decreasing phase
    let reachedLast = false;  // finished final increasing phase

    for (let i = 1; i < nums.length; i++) {
        // First phase: strictly increasing
        if (nums[i] > nums[i - 1] && !reachedQ && !reachedLast) {
            reachedP = true;
        }
        // Second phase: strictly decreasing
        else if (nums[i] < nums[i - 1] && reachedP && !reachedLast) {
            reachedQ = true;
        }
        // Third phase: strictly increasing again
        else if (nums[i] > nums[i - 1] && reachedP && reachedQ) {
            reachedLast = true;
        }
        // Any invalid pattern
        else {
            return false;
        }
    }

    // Must complete all three phases
    return reachedP && reachedQ && reachedLast;
};
