/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let digitToCharMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  let result = [];

  function backtrackPhoneNumberCombinations(index, currentString) {
    if (currentString.length === digits.length) {
      result.push(currentString);
      return;
    }

    for (char of digitToCharMap[digits[index]]) {
      backtrackPhoneNumberCombinations(index + 1, currentString + char);
    }
  }

  backtrackPhoneNumberCombinations(0, "");

  return result;
};
