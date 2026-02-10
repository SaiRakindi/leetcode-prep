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
var oddEvenList = function (head) {
  let arr = [],
    temp = head;

  if (!head || !head.next) return head;

  while (temp && temp.next) {
    arr.push(temp.val);
    temp = temp.next.next;
  }

  if (temp) arr.push(temp.val);

  temp = head.next;

  while (temp && temp.next) {
    arr.push(temp.val);
    temp = temp.next.next;
  }

  if (temp) arr.push(temp.val);

  let i = 0;
  let temp1 = head;

  while (temp1) {
    temp1.val = arr[i];
    i++;
    temp1 = temp1.next;
  }

  return head;
};
