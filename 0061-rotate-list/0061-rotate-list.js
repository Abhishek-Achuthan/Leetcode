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
var rotateRight = function(head, k) {
    let length=0;
    let tail = head;

    while(tail) {
        length++;
        if(!tail.next) {
            break;
        }
        tail = tail.next;
    }

    k = k%length;

    if(k === 0 || length ===0) {
        return head;
    }

    let offSet = length - k

    let curr = head;

    for(let i =1 ; i<offSet ; i++) {
        curr = curr.next;
    }

    let newHead = curr.next;
    curr.next = null;
    tail.next = head;

    return newHead;

    
};