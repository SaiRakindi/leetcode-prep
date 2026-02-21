/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
  //Brute force approach
  // let numsLength = nums.length;

  // let nextGreaterElements = new Array(numsLength).fill(-1);

  // for (let i = 0; i < numsLength; i++) {
  //     let currentElement = nums[i]
  //     for (let j = 1; j < numsLength; j++) {
  //         let index = (j + i) % numsLength;

  //         if (nums[index] > currentElement) {
  //             nextGreaterElements[i] = nums[index];
  //             break;
  //         }
  //     }
  // }

  // return nextGreaterElements;

  //Optimal approach
  let numsLength = nums.length;

  let nextGreaterElements = new Array(numsLength).fill(-1);

  let stack = [];

  for (let i = 2 * numsLength - 1; i >= 0; i--) {
    let currentIndex = i % numsLength;

    let currentElement = nums[currentIndex];

    while (stack.length && stack[stack.length - 1] <= currentElement) {
      stack.pop();
    }

    if (i < numsLength)
      nextGreaterElements[i] = stack.length > 0 ? stack[stack.length - 1] : -1;

    stack.push(currentElement);
  }

  return nextGreaterElements;
};
