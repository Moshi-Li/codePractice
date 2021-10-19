class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists):
        def getArray(node):
            result = []
            while node != None:
                result.append(node.val)
                node = node.next
            return result

        result = []

        for node in lists:
            result += getArray(node)
        if len(result) == 0:
            return None
        result.sort()
        result[0] = ListNode(result[0])
        for i in range(1, len(result)):
            result[i] = ListNode(result[i])
            result[i-1].next = result[i]
        return result[0]
