/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let currentSum = 0;
  let maxSubArray = Number.NEGATIVE_INFINITY;

  for (let num of nums) {
    currentSum += num;

    maxSubArray = Math.max(currentSum, maxSubArray);

    if (currentSum < 0) {
      currentSum = 0;
    }
  }

  return maxSubArray;
};
