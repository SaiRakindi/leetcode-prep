/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  //Brute force approach
  //Time Complexity = O(2N)
  //Space Complexity = O(N)
  // let tempArray = [];

  // for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] !== 0) tempArray.push(nums[i])
  // }

  // for (let i = 0; i < tempArray.length; i++) {
  //     nums[i] = tempArray[i];
  // }

  // for (let i = tempArray.length; i < nums.length; i++) {
  //     nums[i] = 0;
  // }

  //Optimial Approach
  //Check for the first zero using j. If found, start swapping non-zero elements with the zero at j and increment j.
  //Time Complexity = O(N)
  //Space Complexity = O(1)

  let j = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      j = i;
      break;
    }
  }

  if (j === -1) return;

  for (let i = j + 1; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      j++;
    }
  }
};
