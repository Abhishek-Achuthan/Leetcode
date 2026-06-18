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
   let slow = head;
   let fast = head

   while(fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
   }

   let current = slow;
   let prev = null;

   while(current) {
     let next  = current.next;
     current.next = prev;
     prev = current;
     current = next
   }

   let leftHead = head;
   let rightHead = prev;
   let max = 0;

   while(rightHead) {
    let sum = leftHead.val + rightHead.val
      if(sum > max) {
        max = sum;
      }
      rightHead = rightHead.next
      leftHead = leftHead.next
   }
   return max

};