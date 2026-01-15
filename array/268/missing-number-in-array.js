/*
268. Missing Number

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  //brute force
  // for (let i = 1; i <= nums.length; i++) {
  //     let isFound = false;
  //     for(let j = 0; j <= nums.length; j++) {
  //         if (nums[j] === i) {
  //             isFound = true;
  //             break;
  //         }
  //     }

  //     if (!isFound) return i;

  // }

  // return 0;

  //Optimzed approach
  let arrayLength = nums.length;
  const nNaturalNumbersSum = (arrayLength * (arrayLength + 1)) / 2;

  const sumOfNumbers = nums.reduce((acc, currentValue) => {
    acc += currentValue;
    return acc;
  }, 0);

  return nNaturalNumbersSum - sumOfNumbers;
};
