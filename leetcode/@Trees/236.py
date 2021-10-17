

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def find(node, p, q):
            if node == None:
                return None

            left = find(node.left, p, q)
            right = find(node.right, p, q)
            if left and right:
                return node
            elif node is p or node is q:
                return node
            elif left:
                return left
            else:
                return right

        return find(root, p, q)
