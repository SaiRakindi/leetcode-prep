/*
268. Missing Number

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  for (let i = 1; i <= nums.length; i++) {
    let isFound = false;
    for (let j = 0; j <= nums.length; j++) {
      if (nums[j] === i) {
        isFound = true;
        break;
      }
    }

    if (!isFound) return i;
  }

  return 0;
};
