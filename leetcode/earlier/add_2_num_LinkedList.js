

function ListNode(val) {
    this.val = val;
    this.next = null;
}
 
var l1 = new ListNode(1);
    l1.next = new ListNode(2);
var l2 = new ListNode(2);

var addTwoNumbers = function(l1, l2) {
    var carry = 0;
    var head = new ListNode(0);
    var node = head;

    
    while (l1 != null || l2 != null) {
        var sum = 0;
        if (l1 == null) {
            sum = l2.val + carry;
            l2 = l2.next;
        } 
        
        else if (l2 == null) {
            sum = l1.val + carry;
            l1 = l1.next;
        }
        
        else {
            sum = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        carry = 0

        if (sum > 9) {
            sum = sum -10;
            carry = 1;
        }

        node.next = new ListNode(sum)        
        node = node.next;

    }
    
    return head.next
};

