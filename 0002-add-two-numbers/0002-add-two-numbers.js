/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let sumList = new ListNode(0)
    let sumHead = sumList;
    let temp = l1
    let temp2 = l2
    while (temp !== null || temp2 !== null) {
        if (temp === null) {
            sum = 0 + temp2.val + carry
            temp2 = temp2.next;
            digit = sum % 10;
            carry = Math.floor(sum / 10);
            sumList.next = new ListNode(digit);
            sumList = sumList.next
        } else if (temp2 === null) {
            sum = temp.val + 0 + carry
            temp = temp.next
            digit = sum % 10;
            carry = Math.floor(sum / 10);
            sumList.next = new ListNode(digit);
            sumList = sumList.next
        } else {
            sum = temp.val + temp2.val + carry
            digit = sum % 10;
            carry = Math.floor(sum / 10);
            sumList.next = new ListNode(digit);
            sumList = sumList.next
            temp = temp.next
            temp2 = temp2.next
        }
    }
    if(carry > 0){
        sumList.next = new ListNode(carry)
    }

    console.log(sumHead);
    return sumHead.next
};