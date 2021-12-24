class Solution:
    def reverse(self, pre, next):
        if next == None:
            return pre
        nextNode = next.next
        next.next = pre
        return self.reverse(next, nextNode)

    def reverseList(self, head):
        if head == None:
            return None
        else:
            return self.reverse(None, head)
