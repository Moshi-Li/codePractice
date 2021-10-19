class Node:
    def __init__(self, x: int, next: 'Node' = None, random: 'Node' = None):
        self.val = int(x)
        self.next = next
        self.random = random


class Solution:
    def copyRandomList(self, head):
        hashMap = {}

        def hardCopy(node):
            if node == None:
                return None
            if hashMap.get(id(node)):
                return hashMap.get(id(node))

            copyNode = Node(node.val, None, None)
            hashMap[id(node)] = copyNode

            copyNode.next = hardCopy(node.next)
            copyNode.random = hardCopy(node.random)

            return copyNode

        return hardCopy(head)
