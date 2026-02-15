/**
 * @param {number[]} nums
 * @param {number} goal
 * @return {number}
 */
var numSubarraysWithSum = function (nums, goal) {
  //Brute force - TC: O(N ^ 2), SC: O(1)
  // let count = 0;

  // for (let i = 0; i < nums.length; i++) {
  //     let sum = 0;
  //     for (let j = i; j < nums.length; j++) {
  //         sum += nums[j];

  //         if (sum === goal) count++;
  //     }
  // }

  // return count;

  //Optimal solution - Two pointer approach;

  function getCount(nums, goal) {
    if (goal < 0) return 0;

    let left = 0,
      right = 0,
      sum = 0,
      count = 0;

    while (right < nums.length) {
      sum += nums[right];

      while (sum > goal) {
        sum -= nums[left];
        left++;
      }

      count += right - left + 1;

      right++;
    }

    return count;
  }

  return getCount(nums, goal) - getCount(nums, goal - 1);
};
