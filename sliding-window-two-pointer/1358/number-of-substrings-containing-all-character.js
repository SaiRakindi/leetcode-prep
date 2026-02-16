/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  // let count = 0;

  // for (let i = 0; i < s.length; i++) {
  //     let charArray = [0, 0, 0];

  //     for (let j = i; j < s.length; j++) {
  //         charArray[s.charCodeAt(j) - "a".charCodeAt(0)] = 1;

  //         //34/45 testcases passed
  //         // if (charArray[0] + charArray[1] + charArray[2] === 3) count++;

  //         //53/54 testcases passed
  //         //  if (charArray[0] + charArray[1] + charArray[2] === 3) {
  //         //     count += s.length - j;
  //         //     break;
  //         // }
  //     }
  // }

  // return count;

  //Brute force another approach
  // let count = 0;

  // for (let i = 0; i < s.length; i++) {
  //     let charHash = { "a" : 0, "b": 0, "c": 0 };

  //     for (let j = i; j < s.length; j++) {
  //         charHash[s[j]]++;

  //         if (charHash["a"] > 0 && charHash["b"] > 0 && charHash["c"] > 0) count++;
  //     }
  // }

  // return count;

  // let left = 0;
  // let right = 0;

  // let substringCount = 0
  // let sLength = s.length;

  // let charCountArray = [0, 0, 0];
  // let currentCharLength;

  // while (right < sLength) {
  //     let currentChar = s.charCodeAt(right) - 97

  //     charCountArray[currentChar] = (charCountArray[right] || 0) + 1;

  //     console.log(currentChar, charCountArray)

  //     right++;
  // }

  // return substringCount;

  let left = 0;
  let count = 0;

  let charCount = { a: 0, b: 0, c: 0 };

  for (let right = 0; right < s.length; right++) {
    charCount[s[right]]++;

    while (charCount["a"] > 0 && charCount["b"] > 0 && charCount["c"] > 0) {
      count += s.length - right;

      charCount[s[left]]--;
      left++;
    }
  }

  return count;
};
