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
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  var templ1 = l1;
  var templ2 = l2;

  var temp = null;
  var head;

  while (templ1 != null && templ2 != null) {
    if (temp == null) {
      temp = templ1.val < templ2.val ? templ1 : templ2;
      head = temp;
    } else {
      temp.next = templ1.val < templ2.val ? templ1 : templ2;
      temp = temp.next;
    }
    templ1.val < templ2.val ? (templ1 = templ1.next) : (templ2 = templ2.next);
  }
  while (templ1 != null) {
    temp.next = templ1;
    temp = temp.next;
    templ1 = templ1.next;
  }

  while (templ2 != null) {
    temp.next = templ2;
    temp = temp.next;
    templ2 = templ2.next;
  }

  return head;
};

var a1 = {
  val: 1,
  next: null
};
var b2 = {
  val: 5,
  next: null
};
var b1 = {
  val: 2,
  next: b2
};

mergeTwoLists(a1, b1);
