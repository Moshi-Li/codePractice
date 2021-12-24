# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head):
        if head == None:
            return head

        nextNode = head.next
        curNode = head
        while nextNode != None:
            if (curNode.val == nextNode.val):
                curNode.next = nextNode.next
                nextNode = nextNode.next

            else:
                curNode = nextNode
                nextNode = nextNode.next

        return head
