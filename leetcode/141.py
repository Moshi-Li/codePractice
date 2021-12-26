# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def hasCycle(self, head):
        visitMap = {}
        curHead = head

        while curHead != None:
            if visitMap.get(id(curHead)) != None:
                return True
            else:
                visitMap[id(curHead)] = curHead

            curHead = curHead.next

        return False
