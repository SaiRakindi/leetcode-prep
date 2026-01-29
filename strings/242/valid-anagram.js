/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // var getSplittedString(word) {
  //     return word.split("").sort().join("")
  // }

  // return getSplittedString(s) === getSplittedString(t)

  let sLength = s.length,
    tLength = t.length;

  if (sLength !== tLength) return false;

  let sortedString1 = s.split("").sort().join("");
  let sortedString2 = t.split("").sort().join("");

  if (sortedString1 === sortedString2) return true;

  return false;
};
