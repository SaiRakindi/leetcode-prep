/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //Brute force approach
  //Time Complexity = O(2N)
  //Space Complexity = O(N)
  let tempArray = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) tempArray.push(nums[i]);
  }

  for (let i = 0; i < tempArray.length; i++) {
    nums[i] = tempArray[i];
  }

  for (let i = tempArray.length; i < nums.length; i++) {
    nums[i] = 0;
  }
};
