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
  // Approach 1
  // let LLlength = 0;
  // let temp = head;

  // while (temp) {
  //     temp = temp.next;
  //     LLlength++;
  // }

  // for (let i = 0; i < Math.floor(LLlength / 2); i++) {
  //     head = head.next;
  // }

  // return head;

  //Approach 2 using two pointers;

  let head1 = head;
  let head2 = head;

  while (head2 && head2.next) {
    head1 = head1.next;

    head2 = head2.next.next;
  }

  return head1;
};
