/**
 * Problem: Add Two Promises
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given two promises `promise1` and `promise2`, return a new promise
 * that resolves with the sum of the resolved values of the two promises.
 */

/* -------------------------
   Solution 1 — Using async/await with Promise.all
-------------------------- */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    // Resolve both promises in parallel
    const [value1, value2] = await Promise.all([promise1, promise2]);

    // Return the sum of resolved values
    return value1 + value2;
};

/* -------------------------
   Solution 2 — Without async/await (using .then)
-------------------------- */
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromisesThen = function(promise1, promise2) {
    // Promise.all returns a promise that resolves to an array of values
    return Promise.all([promise1, promise2])
        .then(values => {
            // Extract resolved values
            const value1 = values[0];
            const value2 = values[1];

            // Return their sum
            return value1 + value2;
        });
};

/**
 * Example:
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 *
 * addTwoPromisesThen(Promise.resolve(3), Promise.resolve(4))
 *   .then(console.log); // 7
 */
