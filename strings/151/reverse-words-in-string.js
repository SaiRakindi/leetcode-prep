/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // const stringReverse = s.trim().split(" ").filter((word) => word !== '').reverse().join(" ");

  // return stringReverse;

  // let stringReverse = s.replace(/\s+/g, ' ').trim();

  // return stringReverse.split(" ").reverse().join(" ");

  //Brute force appraoch;

  // let words = [];
  // let wordsSentence = s.split(" ");
  // let sentenceLength = wordsSentence.length;

  // for (let i = sentenceLength-1; i >= 0; i--) {
  //     if (wordsSentence[i] !== "") words.push(wordsSentence[i])
  // }

  // return words.join(" ");

  //Optimized approach
  let result = "";
  let lastIndex = s.length - 1;

  while (lastIndex >= 0) {
    while (lastIndex >= 0 && s[lastIndex] === " ") {
      lastIndex--;
    }

    if (lastIndex < 0) break;

    let end = lastIndex;

    while (lastIndex >= 0 && s[lastIndex] !== " ") {
      lastIndex--;
    }

    let word = s.substring(lastIndex + 1, end + 1);

    if (result.length > 0) result += " ";

    result += word;
  }

  return result;
};
