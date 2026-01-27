/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let paranthesisString = "";

  let level = 0;

  for (let char of s) {
    if (char === "(") {
      if (level > 0) paranthesisString += char;
      level++;
    }

    if (char === ")") {
      level--;

      if (level > 0) paranthesisString += char;
    }
  }

  return paranthesisString;
};
