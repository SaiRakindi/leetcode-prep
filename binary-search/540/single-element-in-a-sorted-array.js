/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  //Brute force approach
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    //We check if the previous element or the next element to be same.
    //If the elements are not same, that is non duplicate element.
    if (i === 0) {
      if (nums[i] !== nums[i + 1]) return nums[i];
    } else if (i === numsLength - 1) {
      if (nums[i - 1] !== nums[i]) return nums[i];
    } else {
      if (nums[i - 1] !== nums[i] && nums[i] !== nums[i + 1]) return nums[i];
    }
  }
};
