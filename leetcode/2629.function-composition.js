/**
 * Problem: Function Composition
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given an array of functions [f1, f2, f3, ..., fn], 
 * return a new function fn that is the function composition of the array of functions.
 */

/* -------------------------
   Solution 1 — Manual reverse iteration
-------------------------- */
/**
 * @param {Function[]} functions - An array of functions
 * @return {Function} - A function representing the composition
 */
var compose = function(functions) {
    
    return function(x) {
        for (let i = functions.length - 1; i >= 0; i--) {
            x = functions[i](x);
        }
        return x;
    };
};

/* -------------------------
   Solution 2 — Using reduce (functional style)
-------------------------- */
/**
 * @param {Function[]} functions - An array of functions
 * @return {Function} - A function representing the composition
 */
var composeReduce = function(functions) {
    
    // Use reduceRight to apply functions from last to first
    return function(x) {
        return functions.reduceRight((acc, fn) => fn(acc), x); // Apply each function to the accumulated value
    };
};

/**
 * Example:
 * const fn = compose([x => x + 1, x => 2 * x]);
 * fn(4); // 9
 * 
 * const fn2 = composeReduce([x => x + 1, x => 2 * x]);
 * fn2(4); // 9
 */
