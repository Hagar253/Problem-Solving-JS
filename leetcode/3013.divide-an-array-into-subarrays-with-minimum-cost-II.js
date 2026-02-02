/**
 * Problem: Divide an Array Into Subarrays With Minimum Cost II
 * Platform: LeetCode
 * Difficulty: Hard
 * Description:
 * Given an array of integers `nums` of length n, and two positive integers `k` and `dist`.
 * Divide `nums` into `k` disjoint contiguous subarrays such that:
 * 1. The cost of a subarray is the value of its first element.
 * 2. The difference between the starting index of the first and last subarray is <= dist.
 * Return the minimum possible sum of the costs of these subarrays.
 */

/* -------------------------
   Solution — Sliding Window + Heaps
-------------------------- */
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} dist
 * @return {number}
 */
var minimumCost = function(nums, k, dist) {
    const n = nums.length;
    const INF = Number.MAX_SAFE_INTEGER; // A very large number (~infinity) to initialize our minimum sum

    let sum = 0; // the sum of the current k-1 elements
    let minSum = INF;
    const used = new Set(); // store indices that are already considered in the sum

    // create max and min heaps
    // max heap to store the smallest k-1 elements
    // max heap gives us the largest number at the top so it will be easy to remove if not needed.
    const smallHeap = new MaxPriorityQueue({
        compare: (a, b) => b[0] - a[0]  // sort by value descending
    });

    // min heap to store the rest of the elements 
    // min heap gives us the smallest number at the top so it will be easy to remove if not needed.
    const largeHeap = new MinPriorityQueue({
        compare: (a, b) => a[0] - b[0]  // sort by value ascending
    });

    //// Slide the window and update elements ////
    for (let right = 1; right < n; right++) {
        // compute left border 
        const left = right - dist - 1; // the element that is now out of window

        // remove elements that are too far left
        if (left >= 1 && used.has(left)) {
            used.delete(left);
            sum -= nums[left];

            // remove any old indices from the "largeHeap"
            while (!largeHeap.isEmpty() && largeHeap.front()[1] <= left) {
                largeHeap.dequeue();
            }

            // Rebalance by moving the smallest element from largeHeap into smallHeap
            if (!largeHeap.isEmpty()) {
                const [value, index] = largeHeap.dequeue();
                smallHeap.enqueue([value, index]);
                used.add(index);
                sum += value;
            } 
        }

        // when sliding the window, insert the new element at index "right" into the correct heap
        if (used.size < k-1) {
            // if we still have fewer than k-1 elements, add it 
            smallHeap.enqueue([nums[right], right]);
            used.add(right);
            sum += nums[right];
        } else {
            // remove old indices from the top of "smallHeap"
            while (!smallHeap.isEmpty() && !used.has(smallHeap.front()[1])) {
                smallHeap.dequeue();
            }

            // compare with the largest element in "smallHeap" with the current number 
            if (!smallHeap.isEmpty() && nums[right] < smallHeap.front()[0]) {
                // swap: Put the current number in "smallHeap" & the other in "largeHeap"
                const [value, index] = smallHeap.dequeue();
                used.delete(index);
                largeHeap.enqueue([value, index]);
                sum -= value;

                smallHeap.enqueue([nums[right], right]);
                used.add(right);
                sum += nums[right];
            } else {
                // current number is larger than the largest number in the "smallHeap"
                // So just add it to the "largeHeap"
                largeHeap.enqueue([nums[right], right]);
            }
        }

        // After sliding and updating heaps, check if we can compute a valid sum
        if (used.size === k - 1) {
            // total cost = nums[0] + sum of k-1 smallest elements
            minSum = Math.min(minSum, sum);
        }
    }

    // finally add nums[0] because the first subarray always starts with nums[0]
    return nums[0] + minSum;
};

