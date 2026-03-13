/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  // Bruteforce approach - TC: O(3N), SC: O(2N)

  let ratingsLength = ratings.length;

  // let left = Array(ratingsLength).fill(1);
  // let right = Array(ratingsLength).fill(1);
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

  // //Slightly better approach
  // let ratingsLength = ratings.length;

  // let left = Array(ratingsLength).fill(1);
  // // let right = Array(ratingsLength).fill(1);

  // left[0] = 1;
  // //  right[ratingsLength - 1] = 1;

  // for (let i = 1; i < ratingsLength; i++) {
  //     if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
  //     else left[i] = 1;
  // }

  // let current = 1, right = 1, sum = Math.max(1, left[ratingsLength - 1]);

  // for (let i = ratingsLength - 2; i >= 0; i--) {
  //     if (ratings[i] > ratings[i + 1]) {
  //         current = right + 1;
  //         right = current;
  //     }
  //     else current = 1;

  //     sum += Math.max(left[i], current);
  // }

  // return sum;
};
