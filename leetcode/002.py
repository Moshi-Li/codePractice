from typing import Optional

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __str__(self) -> str:
        result = ""
        tempHead = self
        while tempHead != None:
            result = result + str(tempHead.val)
            tempHead = tempHead.next
        return result


class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        headOne, headTwo = l1, l2
        resultHead = None
        tempNode = None
        moreThanTen = False
        while headOne != None or headTwo != None:

            if headOne == None:
                value = headTwo.val
            elif headTwo == None:
                value = headOne.val
            else:
                value = headOne.val + headTwo.val

            if moreThanTen:
                value = value + 1
            if value >= 10:
                value = value - 10
                moreThanTen = True
            else:
                moreThanTen = False

            if resultHead == None:
                resultHead = ListNode(value)
                tempNode = resultHead
            else:
                tempNode.next = ListNode(value)
                tempNode = tempNode.next

            if(headOne != None):
                headOne = headOne.next

            if(headTwo != None):
                headTwo = headTwo.next

        if(moreThanTen):
            tempNode.next = ListNode(1)

        return resultHead


nodeA02 = ListNode(9, None)
nodeA01 = ListNode(2, nodeA02)
nodeA00 = ListNode(3, nodeA01)
# 329
# 654
nodeB02 = ListNode(4, None)
nodeB01 = ListNode(5, nodeB02)
nodeB00 = ListNode(6, nodeB01)


solution = Solution()
solution.addTwoNumbers(nodeA00, nodeB00)
