/**
 * Problem: Return Length of Arguments Passed
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Write a function argumentsLength that returns the count of arguments passed to it.
 */

/* -------------------------
   Solution — Using rest parameters
-------------------------- */
/**
 * @param {...(null|boolean|number|string|Array|Object)} args - Any number of arguments
 * @return {number} - Returns the count of arguments passed
 */
var argumentsLength = function(...args) {
    // Rest parameter 'args' collects all arguments into an array
    // Return the length of this array
    return args.length;
};
