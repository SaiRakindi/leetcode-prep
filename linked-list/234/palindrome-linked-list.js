/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let palindromeCheckList = [];

  while (head) {
    palindromeCheckList.push(head.val);
    head = head.next;
  }

  let leftIndex = 0,
    rightIndex = palindromeCheckList.length - 1;

  while (leftIndex < rightIndex) {
    if (palindromeCheckList[leftIndex] !== palindromeCheckList[rightIndex])
      return false;

    leftIndex++;
    rightIndex--;
  }

  return true;
};
