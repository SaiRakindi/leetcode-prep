/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let list1 = headA,
    list2 = headB;

  if (list1 !== list2) {
    list1 = list1 ? list1.next : headB;
    list2 = list2 ? list2.next : headA;
  }

  return list1;
};
