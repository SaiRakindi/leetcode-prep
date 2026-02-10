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
  //Brute force - TC: O(2N), SC: O(1)
  // let LLLength = 0, temp = head;

  // while (temp) {
  //     LLLength++;
  //     temp = temp.next;
  // }

  // if (n === LLLength) {
  //     let newHead = head.next;

  //     return newHead;
  // }

  // let index = LLLength - n, temp1 = head;

  // while (temp1) {
  //     index--;

  //     if (index === 0) break;

  //     temp1 = temp1.next;
  // }

  // let newNode = temp1.next.next;
  // temp1.next = newNode;

  // return head;

  //Optimized approach
  let fast = head,
    slow = head;

  for (let i = 0; i < n; i++) fast = fast.next;

  if (!fast) return head.next;

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  let newHead = slow.next;
  slow.next = slow.next.next;

  return head;
};
