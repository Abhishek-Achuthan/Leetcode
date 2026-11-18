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
var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;
    
    while(true){

        let kth = groupPrev;

        for(let i = 0; i<k ; i++){
            if(kth === null) {
                break;
            }
            kth = kth.next;
        }
        
         if(kth=== null){
            break;
        }

        let groupStart = groupPrev.next;
        let groupNext = kth.next;

        let current = groupPrev.next;
        let prev = groupNext;

        for(let i =0;i<k ; i++) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        groupPrev.next = prev
        groupPrev = groupStart;
    }
 return dummy.next;

};