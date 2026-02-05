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
var middleNode = function (head) {
  let LLlength = 0;
  let temp = head;

  while (temp) {
    temp = temp.next;
    LLlength++;
  }

  for (let i = 0; i < Math.floor(LLlength / 2); i++) {
    head = head.next;
  }

  return head;
};
