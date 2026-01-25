/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
  // let peakIndex = -1;

  // if (nums.length === 0) return 0;

  // for(let i = 0; i < nums.length; i++) {
  //     for(let j = i + 1; j < nums.length; j++) {
  //       nums[i] > nums[j] ? peakIndex = i : j;
  //     }
  // }

  // return peakIndex;

  // Brute force
  let numsLength = nums.length;
  for (let i = 0; i < numsLength; i++) {
    const left = i === 0 || nums[i] >= nums[i - 1];
    const right = i === numsLength - 1 || nums[i] >= nums[i + 1];

    if (left && right) return i;
  }

  return -1;
};
