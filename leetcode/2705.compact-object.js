/**
 * Problem: Compact Object
 * Platform: LeetCode
 * Difficulty: Medium
 * Description:
 * Given an object or array, return a compact version where all falsy values
 * (false, null, 0, "", undefined, NaN) are removed.
 * Nested objects and arrays should also be compacted recursively.
 */

/* -------------------------
   Solution — Recursive traversal
-------------------------- */
/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    // Create an empty array or object based on input type
    const compactObj = Array.isArray(obj) ? [] : {};

    // If input is an array
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            // Recursively compact if value is an object or array
            const compactedValue =
                typeof obj[i] === 'object' && obj[i] !== null
                    ? compactObject(obj[i])
                    : obj[i];

            // Only keep truthy values
            if (compactedValue) {
                compactObj.push(compactedValue);
            }
        }

    // If input is an object
    } else if (typeof obj === "object") {
        for (const [key, value] of Object.entries(obj)) {
            // Recursively compact nested objects or arrays
            const compactedValue =
                typeof value === 'object' && value !== null
                    ? compactObject(value)
                    : value;

            // Only assign truthy values
            if (compactedValue) {
                compactObj[key] = compactedValue;
            }
        }
    }

    return compactObj;
};
