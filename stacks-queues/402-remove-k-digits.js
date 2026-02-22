/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let numLength = num.length;

  if (k === numLength) return "0";

  let stack = [];

  for (let i = 0; i < numLength; i++) {
    while (stack.length && k > 0 && stack[stack.length - 1] > num[i]) {
      stack.pop();
      k--;
    }

    stack.push(num[i]);
  }

  while (stack.length > 0 && k > 0) {
    stack.pop();
    k--;
  }

  let result = "";

  while (stack.length > 0) {
    result += stack.pop();
  }

  result = result.replace(/0+$/, "");

  result = result.split("").reverse().join("");

  if (result.length === 0) result = "0";

  return result;
};
