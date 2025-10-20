//https://leetcode.com/problems/reverse-string/description/

/* 
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

Constraints:

1 <= s.length <= 105
s[i] is a printable ascii character.
*/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var reverseString = function (s) {
  //Swapping the elements directly
  // let startIndex = 0;
  // let maxIndex = s.length-1;

  // while(startIndex < maxIndex) {
  //     [s[startIndex], s[maxIndex]] = [s[maxIndex], s[startIndex]]

  //     startIndex++;
  //     maxIndex--;
  // }

  //swapping elements using temp element
  // let leftIndex = 0;
  // let rightIndex = s.length - 1;

  // while(leftIndex < rightIndex) {
  //     let temp = s[leftIndex];
  //     s[leftIndex] = s[rightIndex];
  //     s[rightIndex] = temp;

  //     leftIndex++;
  //     rightIndex--;
  //}

  //Recursion
  let leftIndex = 0;
  let rightIndex = s.length - 1;

  const recursiveReverseString = (startIndex, endIndex) => {
    if (startIndex < endIndex) {
      // [s[startIndex], s[endIndex]] = [s[endIndex], s[startIndex]];
      let temp = s[startIndex];
      s[startIndex] = s[endIndex];
      s[endIndex] = temp;

      recursiveReverseString(startIndex + 1, endIndex - 1);
    }
  };

  recursiveReverseString(leftIndex, rightIndex);
};
