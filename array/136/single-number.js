/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  //Brute Force
  let numsLength = nums.length;

  for (let i = 0; i < numsLength; i++) {
    let num = nums[i];
    let count = 0;

    for (let j = 0; j < numsLength; j++) {
      if (nums[j] === num) {
        count++;
      }
    }

    if (count === 1) return num;
  }
};
