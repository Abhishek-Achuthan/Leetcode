/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head1 = list1;
    let head2 = list2;
    let dummyNode = new ListNode(0);
    let tail = dummyNode

    while(head1 !==null || head2 !== null) {
        if(!head1){
            tail.next = head2;
            break
        }else if(!head2) {
            tail.next = head1;
            break;
        }
        if(head1.val < head2.val) {
            tail.next = head1;
            head1 = head1.next;
            tail = tail.next;
        }else{
            tail.next = head2;
            head2 = head2.next;
            tail = tail.next
        }
    }
    return dummyNode.next
};