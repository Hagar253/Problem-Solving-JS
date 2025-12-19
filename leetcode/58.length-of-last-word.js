/**
 * Problem: Length of Last Word
 * Platform: LeetCode
 * Difficulty: Easy
 * Description:
 * Given a string `s` consisting of words and spaces, return the length
 * of the last word in the string.
 * A word is a maximal substring consisting of non-space characters only.
 */

/* -------------------------
   Solution — Traverse from the end
-------------------------- */
/**
 * @param {string} s - Input string
 * @return {number} - Length of the last word
 */
var lengthOfLastWord = function(s) {
    // Remove leading and trailing spaces
    s = s.trim();

    // Counter for the last word length
    let length = 0;

    // Traverse string from the end
    for (let i = s.length - 1; i >= 0; i--) {

        // Count characters until a space is found
        if (s[i] !== ' ') {
            length++;
        } 
        // Stop once the last word ends
        else if (length > 0) {
            break;
        }
    }

    return length;
};

/**
 * Example:
 * lengthOfLastWord("Hello World");      // 5
 * lengthOfLastWord("   fly me   to   "); // 2
 * lengthOfLastWord("luffy is still joyboy"); // 6
 */
