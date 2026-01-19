/**
 * @param {number[]}
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  const numsLength = nums.length;
  let low = 0,
    high = numsLength - 1;
  let index = numsLength;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] >= target) {
      index = mid;
      high = mid - 1;
    } else low = mid + 1;
  }

  return index;
};
