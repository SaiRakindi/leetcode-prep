/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
  //Using recursion
  function isValid(str, index, count) {
    if (count < 0) return false;

    if (index === s.length) return count === 0;

    const currentChar = s[index];

    if (currentChar === "(") return isValid(str, index + 1, count + 1);
    else if (currentChar === ")") return isValid(str, index + 1, count - 1);
    else {
      return (
        isValid(str, index + 1, count + 1) ||
        isValid(str, index + 1, count - 1) ||
        isValid(str, index + 1, count)
      );
    }
  }

  return isValid(s, 0, 0);
};
