class Solution:
    def reverseList(self, head):
        if head == None:
            return None

        pre = None
        node = head

        while node != None:
            nextNode = node.next
            node.next = pre
            pre = node
            node = nextNode

        return pre
