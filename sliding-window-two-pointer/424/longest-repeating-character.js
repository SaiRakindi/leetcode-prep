/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  //Brute force
  // let sLength = s.length, maxLength = 0;

  // for (let i = 0; i < sLength; i++) {
  //     let charArray = new Array(26).fill(0), maxFrequency = 0;

  //     for (let j = i; j < sLength; j++) {
  //         charArray[s.charCodeAt(j) - 65]++;
  //         maxFrequency = Math.max(maxFrequency, charArray[s.charCodeAt(j) - 65]);

  //         let changes = j - i + 1 - maxFrequency;

  //         if (changes <= k)
  //             maxLength = Math.max(maxLength, j - i + 1);
  //     }
  // }

  // return maxLength;

  //Better approach - 2 pointers and sliding window

  // let left = 0,
  // right = 0,
  // sLength = s.length,
  // maxLength = 0,
  // maxFrequency = 0;

  // let charHash = {};

  // while (right < sLength) {

  //     let currentChar = s[right];

  //     charHash[currentChar] = (charHash[currentChar] || 0) + 1;

  //     maxFrequency = Math.max(maxFrequency, charHash[currentChar]);

  //     let windowSize = right - left + 1;

  //     if (windowSize - maxFrequency > k) {
  //         charHash[s[left]]--;
  //         left++;
  //     }
  //     else maxLength = Math.max(maxLength, windowSize)

  //     right++;
  // }

  // return maxLength;

  //Optimal approach

  let left = 0,
    sLength = s.length,
    maxLength = 0,
    maxFrequency = 0;

  let charHash = {};

  for (let right = 0; right < sLength; right++) {
    let currentChar = s[right];

    charHash[currentChar] = (charHash[currentChar] || 0) + 1;

    maxFrequency = Math.max(maxFrequency, charHash[currentChar]);

    while (right - left + 1 - maxFrequency > k) {
      charHash[s[left]]--;
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
};
