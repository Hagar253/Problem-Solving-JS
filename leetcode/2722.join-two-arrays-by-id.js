/**
 * Problem: Join Two Arrays by ID
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given two arrays of objects `arr1` and `arr2`, each object contains an `id`.
 * Merge the arrays based on the `id` key.
 *
 * Rules:
 * - The result should contain unique `id`s only.
 * - If an `id` exists in only one array, include it as-is.
 * - If an `id` exists in both arrays, merge the objects.
 *   - Keys from `arr2` override keys from `arr1` if duplicated.
 * - The final array must be sorted in ascending order by `id`.
 */

/* -------------------------
   Solution
-------------------------- */
/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    let map = new Map();

    // Add all objects from arr1
    for (let i = 0; i < arr1.length; i++) {
        map.set(arr1[i].id, arr1[i]);
    }

    // Merge or add objects from arr2
    for (let j = 0; j < arr2.length; j++) {
        if (map.has(arr2[j].id)) {
            let oldObj = map.get(arr2[j].id);
            let mergedObj = { ...oldObj, ...arr2[j] };
            map.set(arr2[j].id, mergedObj);
        } else {
            map.set(arr2[j].id, arr2[j]);
        }
    }

    // Convert to array and sort by id
    return [...map.values()].sort((a, b) => a.id - b.id);
};
