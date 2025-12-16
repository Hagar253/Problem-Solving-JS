/**
 * Problem: Cancellable Function
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a function `fn`, an array of arguments `args`, and a delay `t`,
 * return a new function `cancelFn` that can cancel the scheduled execution
 * of `fn`. If not cancelled, `fn(...args)` is called after `t` milliseconds.
 */

/* -------------------------
   Solution 1 — Using setTimeout and clearTimeout
-------------------------- */
/**
 * @param {Function} fn - Function to execute after delay
 * @param {Array} args - Arguments to pass to fn
 * @param {number} t - Delay in milliseconds
 * @return {Function} - A function that cancels the scheduled execution
 */
var cancellable = function(fn, args, t) {
    let timeoutID;

    function cancelFn() {
        clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => fn(...args), t);

    return cancelFn;
};

/* -------------------------
   Solution 2 — Advanced: Promise-based cancellable function
-------------------------- */
/**
 * @param {Function} fn - Function to execute after delay
 * @param {Array} args - Arguments to pass to fn
 * @param {number} t - Delay in milliseconds
 * @return {Object} - An object with `promise` and `cancelFn`
 */
var cancellableAdvanced = function(fn, args, t) {
    let timeoutID;
    let canceled = false;

    const promise = new Promise((resolve, reject) => {
        timeoutID = setTimeout(() => {
            if (!canceled) {
                resolve(fn(...args)); // Resolve the promise with function result
            }
        }, t);
    });

    // Cancel function: prevents execution and clears timeout
    const cancelFn = () => {
        canceled = true;
        clearTimeout(timeoutID);
    };

    return { promise, cancelFn };
};


