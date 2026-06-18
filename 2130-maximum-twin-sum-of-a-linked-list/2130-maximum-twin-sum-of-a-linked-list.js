/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  let half = [];
  let slow = fast = head;

  while(fast && fast.next) {
    half.push(slow.val)
    slow = slow.next;
    fast = fast.next.next
  }
  let res = 0;

  while(slow) {
    res = Math.max(res,half.pop()+ slow.val);
    slow = slow.next;
  }
  return res;

};