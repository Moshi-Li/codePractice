import sys
# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxPathSum(self, root: TreeNode) -> int:
        def findMaxPath(node: TreeNode) -> int:
            if node == None:
                return [- sys.maxsize, - sys.maxsize]
            else:
                leftData = findMaxPath(
                    node.left)
                rightData = findMaxPath(
                    node.right)
                maxPathWithNode = max([
                    node.val,
                    leftData[0]+node.val,
                    rightData[0]+node.val
                ])
                maxPathWithOutNode = max([node.val,
                                          leftData[1],
                                          rightData[1],
                                          node.val+leftData[0],
                                          node.val+rightData[0],
                                         node.val+leftData[0]+rightData[0]])

                return [maxPathWithNode, maxPathWithOutNode]
        r = findMaxPath(root)
        # print(r)
        return max(r)


solution = Solution()
tree = TreeNode(1, TreeNode(2, None, None), TreeNode(3, None, None))
r = solution.maxPathSum(tree)
print(r)
