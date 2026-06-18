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
var pairSum = function(head) {
    let n = 0;
    let current = head;

    while(current) {
        current = current.next;
        n++
    } 
    let middle = n/2;
    let prev = null;
    let next = null;
    let checker = 0
    current = head;

    while(current){
        if(checker >= middle){
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
            checker ++
        }else{
        current = current.next
        checker ++
        }
    }
    let prevHead = prev;
    let normalHead = head;

    let maxSum = 0;
    while(prevHead){
        let sum = prevHead.val + normalHead.val;
        if(sum>maxSum) {
            maxSum = sum;
        }
        prevHead = prevHead.next;
        normalHead = normalHead.next;
    }    
    return maxSum
};