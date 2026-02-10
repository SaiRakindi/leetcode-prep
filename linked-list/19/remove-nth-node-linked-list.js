/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let LLLength = 0,
    temp = head;

  while (temp) {
    LLLength++;
    temp = temp.next;
  }

  if (n === LLLength) {
    let newHead = head.next;

    return newHead;
  }

  let index = LLLength - n,
    temp1 = head;

  while (temp1) {
    index--;

    if (index === 0) break;

    temp1 = temp1.next;
  }

  let newNode = temp1.next.next;
  temp1.next = newNode;

  return head;
};
