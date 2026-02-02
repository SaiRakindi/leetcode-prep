/**
 * @param {string} s
 * @return {number}
 */
var beautySum = function (s) {
  //Worked only for 51/56 testcases
  // let sLength = s.length;
  // let beauty = 0;

  // for (let i = 0; i < sLength; i++) {
  //     let frequency = {};

  //     for (let j = i; j < sLength; j++) {
  //         let currentChar = s[j];

  //         frequency[currentChar] = (frequency[currentChar] || 0) + 1;

  //         const values = Object.values(frequency);

  //         let maxFrequency = Math.max(...values);
  //         let minFrequency = Math.min(...values);

  //         beauty += Math.max(0, maxFrequency - minFrequency);
  //     }
  // }

  // return beauty;

  //Optimized approach
  let beauty = 0,
    sLength = s.length;

  for (let i = 0; i < sLength; i++) {
    let frequency = new Array(26).fill(0);

    for (let j = i; j < sLength; j++) {
      frequency[s.charCodeAt(j) - "a".charCodeAt(0)]++;

      let maxFrequency = Number.MIN_SAFE_INTEGER;
      let minFrequency = Number.MAX_SAFE_INTEGER;

      for (let k = 0; k < 26; k++) {
        if (frequency[k] > 0) {
          minFrequency = Math.min(minFrequency, frequency[k]);
          maxFrequency = Math.max(maxFrequency, frequency[k]);
        }
      }

      beauty += maxFrequency - minFrequency;
    }
  }

  return beauty;
};
