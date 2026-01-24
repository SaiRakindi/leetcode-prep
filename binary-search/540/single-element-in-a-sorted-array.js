/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
  //Brute force approach
  // let numsLength = nums.length;
  // for (let i = 0; i < numsLength; i++) {
  //     //We check if the previous element or the next element to be same.
  //     //If the elements are not same, that is non duplicate element.
  //     if (i === 0) {
  //         if (nums[i] !== nums [i + 1]) return nums[i];
  //     }

  //     else if (i === numsLength - 1) {
  //         if (nums[i - 1] !== nums[i]) return nums[i];
  //     }
  //     else {
  //         if (nums[i - 1] !== nums[i] && nums[i] !== nums[i + 1]) return nums[i];
  //     }
  // }

  //Optimized approach using binary search;
  let numsLength = nums.length;

  if (numsLength === 1) return nums[0];

  if (nums[0] !== nums[1]) return nums[0];

  if (nums[numsLength - 1] !== nums[numsLength - 2])
    return nums[numsLength - 1];

  let low = 1;
  high = numsLength - 2;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1])
      return nums[mid];

    //We are on the left half
    if (
      (mid % 2 === 1 && nums[mid] === nums[mid - 1]) ||
      (mid % 2 === 0 && nums[mid] === nums[mid + 1])
    ) {
      low = mid + 1;
    }

    //We are on the right half
    else high = mid - 1;
  }
};
