/**
 * Problem: Repeated Cancellable Function
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given a function `fn`, an array of arguments `args`, and a delay `t`,
 * execute `fn(...args)` immediately and then repeatedly every `t` milliseconds.
 * Return a function `cancelFn` that can stop further executions.
 */

/* -------------------------
   Solution — Using setInterval and clearInterval
-------------------------- */
/**
 * @param {Function} fn - Function to execute repeatedly
 * @param {Array} args - Arguments to pass to fn
 * @param {number} t - Interval in milliseconds
 * @return {Function} - Function to cancel further executions
 */
var cancellable = function(fn, args, t) {
    let intervalID;

    // Execute the function immediately
    fn(...args);

    // Function to cancel the interval
    function cancelFn() {
        clearInterval(intervalID);
    }

    // Schedule repeated executions every t milliseconds
    intervalID = setInterval(() => fn(...args), t);

    return cancelFn;
};

/**
 * Example:
 * const result = [];
 * const fn = (x) => x * 2;
 * const args = [4], t = 35, cancelTimeMs = 190;
 *
 * const start = performance.now();
 * const log = (...argsArr) => {
 *     const diff = Math.floor(performance.now() - start);
 *     result.push({"time": diff, "returned": fn(...argsArr)});
 * };
 *
 * const cancel = cancellable(log, args, t); // start repeated execution
 *
 * setTimeout(cancel, cancelTimeMs); // stop execution after 190ms
 *
 * setTimeout(() => {
 *     console.log(result);
 *     // [
 *     //   {"time":0,"returned":8},
 *     //   {"time":35,"returned":8},
 *     //   {"time":70,"returned":8},
 *     //   {"time":105,"returned":8},
 *     //   {"time":140,"returned":8},
 *     //   {"time":175,"returned":8}
 *     // ]
 * }, cancelTimeMs + t + 15);
 */
