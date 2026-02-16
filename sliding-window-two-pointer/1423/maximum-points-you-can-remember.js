/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let maxSum = 0,
    leftSum = 0,
    rightSum = 0;

  for (let i = 0; i < k; i++) {
    leftSum += cardPoints[i];
  }

  maxSum = leftSum;

  let rightIndex = cardPoints.length - 1;

  for (let i = k - 1; i >= 0; i--) {
    leftSum = leftSum - cardPoints[i];
    rightSum += cardPoints[rightIndex];
    rightIndex--;

    maxSum = Math.max(maxSum, leftSum + rightSum);
  }

  return maxSum;
};
