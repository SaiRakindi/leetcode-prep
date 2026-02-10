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
  //Brute force appraoch
  // let arr = [], temp = head;

  // if (!head || !head.next) return head

  // while (temp && temp.next) {
  //     arr.push(temp.val);
  //     temp = temp.next.next;
  // }

  // if (temp) arr.push(temp.val);

  // temp = head.next;

  // while (temp && temp.next) {
  //     arr.push(temp.val);
  //     temp = temp.next.next;
  // }

  // if (temp) arr.push(temp.val)

  // let i = 0;
  // let temp1 = head;

  // while (temp1) {
  //     temp1.val = arr[i];
  //     i++;
  //     temp1 = temp1.next;
  // }

  // return head; //TC: O(2N), SC: O(N)

  //Optimized approach

  if (!head || !head.next) return head;

  let odd = head,
    even = head.next,
    evenHead = head.next;

  while (even && even.next) {
    odd.next = odd.next.next;
    even.next = even.next.next;

    odd = odd.next;
    even = even.next;
  }

  odd.next = evenHead;

  return head; //TC:O(N), SC: O(1)
};
