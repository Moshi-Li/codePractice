# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        cur = head
        nodes = []

        while cur != None:
            nodes.append(cur.val)
            cur = cur.next

        if "".join(map(lambda x: str(x), nodes)) == "".join(map(lambda x: str(x), reversed(nodes))):
            return True
        else:
            return False
