/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  //Bruteforce approach

  let ratingsLength = ratings.length;

  let left = [],
    right = [];

  (left[0] = 1), (right[ratingsLength - 1] = 1);

  for (let i = 1; i < ratingsLength; i++) {
    if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
    else left[i] = 1;
  }

  for (let i = ratingsLength - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) right[i] = right[i + 1] + 1;
    else right[i] = 1;
  }

  let sum = 0;
  for (let i = 0; i < ratingsLength; i++) {
    sum += Math.max(left[i], right[i]);
  }

  return sum;
};
