class Solution:
    def postorderTraversal(self, root):
        if root == None:
            return []
        else:
            return self.postorderTraversal(
                root.right) + self.postorderTraversal(root.left) + [root.val]
