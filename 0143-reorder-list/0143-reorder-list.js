/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    let fast = head;
    let slow = head;
    let prev= null;
    let n = 0;
    if(!head||!head.next||!head.next.next) return

    while(fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    let stack = [];
    let current = head;
    while(current) {
        n+=1;
        stack.push(current)
        current = current.next;
    }
    current = head;
    if(n%2===0) {
        prev.next =null;
    }else {
        slow.next = null;
    }
    let half =Math.floor(n/2);
    while(half > 0){
        let next = current.next;
        current.next = stack.pop();
        current = current.next;
        current.next = next;
        if(next !== null) {
            current = next;
        }
        half--
    }
};