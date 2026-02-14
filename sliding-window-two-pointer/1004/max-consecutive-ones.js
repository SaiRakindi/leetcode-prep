/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  //Brute force - TC : O(N^2), SC : O(1)
  // let numsLength = nums.length, longestOnesLength = 0;

  // for (let i = 0; i < numsLength; i++) {
  //     let zeroesCount = 0;

  //     for (let j = i; j < numsLength; j++) {
  //         if (nums[j] === 0) zeroesCount++;

  //         if (zeroesCount <= k) {
  //             let currentLongestLength = j - i + 1;
  //             longestOnesLength = Math.max(longestOnesLength, currentLongestLength);
  //         }
  //         else break;
  //     }
  // }

  // return longestOnesLength;

  //Better approach; - TC : O(2N), SC: O(1)
  // let left = 0, right = 0, longestOnesLength = 0, numsLength = nums.length, zeroesCount = 0;

  // while (right < numsLength) {

  //     if (nums[right] === 0) zeroesCount++;

  //     while (zeroesCount > k) {
  //         if (nums[left] === 0) {
  //             zeroesCount--;
  //         }
  //         left++;
  //     }

  //     if (zeroesCount <= k) {
  //        let currentLongestLength = right - left + 1;
  //        longestOnesLength = Math.max(longestOnesLength, currentLongestLength);
  //     }

  //     right++;
  // }

  // return longestOnesLength;

  //Optimal solution - TC: O(N), SC: O(1)
  let left = 0,
    right = 0,
    longestOnesLength = 0,
    numsLength = nums.length;
  zeroesCount = 0;

  while (right < numsLength) {
    if (nums[right] === 0) zeroesCount++;

    if (zeroesCount > k) {
      if (nums[left] === 0) {
        zeroesCount--;
      }

      left++;
    }

    if (zeroesCount <= k) {
      let currentLongestLength = right - left + 1;
      longestOnesLength = Math.max(longestOnesLength, currentLongestLength);
    }

    right++;
  }

  return longestOnesLength;
};
