/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let parenthesesArray = [];

  for (let char of s) {
    if (char === "(" || char === "[" || char === "{")
      parenthesesArray.push(char);
    else {
      if (parenthesesArray.length === 0) return false;
      else {
        let lastParentheses = parenthesesArray.pop();

        if (
          (char === ")" && lastParentheses === "(") ||
          (char === "]" && lastParentheses === "[") ||
          (char === "}" && lastParentheses === "{")
        ) {
          continue;
        } else return false;
      }
    }
  }

  return parenthesesArray.length === 0;
};
