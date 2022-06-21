/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

var deleteDuplicatesUnsorted = function (head) {
  const map = {};
  let arr = [];
  let pointer = head;
  while (pointer !== null) {
    if (!map[pointer.val]) map[pointer.val] = 0;
    map[pointer.val]++;
    arr.push(pointer);
    pointer = pointer.next;
  }

  arr = arr.filter((node) => {
    return map[node.val] <= 1;
  });

  arr.forEach((node, index) => {
    if (index < arr.length - 1) node.next = arr[index + 1];
    else {
      node.next = null;
    }
  });

  return arr.length ? arr[0] : null;
};
