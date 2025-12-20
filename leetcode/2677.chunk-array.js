/**
 * Problem: Chunk Array
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array `arr` and a positive integer `size`, split the array into
 * subarrays (chunks) each of length `size`. The last chunk may be smaller
 * if there are not enough elements.
 */

/* -------------------------
   Solution — Using for loop and slice
-------------------------- */
/**
 * @param {Array} arr - Input array to split
 * @param {number} size - Size of each chunk
 * @return {Array} - Array of chunks
 */
var chunk = function(arr, size) {
    let chunkArray = []; // Array to store chunks

    // Iterate through the array in steps of 'size'
    for (let i = 0; i < arr.length; i += size) {
        // Slice a subarray from current index to index + size
        chunkArray.push(arr.slice(i, i + size));
    }

    return chunkArray;
};

/**
 * Example:
 * chunk([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
 * chunk([1,2,3,4,5,6,7,8], 3); // [[1,2,3],[4,5,6],[7,8]]
 */
