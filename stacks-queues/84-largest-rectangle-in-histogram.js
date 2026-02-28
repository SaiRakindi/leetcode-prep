/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  //Brute force approach
  // let maxArea = 0;

  // for (let i = 0; i < heights.length; i++) {
  //     let minHeight = Infinity;

  //     for (let j = i; j < heights.length; j++) {
  //         minHeight = Math.min(minHeight, heights[j])

  //         let area = minHeight * (j - i + 1);

  //         maxArea = Math.max(maxArea, area);
  //     }
  // }

  // return maxArea;

  //Optimsed approach 1;
  const heightsLength = heights.length;

  const leftSmallArray = new Array(heightsLength);
  const rightSmallArray = new Array(heightsLength);

  const stack = [];

  // Compute NSL (Nearest Smaller to Left)
  for (let i = 0; i < heightsLength; i++) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    leftSmallArray[i] = stack.length === 0 ? 0 : stack[stack.length - 1] + 1;
    stack.push(i);
  }

  //Resetting to 0
  stack.length = 0;

  // Compute NSR (Nearest Smaller to Right)
  for (let i = heightsLength - 1; i >= 0; i--) {
    while (stack.length && heights[stack[stack.length - 1]] >= heights[i]) {
      stack.pop();
    }

    rightSmallArray[i] =
      stack.length === 0 ? heightsLength - 1 : stack[stack.length - 1] - 1;

    stack.push(i);
  }

  let maxArea = 0;

  for (let i = 0; i < heightsLength; i++) {
    let width = rightSmallArray[i] - leftSmallArray[i] + 1;
    maxArea = Math.max(maxArea, heights[i] * width);
  }

  return maxArea;
};
