# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: TreeNode):
        if root == None:
            return []

        result = []
        levelItems = [root]
        level = 1

        while len(levelItems):
            newLevel = []
            addedResult = []
            for item in levelItems:
                if item.left:
                    newLevel.append(item.left)
                if item.right:
                    newLevel.append(item.right)

                addedResult.append(item.val)

            if level % 2 == 0:
                addedResult.reverse()

            level += 1
            result.append(addedResult)
            levelItems = newLevel

        return result
