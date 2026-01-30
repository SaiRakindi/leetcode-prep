/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  // Approach 1
  const charFrequency = new Map();
  let result = "";

  for (const char of s) {
    charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
  }

  const charFrequencyArray = Array.from(charFrequency.entries());
  charFrequencyArray.sort((a, b) => b[1] - a[1]);

  for (let [char, count] of charFrequencyArray) {
    result += char.repeat(count);
  }

  return result;
};
