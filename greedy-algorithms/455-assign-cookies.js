/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  let sLength = s.length;

  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let left = 0;
  let right = 0;

  while (left < sLength) {
    if (g[right] <= s[left]) right++;
    left++;
  }

  return right;
};
