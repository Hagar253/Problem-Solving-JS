/**
 * Problem: Multiples of 3 or 5
 * Platform: Codewars
 * Description:
 * Return the sum of all multiples of 3 or 5 below the given number.
 * Return 0 for negative numbers.
 */

/* -------------------------
   Solution 1 — Using array + reduce
-------------------------- */
function multiplesArrayReduce(number) {
  if (number <= 0) return 0;

  const numbersBelow = [];
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numbersBelow.push(i);
    }
  }

  return numbersBelow.reduce((total, num) => total + num, 0);
}

/* -------------------------
   Solution 2 — Using sum variable + loop
-------------------------- */
function multiplesLoopSum(number) {
  if (number <= 0) return 0;

  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/* -------------------------
   Solution 3 — Using ternary + array methods
-------------------------- */
const multiplesTernaryArray = (n) =>
  n <= 0
    ? 0
    : [...Array(n).keys()]
        .filter((i) => i % 3 === 0 || i % 5 === 0)
        .reduce((sum, num) => sum + num, 0);

/* -------------------------
   Solution 4 — Original verbose version
-------------------------- */
function multiplesOriginal(number) {
  var numbersbelow = [];
  var sum = 0;
  if (number <= 0) {
    return 0;
  } else {
    for (var i = 1; i < number; i++) {
      if (i % 3 == 0 || i % 5 == 0) {
        numbersbelow.push(i);
      }
    }
    sum = numbersbelow.reduce((total, num) => total + num, 0);
  }
  return sum;
}

/* -------------------------
   Test cases (optional)
-------------------------- */
console.log(multiplesArrayReduce(10)); // 23
console.log(multiplesLoopSum(10)); // 23
console.log(multiplesTernaryArray(10)); // 23
console.log(multiplesOriginal(10)); // 23
