/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let firstIndex = -1,
    lastIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      for (let i = 0; i < nums.length; i++) {
        //   if (firstIndex === -1) {
        //     firstIndex = i;
        //     lastIndex = i;
        //   } else if (firstIndex !== -1 && lastIndex !== -1) {
        //     lastIndex = i;
        //   }

        if (nums[i] === target) {
          if (firstIndex === -1) firstIndex = i;
          lastIndex = i;
        }
      }
    }
  }

  return [firstIndex, lastIndex];
};
