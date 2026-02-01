/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let romanChars = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (romanChars[s[i]] < romanChars[s[i + 1]]) sum -= romanChars[s[i]];
    else sum += romanChars[s[i]];
  }

  return sum + romanChars[s[s.length - 1]];
};
