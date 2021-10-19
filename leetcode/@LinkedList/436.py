
# Definition for a Node.
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def treeToDoublyList(self, root):
        def getArray(node):
            if node == None:
                return []
            return getArray(node.left) + [Node(node.val)] + getArray(node.right)

        data = getArray(root)

        if len(data) == 1:
            data[0].right = data[0]
            data[0].left = data[0]
            return data[0]
        if len(data) == 0:
            return None

        for index, node in enumerate(data):
            if index == 0:
                node.right = data[index+1]
                node.left = data[-1]
            elif index == len(data) - 1:
                node.right = data[0]
                node.left = data[index-1]
            else:
                node.right = data[index+1]
                node.left = data[index-1]

        return data[0]
