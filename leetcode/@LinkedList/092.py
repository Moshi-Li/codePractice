
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def reverseBetween(self, head, left, right):
        def reverse(node, count):
            if count == 0:
                return [node, node, node.next]
            else:
                data = reverse(node.next, count - 1)
                data[0].next = node
                data[0] = node
                return data

        if left == right:
            return head
        elif left == 1:
            data = reverse(head, right-left)
            data[0].next = data[2]
            return data[1]
        else:
            count = 2
            orginalhead = head
            pointerPre = head
            while count != left:
                pointerPre = pointerPre.next
                count += 1

            data = reverse(pointerPre.next, right-left)

            pointerPre.next = data[1]
            data[0].next = data[2]
            pointerPre.next = data[1]
            return orginalhead
