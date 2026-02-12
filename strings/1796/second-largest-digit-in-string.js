/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  //Brute force
  // let numsArray = [];

  // [...s].forEach((char) => {
  //     if (
  //         !isNaN(char) &&
  //         typeof Number(char) === "number" &&
  //         numsArray.lastIndexOf(Number(char)) === -1
  //         ) {
  //         numsArray.push(Number(char));
  //     };
  // });

  // numsArray.sort((a, b) => b - a)

  // return numsArray.length >= 2 ? numsArray[1] : -1;

  //Optimal approach using JS features
  const digitsSet = new Set();

  for (const char of s) {
    if (s >= "0" && char <= "9") digitsSet.add(Number(char));
  }

  const digits = Array.from(digitsSet);
  digits.sort((a, b) => b - a);

  return digits.length >= 2 ? digits[1] : -1;
};
