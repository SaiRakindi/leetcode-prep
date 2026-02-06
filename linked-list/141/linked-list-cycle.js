/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  //Only few testcases passed
  // let current = head;

  // if (!current || !current.next) return false;

  // while (current && current.next) {
  //     current = current.next;
  //     if (current.next) return true;
  //     else break;
  // }

  // return false;

  let seenNodes = new Set();

  let current = head;

  while (current) {
    if (seenNodes.has(current)) return true;

    seenNodes.add(current);
    current = current.next;
  }

  return false;
};
