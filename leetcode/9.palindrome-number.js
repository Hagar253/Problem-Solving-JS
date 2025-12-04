/**
 * Problem: Palindrome Number
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Determine whether an integer is a palindrome. An integer is a palindrome
 * when it reads the same backward as forward.
 * Negative numbers are not considered palindromes.
 */

/* -------------------------
   Solution 1 — Using string reversal
-------------------------- */
/**
 * @param {number} x - The integer to check
 * @return {boolean} - Returns true if x is a palindrome, false otherwise
 */
var isPalindromeString = function(x) {
    // Convert number to string, reverse it, and convert back to integer
    let reversed = parseInt(x.toString().split('').reverse().join(''));

    // Compare with original number
    if (x === reversed) {
        return true;
    } else {
        return false;
    }
};


