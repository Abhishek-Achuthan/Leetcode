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
  let dummyNode = new ListNode(0);
  dummyNode.next = head;
  let fast = head;
  let slow = dummyNode;
  for(let i = 1; i<=n ; i++) {
    fast = fast.next
  }
  while(fast){
    slow = slow.next
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return dummyNode.next
};