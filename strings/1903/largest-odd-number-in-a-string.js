/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
  let lastIndex = -1;

  let index;

  for (index = num.length - 1; index >= 0; index--) {
    if (num[index] % 2 === 1) {
      lastIndex = index;
      break;
    }
  }

  index = 0;

  while (index <= lastIndex && num[index] === "0") {
    index++;
  }

  return num.substring(index, lastIndex + 1);
};
