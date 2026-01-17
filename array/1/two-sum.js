/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  //using js array methods
  // for (let i = 0; i < nums.length; i++) {
  //     let requiredNumber = target - nums[i]
  //     let requiredNumberIndex = nums.indexOf(requiredNumber)

  //     if (i !== requiredNumberIndex && requiredNumberIndex !== -1) return [i, requiredNumberIndex]

  // }

  //Brute force

  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    for (let j = i + 1; j < numsLength; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  //Optimised approach
};
