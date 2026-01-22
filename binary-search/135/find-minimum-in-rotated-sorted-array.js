/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  //Brute force approach
  let min = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < min) min = nums[i];
  }

  return min;
};
