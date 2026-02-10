/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  //Using hash -> set in js
  // let nodeSet = new Set();

  // while (head) {
  //     if (nodeSet.has(head)) return head;

  //     nodeSet.add(head);

  //     head = head.next;
  // }

  // return null;

  //Tortoise Hare method
  let slow = head,
    fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow == fast) {
      slow = head;

      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }

      return slow;
    }
  }

  return null;
};
