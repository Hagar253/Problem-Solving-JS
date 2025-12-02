/**
 * Problem: Credit Card Mask
 * Platform: Codewars
 * Description:
 *   Mask all characters except the last 4.
 *   Example: "4556364607935616" → "############5616"
 */

/* -------------------------
   Solution 1 — Basic if/else
-------------------------- */
function maskifyBasic(cc) {
  return cc.length > 4
    ? "#".repeat(cc.length - 4) + cc.slice(-4)
    : cc;
}


/* -------------------------
   Solution 2 — Ternary Operator
-------------------------- */
const maskifyTernary = (cc) =>
  cc.length <= 4
    ? cc
    : "#".repeat(cc.length - 4) + cc.slice(-4);


/* -------------------------
   Solution 3 — Math.max shorter version
-------------------------- */
const maskifyMath = (cc) =>
  "#".repeat(Math.max(0, cc.length - 4)) + cc.slice(-4);


/* -------------------------
   Test cases (optional)
-------------------------- */
console.log(maskifyBasic("123456789"));  // #####6789
console.log(maskifyTernary("123456789")); // #####6789
console.log(maskifyMath("123456789"));    // #####6789
console.log(maskifyMath("abc"));          // abc
