/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function (s) {
  let numsArray = [];

  [...s].forEach((char) => {
    if (
      !isNaN(char) &&
      typeof Number(char) === "number" &&
      numsArray.lastIndexOf(Number(char)) === -1
    ) {
      numsArray.push(Number(char));
    }
  });

  numsArray.sort((a, b) => b - a);

  return numsArray.length >= 2 ? numsArray[1] : -1;
};
