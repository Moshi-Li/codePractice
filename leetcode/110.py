# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right


class Solution:
    def getHeight(self, root):
        if root == None:
            return 0
        else:
            return max(self.getHeight(root.left), self.getHeight(root.right)) + 1

    def isBalanced(self, root):
        if root == None:
            return True

        if self.isBalanced(root.left) and self.isBalanced(root.right) and abs(self.getHeight(root.left) - self.getHeight(root.right)) <= 1:
            return True
        else:
            return False
