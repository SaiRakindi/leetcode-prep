/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
  let counter = 0,
    maxDepth = 0;

  for (let char of s) {
    if (char === "(") {
      counter++;
      maxDepth = Math.max(maxDepth, counter);
    } else if (char === ")") {
      counter--;
    }
  }

  return maxDepth;
};
