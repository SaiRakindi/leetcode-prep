/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let numsLength = nums.length;
  let low = 0,
    high = numsLength - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] === target) return mid;

    //Check if left sorted
    if (nums[low] <= nums[mid]) {
      if (nums[low] <= target && target <= nums[mid]) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }

    //Check if right sorted
    if (nums[high] >= nums[mid]) {
      if (nums[high] >= target && target >= nums[mid]) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }

  return -1;
};
