/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let heightLength = height.length;
  let totalWater = 0;

  for (let i = 0; i < heightLength - 1; i++) {
    let maxLeft = 0;
    let maxRight = 0;

    for (let j = 0; j <= i; j++) {
      if (height[j] > maxLeft) maxLeft = height[j];
    }

    for (let k = i; k < heightLength; k++) {
      if (height[k] > maxRight) maxRight = height[k];
    }

    totalWater += Math.min(maxLeft, maxRight) - height[i];
  }

  return totalWater;
};
