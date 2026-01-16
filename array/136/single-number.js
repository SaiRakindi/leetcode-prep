/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //Brute Force
  // let numsLength = nums.length;

  // for (let i = 0; i < numsLength; i++) {
  //     let num = nums[i]
  //     let count = 0;

  //     for (let j = 0; j < numsLength; j++) {
  //         if (nums[j] === num) {
  //             count++;
  //         }
  //     }

  //     if (count === 1) return num

  // }

  //Better Approach
  let numsLength = nums.length;
  let maxElement = Math.max(...nums);

  let hashArray = Array(maxElement + 1).fill(0);

  for (let i = 0; i < numsLength; i++) {
    hashArray[nums[i]]++;
  }

  for (let i = 0; i < numsLength; i++) {
    if (hashArray[nums[i]] === 1) {
      return nums[i];
    }
  }

  return -1;
};
