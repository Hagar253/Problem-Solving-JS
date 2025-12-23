/**
 * Problem: Array Prototype Last
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Enhance all arrays by adding a method `last()` to `Array.prototype`.
 * The method should return the last element of the array.
 * If the array is empty, it should return -1.
 *
 * You may assume the array is the output of JSON.parse.
 */

/* -------------------------
   Solution — Extend Array.prototype
-------------------------- */
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    // If array has elements, return the last one
    if (this.length > 0) {
        return this[this.length - 1];
    }
    // If array is empty, return -1
    return -1;
};

/**
 * Example:
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 *
 * const emptyArr = [];
 * emptyArr.last(); // -1
 */
