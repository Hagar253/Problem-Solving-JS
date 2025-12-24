/**
 * Problem: Array Wrapper
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Create a class `ArrayWrapper` that wraps an array of numbers.
 * 
 * - When two ArrayWrapper objects are added together, return the sum of all values.
 * - When converted to a string, return the array in string format.
 */

/* -------------------------
   Constructor
-------------------------- */
/**
 * @param {number[]} nums - Array of numbers
 */
var ArrayWrapper = function(nums) {
    // Store the array inside the object
    this.nums = nums;
};

/* -------------------------
   valueOf() — handles addition
-------------------------- */
/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    // Sum all numbers in the array
    return this.nums.reduce((sum, number) => sum + number, 0);
};

/* -------------------------
   toString() — handles string conversion
-------------------------- */
/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    // Convert array to string format "[1,2,3]"
    return `[${this.nums.join(',')}]`;
};

/**
 * Example:
 * const obj1 = new ArrayWrapper([1, 2]);
 * const obj2 = new ArrayWrapper([3, 4]);
 *
 * obj1 + obj2;      // 10
 * String(obj1);     // "[1,2]"
 * String(obj2);     // "[3,4]"
 */
