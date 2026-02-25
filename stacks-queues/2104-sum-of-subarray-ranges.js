/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  //Brute force approach
  let numsLength = nums.length;

  let sum = 0;

  for (let i = 0; i < numsLength; i++) {
    let largest = nums[i],
      smallest = nums[i];

    for (let j = i; j < numsLength; j++) {
      largest = Math.max(largest, nums[j]);
      smallest = Math.min(smallest, nums[j]);

      sum += largest - smallest;
    }
  }

  return sum;
};
