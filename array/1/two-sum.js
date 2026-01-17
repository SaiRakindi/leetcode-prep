/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // for (let i = 0; i < nums.length; i++) {
  //     let requiredNumber = target - nums[i]
  //     let requiredNumberIndex = nums.indexOf(requiredNumber)

  //     if (i !== requiredNumberIndex && requiredNumberIndex !== -1) return [i, requiredNumberIndex]

  // }

  //Brute force
  // let numsLength = nums.length;
  // for (let i = 0; i < numsLength; i++) {
  //     for (let j = i + 1; j < numsLength; j++) {
  //         if (nums[i] + nums[j] === target) {
  //             return [i,j]
  //         }
  //     }
  // }

  //Optimized approach
  let numbersMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let remainingNumber = target - nums[i];

    if (numbersMap.has(remainingNumber)) {
      return [numbersMap.get(remainingNumber), i];
    }
    numbersMap.set(nums[i], i);
  }
};
