/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */


function addTwoNumbers(l1,l2) {
    var head = new ListNode(null);
    var temp = head;
    var t1 = l1, t2 = l2;

    var val = 0;
    
    while (true) {

        if (t1 != null) {
            val += t1.val;
            t1 = t1.next;
        }
        if (t2 != null) {
            val += t2.val;
            t2 = t2.next;
        }


        if (val >= 10) {
            temp.next = new ListNode(val - 10);
            val = 1;
        }
        else {
            temp.next = new ListNode(val);
            val = 0;
        }

        temp = temp.next;
        
        if (t1===null && t2===null) {break}
    }
    
    if (val != 0) {
        temp.next = new ListNode(1);
    }

    return head.next
}