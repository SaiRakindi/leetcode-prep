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
var sortList = function (head) {
  //Brute force approach
  let temp = head,
    arr = [];

  while (temp) {
    arr.push(temp.val);
    temp = temp.next;
  }

  arr.sort((a, b) => a - b);

  let i = 0,
    startNode = head;
  while (startNode) {
    startNode.val = arr[i];
    i++;
    startNode = startNode.next;
  }

  return head;
};
