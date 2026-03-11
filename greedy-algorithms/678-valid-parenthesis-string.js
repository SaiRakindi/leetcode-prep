/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  //Brute force approach - Using recursion
  // function isValid(str, index, count) {
  //     if (count < 0) return false;

  //     if (index === s.length) return count === 0;

  //     const currentChar = s[index];

  //     if (currentChar === "(") return isValid(str, index + 1, count + 1)
  //     else if (currentChar === ")") return isValid(str, index + 1, count - 1);
  //     else {
  //         return isValid(str, index + 1, count + 1) || isValid(str, index + 1, count - 1) || isValid(str, index + 1, count)
  //     }
  // }

  // return isValid(s, 0, 0)

  //Optimal solution
  let minimum = 0,
    maximum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      minimum += 1;
      maximum += 1;
    } else if (s[i] === ")") {
      minimum -= 1;
      maximum -= 1;
    } else {
      minimum -= 1;
      maximum += 1;
    }

    if (minimum < 0) minimum = 0;

    if (maximum < 0) return false;
  }

  return minimum === 0;
};
