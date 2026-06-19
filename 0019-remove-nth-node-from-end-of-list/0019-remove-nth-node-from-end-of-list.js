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
var removeNthFromEnd = function(head, n) {
    let length = 0;
    let current = head;
    let tracker = 0;
    let prev = null;
    if(!head || !head.next) return null

    while(current) {
        current = current.next;
        length++;
    }
    if(length === n) {
        return head.next
    }
    current = head
    while(current) {
        if(length-tracker === n) {
            prev.next = current.next;
            break;
        }
        prev = current
        tracker ++;
        current = current.next;
    }
    return head;
};