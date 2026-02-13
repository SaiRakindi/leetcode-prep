/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  //Brute force - TC: O(N^2), SC: O(256)
  // let sLength = s.length, maxLength = 0;

  // for (let i = 0; i < sLength; i++) {
  //     let charArray = new Array(256).fill(0);

  //     for (let j = i; j < sLength; j++) {
  //         if (charArray[s.charCodeAt(j)] === 1) break;

  //         charArray[s.charCodeAt(j)] = 1;

  //         let currentLength = j - i + 1;

  //         maxLength = Math.max(maxLength, currentLength);
  //     }
  // }

  // return maxLength;

  //Optimal approach using 2 pointer and sliding window
  let left = 0,
    right = 0,
    sLength = s.length,
    maxLength = 0,
    charHash = {};

  while (right < sLength) {
    let currentChar = s.charAt(right);

    if (currentChar in charHash && charHash[currentChar] >= left) {
      left = charHash[currentChar] + 1;
    }

    let currentLength = right - left + 1;

    maxLength = Math.max(maxLength, currentLength);
    charHash[s.charAt(right)] = right;

    right++;
  }

  return maxLength;
};
