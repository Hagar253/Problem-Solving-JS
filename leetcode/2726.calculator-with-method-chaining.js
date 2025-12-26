/**
 * Problem: Calculator with Method Chaining
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Design a Calculator class that supports basic arithmetic operations.
 * Each operation should return the Calculator instance to allow method chaining.
 */

/* -------------------------
   Solution — Method chaining with class
-------------------------- */
class Calculator {
    
    /** 
     * Initialize the calculator with a starting value
     * @param {number} value
     */
    constructor(value) {
        this.result = value;
    }
    
    /** 
     * Add a value to the current result
     * @param {number} value
     * @return {Calculator}
     */
    add(value) {
        this.result += value;
        return this; // enable chaining
    }
    
    /** 
     * Subtract a value from the current result
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value) {
        this.result -= value;
        return this; // enable chaining
    }
    
    /** 
     * Multiply the current result by a value
     * @param {number} value
     * @return {Calculator}
     */
    multiply(value) {
        this.result *= value;
        return this; // enable chaining
    }
    
    /** 
     * Divide the current result by a value
     * Throws error if dividing by zero
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if (value === 0) {
            throw new Error("Division by zero is not allowed");
        }
        this.result /= value;
        return this; // enable chaining
    }
    
    /** 
     * Raise the current result to the power of value
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        this.result = Math.pow(this.result, value);
        return this; // enable chaining
    }
    
    /** 
     * Get the final calculated result
     * @return {number}
     */
    getResult() {
        return this.result;
    }
}

/**
 * Example:
 * const calc = new Calculator(10);
 * calc.add(5).multiply(2).subtract(4).power(2).getResult(); // 576
 */
