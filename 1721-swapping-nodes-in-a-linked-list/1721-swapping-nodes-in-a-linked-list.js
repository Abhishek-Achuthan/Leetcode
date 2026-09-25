/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let fast = head;
    let slow = head;

    for(let i = 0 ; i<k-1; i++) {
        fast = fast.next;
    };
    
    let firstChange = fast
    let firstNode = fast.val;

    while(fast && fast.next){
        prev = slow;
        slow = slow.next;
        fast = fast.next
    }
    let lastNode = slow.val;
    slow.val = firstNode;
    firstChange.val = lastNode

    return head
};