/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let uniqueElementSet = new Set();

  // for (let i = 0; i < nums.length; i++) {
  //     uniqueElementSet.add(nums[i]);
  // }

  // for (let i = 0; i < uniqueElementSet.size; i++) {
  //     nums[i] = uniqueElementSet[i]
  // }

  if (nums.length === 0) return 0;

  let k = 1; // pointer for unique elements

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};
