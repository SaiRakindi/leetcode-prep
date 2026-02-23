/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  //Brute force
  // let heightLength = height.length;
  // let totalWater = 0;

  // function prefixMax() {
  //     let currentMax = height[0];

  //     for (let i = 1; i < heightLength; i++) {
  //         currentMax = Math.max(currentMax, height[i])
  //     }

  //     return currentMax;
  // }

  // function suffixMax() {
  //     let currentMax = height[heightLength - 1];

  //     for (let i = heightLength - 2; i >= 0; i--) {
  //         currentMax = Math.max(currentMax, height[i]);
  //     }

  //     return currentMax;
  // }

  // for (let i = 0; i < heightLength - 1; i++) {
  //     let maxLeft = 0;
  //     let maxRight = 0;

  //     for (let j = 0; j <= i; j++) {
  //         if (height[j] > maxLeft) maxLeft = height[j]
  //     }

  //     for (let k = i; k < heightLength; k++) {
  //         if (height[k] > maxRight) maxRight = height[k]
  //     }

  //     totalWater += Math.min(maxLeft, maxRight) - height[i]
  // }

  // return totalWater;

  //Optimal approach

  let leftMax = 0,
    rightMax = 0,
    totalWater = 0;

  let heightLength = height.length;

  let left = 0,
    right = heightLength - 1;

  for (let i = 0; i < heightLength; i++) {
    if (height[left] <= height[right]) {
      if (leftMax > height[left]) totalWater += leftMax - height[left];
      else leftMax = height[left];

      left++;
    } else {
      if (rightMax > height[right]) totalWater += rightMax - height[right];
      else rightMax = height[right];

      right--;
    }
  }

  return totalWater;
};
