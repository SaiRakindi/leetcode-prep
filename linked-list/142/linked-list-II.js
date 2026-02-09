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
  //Brute force approach
  let nodeSet = new Set();

  while (head) {
    if (nodeSet.has(head)) return head;

    nodeSet.add(head);

    head = head.next;
  }

  //Return null if there is no cycle node
  return null;
};
