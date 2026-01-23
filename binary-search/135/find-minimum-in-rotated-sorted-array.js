/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  //Brute force approach
  // let min = nums[0];

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] < min) min = nums[i];
  // }

  // return min;

  // Optimal approach using binary search
  let low = 0,
    high = nums.length - 1,
    minimum = Number.POSITIVE_INFINITY;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[low] <= nums[mid]) {
      minimum = Math.min(minimum, nums[low]);
      low = mid + 1;
    } else {
      high = mid - 1;
      minimum = Math.min(minimum, nums[mid]);
    }
  }

  return minimum;

  //Optimal approach using binary search without minimum variable
  // let low = 0, high = nums.length - 1

  // while (low < high) {
  //     let mid = Math.floor((low + high) / 2);

  //     if (nums[mid] > nums[high]) low = mid + 1;
  //     else high = mid;

  // }

  // return nums[low];
};
