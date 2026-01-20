/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  //Brute force
  // let firstIndex = -1, lastIndex = -1;

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === target) {
  //         if (firstIndex === -1 )  firstIndex = i;
  //         lastIndex = i;

  //     }
  // }

  // return [firstIndex, lastIndex];

  //Binary search approach
  let numsLength = nums.length;

  function firstPosition(nums, target) {
    let low = 0,
      high = numsLength - 1;
    let firstIndex = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        firstIndex = mid;
        high = mid - 1;
      } else if (nums[mid] > target) high = mid - 1;
      else low = mid + 1;
    }

    return firstIndex;
  }

  function lastPosition(nums, target) {
    let low = 0,
      high = numsLength - 1;
    let lastIndex = -1;

    while (low <= high) {
      let mid = Math.floor((low + high) / 2);

      if (nums[mid] === target) {
        lastIndex = mid;
        low = mid + 1;
      } else if (nums[mid] < target) low = mid + 1;
      else high = mid - 1;
    }

    return lastIndex;
  }

  let firstOccurence = firstPosition(nums, target);
  let lastOccurence = lastPosition(nums, target);

  return [firstOccurence, lastOccurence];
};
