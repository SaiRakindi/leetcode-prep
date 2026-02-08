/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  if (!head) return head; //return head if there is no head

  while (head) {
    //if we have head and if the head has the removabale node value, we remove the head and make the next node as head.
    if (head.val === val) head = head.next;
    else break;
  }

  //We check whether the current node has value and it is not the tail node and it has the value with the desired value
  //We remove it and point the next node as the next to next node.
  //If not found, we move to the next node.
  let current = head;

  while (current && current.next) {
    if (current.next.val == val) {
      current.next = current.next.next;
    } else current = current.next;
  }

  return head;
};
