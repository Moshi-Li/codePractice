const reverseKGroup = (head, k) => {
  const reverse = _head => {
    if (_head.next === null) {
      return [_head, _head];
    } else {
      var temp = reverse(_head.next);

      _head.next = null;
      temp[1].next = _head;

      return [temp[0], _head];
    }
  };

  var dummy = { next: head };

  var left = dummy;
  var right = null;
  var count = 0;

  var temp = dummy;

  while (temp != null) {
    if (count === k) {
      right = temp.next;
      temp.next = null;

      var result = reverse(left.next);

      left.next = result[0];
      result[1].next = right;

      left = result[1];
      temp = result[1];
      count = 0;
      right = null;
    } else {
      count++;
      temp = temp.next;
    }
  }
  return dummy;
};
reverseKGroup();
