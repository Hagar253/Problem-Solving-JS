/**
 * Problem: Vowel Count
 * Platform: Codewars
 * Description:
 * Count the number of vowels (a, e, i, o, u) in a string.
 */

/* -------------------------
   Solution 1 — Classic if/else
-------------------------- */
function getCountClassic(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

/* -------------------------
   Solution 2 — Using includes
-------------------------- */
function getCountIncludes(str) {
  let count = 0;
  const vowels = "aeiou";
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

/* -------------------------
   Solution 3 — Using regex
-------------------------- */
const getCountRegex = (str) => (str.match(/[aeiou]/g) || []).length;

/* -------------------------
   Test cases (optional)
-------------------------- */
console.log(getCountClassic("abracadabra")); // 5
console.log(getCountIncludes("abracadabra")); // 5
console.log(getCountRegex("abracadabra")); // 5
