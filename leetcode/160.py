# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> Optional[ListNode]:
        visitMap = {}
        pointerA = headA
        pointerB = headB

        while pointerA != None:
            visitMap[id(pointerA)] = pointerA
            pointerA = pointerA.next

        while pointerB != None:
            if visitMap.get(id(pointerB)) != None:
                return pointerB

            pointerB = pointerB.next

        return None
