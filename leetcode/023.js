const mergeKLists = lists => {
  const mergeTwoLists = (l1, l2) => {
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

  switch (lists.length) {
    case 0:
      return null;
    case 1:
      return lists[0];
    case 2:
      return mergeTwoLists(lists[0], lists[1]);
    default:
      return mergeTwoLists(lists.pop(), mergeKLists(lists));
  }
};
