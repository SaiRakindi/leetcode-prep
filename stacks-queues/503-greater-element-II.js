/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  let numsLength = nums.length;

  let nextGreaterElements = new Array(numsLength).fill(-1);

  for (let i = 0; i < numsLength; i++) {
    let currentElement = nums[i];
    for (let j = 1; j < numsLength; j++) {
      let index = (j + i) % numsLength;

      if (nums[index] > currentElement) {
        nextGreaterElements[i] = nums[index];
        break;
      }
    }
  }

  return nextGreaterElements;
};
