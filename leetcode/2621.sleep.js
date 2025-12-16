/**
 * Problem: Sleep
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a number `millis`, write an asynchronous function `sleep`
 * that resolves after `millis` milliseconds.
 */

/* -------------------------
   Solution — Using Promise and setTimeout
-------------------------- */
/**
 * @param {number} millis - Time to sleep in milliseconds
 * @return {Promise} - A promise that resolves after the given time
 */
async function sleep(millis) {
    // Create a promise that resolves after `millis` milliseconds
    await new Promise(resolve => setTimeout(resolve, millis));
};

/**
 * Example:
 * let t = Date.now();
 * sleep(100).then(() => console.log(Date.now() - t)); // ~100
 */
