/**
 * Problem: Group By
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Enhance all arrays such that you can call the `groupBy(fn)` method on any array.
 * The method should return an object where the keys are the result of applying `fn`
 * to each element, and the values are arrays containing elements that map to the same key.
 */

/* -------------------------
   Solution 1 — Iterative loop
-------------------------- */
/**
 * @param {Function} fn - Callback function to determine the group key
 * @return {Object} - Object containing grouped elements
 */
Array.prototype.groupBy = function(fn) {
    const grouped = {}; // Object to store grouped results

    // Loop through each element
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]); // Determine group key

        // Initialize array if key doesn't exist
        if (!grouped[key]) {
            grouped[key] = [];
        }

        // Push element into its group
        grouped[key].push(this[i]);
    }

    return grouped;
};

/* -------------------------
   Solution 2 — Using reduce
-------------------------- */
/**
 * @param {Function} fn - Callback function to determine the group key
 * @return {Object} - Object containing grouped elements
 */
Array.prototype.groupBy = function(fn) {
    return this.reduce((grouped, current) => {
        // Apply the callback to get the key for the current element
        const key = fn(current);

        // If this key doesn't exist yet in the grouped object, create an empty array
        if (!grouped[key]) {
            grouped[key] = [];
        }

        // Push the current element into its corresponding group
        grouped[key].push(current);

        // Return the accumulator for the next iteration
        return grouped;
    }, {}); // {} is the initial value of the accumulator (empty object)
};

/**
 * Example:
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */

