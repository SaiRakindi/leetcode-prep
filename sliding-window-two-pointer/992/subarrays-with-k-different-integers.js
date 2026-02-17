/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysWithKDistinct = function (nums, k) {
  //Brute force - 45/57 passed
  // let count = 0, numsLength = nums.length;

  // for (let i = 0; i < numsLength; i++) {
  //     let numsMap = new Map();

  //     for (let j = i; j < numsLength; j++) {
  //         numsMap.set(nums[j], (numsMap.get(nums[j]) || 0) + 1)

  //         if (numsMap.size === k) count++;

  //         if (numsMap.size > k) break;
  //     }
  // }

  // return count

  //Optimal solution - using two pointers and sliding window

  function getCount(nums, k) {
    let left = 0;
    let right = 0;

    let count = 0;
    const numsLength = nums.length;

    const charMap = new Map();

    while (right < numsLength) {
      charMap.set(nums[right], (charMap.get(nums[right]) || 0) + 1);

      while (charMap.size > k) {
        charMap.set(nums[left], charMap.get(nums[left]) - 1);

        if (charMap.get(nums[left]) === 0) charMap.delete(nums[left]);
        left++;
      }

      count += right - left + 1;
      right++;
    }

    return count;
  }

  return getCount(nums, k) - getCount(nums, k - 1);
};
