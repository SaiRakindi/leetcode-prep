/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function (nums) {
  //Brute force approach - TC: O(N^2), SC: O(1)
  // let numsLength = nums.length;

  // let sum = 0;

  // for (let i = 0; i < numsLength; i++) {
  //     let largest = nums[i], smallest = nums[i];

  //     for (let j = i; j < numsLength; j++) {
  //         largest = Math.max(largest, nums[j]);
  //         smallest = Math.min(smallest, nums[j]);

  //         sum += largest - smallest;
  //     }
  // }

  // return sum;

  //Optimal approach - summation of largest - smallest

  function findNextSmallerElement(arr) {
    let arrLength = arr.length;

    let resultArray = new Array(arrLength).fill(0);

    let stack = [];

    for (let i = arrLength - 1; i >= 0; i--) {
      let currentElement = arr[i];

      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] >= currentElement
      ) {
        stack.pop();
      }

      resultArray[i] = stack.length > 0 ? stack[stack.length - 1] : arrLength;

      stack.push(i);
    }

    return resultArray;
  }

  function findNextGreaterElement(arr) {
    let arrLength = arr.length;

    const resultArray = new Array(arrLength).fill(0);

    const stack = [];

    for (let i = arrLength - 1; i >= 0; i--) {
      const currentElement = arr[i];

      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] <= currentElement
      ) {
        stack.pop();
      }

      resultArray[i] = stack.length > 0 ? stack[stack.length - 1] : arrLength;

      stack.push(i);
    }

    return resultArray;
  }

  function previousSmallerOrEqualElements(arr) {
    const arrLength = arr.length;

    const resultArray = new Array(arrLength).fill(0);

    const stack = [];

    for (let i = 0; i < arrLength; i++) {
      const currentElement = arr[i];

      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] > currentElement
      ) {
        stack.pop();
      }

      resultArray[i] = stack.length > 0 ? stack[stack.length - 1] : -1;

      stack.push(i);
    }

    return resultArray;
  }

  function previousGreaterOrEqualElements(arr) {
    let arrLength = arr.length;

    let resultArray = new Array(arrLength).fill(0);

    const stack = [];

    for (let i = 0; i < arrLength; i++) {
      const currentElement = arr[i];

      while (
        stack.length > 0 &&
        arr[stack[stack.length - 1]] < currentElement
      ) {
        stack.pop();
      }

      resultArray[i] = stack.length > 0 ? stack[stack.length - 1] : -1;

      stack.push(i);
    }

    return resultArray;
  }

  function sumSubArrayMins(arr) {
    const nse = findNextSmallerElement(arr);

    const psee = previousSmallerOrEqualElements(arr);

    const arrLength = arr.length;

    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
      const left = i - psee[i];

      const right = nse[i] - i;

      /* Count of subarrays where 
            current element is minimum */
      const count = left * right * 1;
      const value = count * arr[i] * 1;

      sum += value;
    }

    return sum;
  }

  function sumSubArrayMaxs(arr) {
    const nge = findNextGreaterElement(arr);
    const pgee = previousGreaterOrEqualElements(arr);

    const arrLength = arr.length;

    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
      const left = i - pgee[i];

      const right = nge[i] - i;

      const count = left * right * 1;

      const value = count * arr[i] * 1;

      sum += value;
    }

    return sum;
  }

  return sumSubArrayMaxs(nums) - sumSubArrayMins(nums);
};
