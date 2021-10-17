# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def rightSideView(self, root):
        if root == None:
            return []
        result = [root.val]
        level = [root]

        while len(level):
            newLevel = []
            for item in level:
                if item.left != None:
                    newLevel.append(item.left)
                if item.right != None:
                    newLevel.append(item.right)

            if len(newLevel):
                result.append(newLevel[-1].val)
            level = newLevel

        return result
