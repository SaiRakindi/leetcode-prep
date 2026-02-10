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
var deleteMiddle = function (head) {
  //Brute force - TC: O(N+N/2), SC:O(1)
  // let listLength = 0, temp = head;

  // if (!head) return head;

  // if (!head.next) return head.next

  // while (temp) {
  //     listLength++;
  //     temp = temp.next;
  // }

  // let middleIndex = Math.floor(listLength / 2), startNode = head;

  // while (startNode) {
  //     middleIndex--;

  //     if (middleIndex === 0) {
  //         let middleNode = startNode.next;
  //         startNode.next = startNode.next.next;
  //     }

  //     startNode = startNode.next;
  // }

  // return head;

  //Optimal appraoch;
  let slow = head,
    fast = head;

  if (!head) return head;

  if (!head.next) return head.next;

  //To point slow to the prev of middle node, we skip the initial slow next node
  fast = fast.next.next;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let newNode = slow.next;
  slow.next = slow.next.next;

  return head;
};
