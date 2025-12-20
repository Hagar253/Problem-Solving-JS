/**
 * Problem: Execute Asynchronous Functions in Parallel
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given an array of asynchronous functions `functions`, each returning a promise,
 * implement a function `promiseAll` that runs all promises in parallel and returns
 * a new promise:
 * - Resolves when all promises resolve, with an array of resolved values in the same order.
 * - Rejects immediately if any promise rejects, with the first rejection reason.
 */

/* -------------------------
   Solution — Using a counter and Promise constructor
-------------------------- */
/**
 * @param {Array<Function>} functions - Array of functions returning promises
 * @return {Promise<any>} - Promise that resolves to array of results
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let counter = 0;           // Track resolved promises
        let result = [];            // Store results in order

        for (let i = 0; i < functions.length; i++) {
            const promise = functions[i](); // Call the function to get its promise

            promise.then(value => {
                result[i] = value; // Store result at correct index
                counter++;

                // If all promises resolved, resolve the outer promise
                if (counter === functions.length) {
                    resolve(result);
                }
            }).catch(error => {
                // Reject immediately if any promise fails
                reject(error);
            });
        }
    });
};

/**
 * Example:
 * const promise = promiseAll([
 *   () => new Promise(res => setTimeout(() => res(1), 100)),
 *   () => Promise.resolve(42),
 *   () => Promise.resolve('hello')
 * ]);
 *
 * promise.then(console.log); // [1, 42, "hello"]
 * promise.catch(console.error); // If any promise rejects
 */
