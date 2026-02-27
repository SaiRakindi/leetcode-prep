/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  // function findNSE(arr) {
  //     let arrLength = arr.length;

  //     let resultArray = new Array(arrLength).fill(0);

  //     let stack = [];

  //     for (let i = 0; i < arrLength; i++) {
  //         let currentElement = arr[i];

  //         if (stack.length > 0 && arr[stack[stack.length - 1]] > currentElement) {
  //             stack.pop();
  //         }

  //         resultArray[i] = stack.length ? arr[i] : 0;

  //         stack.push(i);
  //     }

  //     return resultArray;
  // }

  // function findPSE(arr) {
  //     let arrLength = arr.length;

  //     let resultArray = new Array(arrLength).fill(0);

  //     let stack = [];

  //     for (let i = 0; i < arrLength; i++) {
  //         let currentElement = arr[i];

  //         if (stack.length > 0 && arr[stack[stack.length - 1]] > currentElement) {
  //             stack.pop();
  //         }

  //         resultArray[i] = stack.length ? arr[i] : 0;

  //         stack.push(i);
  //     }

  //     resutrn resultArray;
  // }

  // let nse = findNSE(heights);
  // let pse = findPSE(heights);
  // let maximum = heights[0];

  // for (let i = 0; i < arr.length; i++) {
  //     maximum = Math.max(maximum, arr[i] * (nse[i] - pse[i] - 1)
  // }

  // return maximum;

  //Brute force approach
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    let minHeight = Infinity;

    for (let j = i; j < heights.length; j++) {
      minHeight = Math.min(minHeight, heights[j]);

      let area = minHeight * (j - i + 1);

      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
