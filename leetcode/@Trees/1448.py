import sys


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def countBlue(node: TreeNode, preHigh) -> int:
            if node == None:
                return 0
            count = 1 if node.val >= preHigh else 0
            return count + countBlue(node.left, max(node.val, preHigh)) + countBlue(node.right, max(node.val, preHigh))

        return countBlue(root, -sys.maxsize - 1)
