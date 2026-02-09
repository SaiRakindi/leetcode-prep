/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  //Approach 1
  // let node = null;

  // while (head) {
  //     let temp = head.next;

  //     head.next = node;
  //     node = head;
  //     head = temp;
  // }

  // return node

  //Approach 2
  // let prev = null;
  // let current = head;

  // while (current) {
  //     let next = current.next;

  //     current.next = prev;

  //     prev = current;
  //     current = next;
  // }

  // return prev;

  //Recursive approach
  if (!head || !head.next) return head;

  let newHead = reverseList(head.next);

  let front = head.next;

  front.next = head;

  head.next = null;

  return newHead;
};
