import sys

# Definition for singly-linked list.


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeKLists(self, lists):
        if len(lists) < 1 or len(list[0]) < 1:
            return []

        values = [-sys.maxsize for i in range(len(list))]
        noneCount = 0
        while noneCount != len(values):
            minValue = sys.maxsize
            for index, item in enumerate(lists):
                if item
