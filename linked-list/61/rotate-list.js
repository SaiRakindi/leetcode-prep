/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;

  let LLlength = 1,
    tail = head;

  while (tail.next) {
    LLlength++;
    tail = tail.next;
  }

  k = k % LLlength;

  tail.next = head;

  let stepsToNewTail = LLlength - k - 1;
  let newTail = head;

  for (let i = 0; i < stepsToNewTail; i++) {
    newTail = newTail.next;
  }

  let newHead = newTail.next;
  newTail.next = null;

  return newHead;
};
