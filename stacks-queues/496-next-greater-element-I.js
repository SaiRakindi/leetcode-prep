/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let stack = [];

  let nums2Length = nums2.length;

  let nextGreaterElements = {};

  for (let i = nums2Length - 1; i >= 0; i--) {
    while (stack.length && stack[stack.length - 1] <= nums2[i]) {
      stack.pop();
    }

    if (stack.length === 0) nextGreaterElements[nums2[i]] = -1;
    else nextGreaterElements[nums2[i]] = stack[stack.length - 1];

    stack.push(nums2[i]);
  }

  return nums1.map((num) => nextGreaterElements[num]);
};
