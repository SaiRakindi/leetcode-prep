/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function (nums, k) {
  //Approach 1 - Finding all the subarrays <=k and then substracting the subarrays which are < k;
  // function getCount(nums, k) {
  //     if (k < 0) return 0;

  //     let left = 0;
  //     let right = 0;

  //     let sum = 0;
  //     let count = 0;

  //     let numsLength = nums.length;

  //     while (right < numsLength) {
  //         sum += nums[right] % 2;

  //         while (sum > k) {
  //             sum -= nums[left] % 2;
  //             left++;
  //         }

  //         count += right - left + 1;

  //         right++
  //     }

  //     return count;
  // }

  // return getCount(nums, k) - getCount(nums, k - 1);

  //Approach 2;

  let left = 0;

  let currentCount = 0;
  let niceSubArraysCount = 0;

  let oddsNeeded = k;

  for (let right = 0; right < nums.length; right++) {
    if (nums[right] % 2 === 1) {
      oddsNeeded--;
      currentCount = 0;
    }

    while (oddsNeeded === 0) {
      currentCount++;

      if (nums[left] % 2 === 1) oddsNeeded++;

      left++;
    }

    niceSubArraysCount += currentCount;
  }

  return niceSubArraysCount;
};
