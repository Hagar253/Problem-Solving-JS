/**
 * Problem: Transformed Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * You are given an integer array `nums`.
 * For each index `i`:
 *  - If `nums[i] == 0`, then `result[i] = nums[i]`
 *  - Otherwise, move `nums[i]` steps forward (positive) or backward (negative)
 *    in a circular manner and place the value found at that index into `result[i]`
 * Return the transformed array.
 */

/* -------------------------
   Solution — Circular Indexing
-------------------------- */
var constructTransformedArray = function(nums) {
    let results = [];
    let n = nums.length;

    for (let i = 0; i < n; i++) {

        // If value is zero, it stays the same
        if (nums[i] === 0) {
            results[i] = nums[i];
            continue;
        }

        // Calculate new index with circular wrapping
        let movedIndex = (i + nums[i]) % n;

        // Handle negative indices
        if (movedIndex < 0) {
            movedIndex += n;
        }

        // Place the value at the calculated index
        results.push(nums[movedIndex]);
    }

    return results;
};
