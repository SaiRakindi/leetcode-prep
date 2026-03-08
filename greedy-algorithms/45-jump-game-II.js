/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  let numsLength = nums.length;

  function getJumps(index, jumps) {
    if (index >= numsLength - 1) return jumps;

    if (nums[index] === 0) return Infinity;

    let minimum = Infinity;

    for (let i = 1; i <= nums[index]; i++) {
      minimum = Math.min(minimum, getJumps(index + i, jumps + 1));
    }

    return minimum;
  }

  return getJumps(0, 0);
};
