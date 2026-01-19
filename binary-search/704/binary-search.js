/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  //Iterative appraoch
  // let low = 0, high = nums.length - 1;

  // while (low <= high) {
  //     let mid = Math.floor((low + high) / 2)

  //     if (nums[mid] === target) return mid;
  //     else if (nums[mid] < target) low = mid + 1;
  //     else high = mid - 1;
  // }

  // return -1;

  //Recursive approach

  let low = 0,
    high = nums.length - 1;
  function recursiveSearch(arr, low, high, target) {
    if (high < low) return -1;

    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return mid;
    else if (target > arr[mid])
      return recursiveSearch(arr, mid + 1, high, target);
    return recursiveSearch(arr, low, mid - 1, target);
  }

  return recursiveSearch(nums, low, high, target);
};
