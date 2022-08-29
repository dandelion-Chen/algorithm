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
var addTwoNumbers = function(l1, l2) {
    let l3, tail, carry = 0;
    let sum;
    while(l1 || l2) {
        const n1 = l1 ? l1.val : 0;
        const n2 = l2 ? l2.val : 0;
        const sum = n1 + n2 + carry;
        carry = parseInt(sum/10);
        if(!l3) {
            l3  = tail = new ListNode(sum % 10)
        } else {
            tail.next = new ListNode(sum % 10);
            tail = tail.next;
        }

        l2 = l2 ? l2.next : null;
        l1 = l1 ? l1.next : null;
    }
     if(carry > 0){
        tail.next = new ListNode(carry);
    }

    return l3
};