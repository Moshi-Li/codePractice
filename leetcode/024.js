const swapPairs = head => {
  if (head == null) {
    return null;
  }

  var mid = head;
  var left = null;
  var right = head.next;
  var h = head;

  while (mid != null && right != null) {
    if (left != null) {
      left.next = right;
    } else {
      var h = right;
    }
    mid.next = right.next;
    right.next = mid;

    left = mid;
    mid = mid === null ? null : mid.next;
    right = mid === null ? null : mid.next;
  }
  return h;
};
