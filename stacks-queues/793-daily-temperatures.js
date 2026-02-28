/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let temperaturesLength = temperatures.length;

  let stack = [];

  let temperaturesArray = new Array(temperaturesLength).fill(0);

  for (let i = 0; i < temperaturesLength; i++) {
    while (
      stack.length &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      temperaturesArray[index] = i - index;
    }

    stack.push(i);
  }

  return temperaturesArray;
};
