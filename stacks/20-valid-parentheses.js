/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //Approach 1
  // let parenthesesArray = [];

  // for (let char of s) {
  //     if (char === "(" || char === "[" || char === "{") parenthesesArray.push(char);
  //     else {
  //         if (parenthesesArray.length === 0) return false;
  //         else {
  //             let lastParentheses = parenthesesArray.pop();

  //             if ((char === ")" && lastParentheses === "(") ||
  //                 (char === "]" && lastParentheses === "[") ||
  //                 (char === "}" && lastParentheses === "{")) {
  //                 continue;
  //             }
  //             else return false;
  //         }
  //     }
  // }

  // return parenthesesArray.length === 0;

  //Approach 2
  let parenthesesArray = [];

  for (let char of s) {
    if (char === "(") parenthesesArray.push(")");
    else if (char === "{") parenthesesArray.push("}");
    else if (char === "[") parenthesesArray.push("]");
    else {
      let lastBracket = parenthesesArray.pop();
      if (lastBracket !== char) return false;
    }
  }

  return parenthesesArray.length === 0;
};
