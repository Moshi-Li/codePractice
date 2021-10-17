# Definition for a binary tree node.
class TreeNode(object):
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Codec:

    def serialize(self, root):
        """Encodes a tree to a single string.

        :type root: TreeNode
        :rtype: str
        """
        def write(node):
            if node == None:
                return ["."]
            else:
                return [str(node.val)] + write(node.left) + write(node.right)

        return ",".join(write(root))

    def deserialize(self, data):
        """Decodes your encoded data to tree.

        :type data: str
        :rtype: TreeNode
        """
        def buildNode(data, index):
            if(data[index] == "."):
                return [None, index+1]

            left, indexRight = buildNode(data, index+1)
            right, indexEnd = buildNode(data, indexRight)

            return [TreeNode(int(data[index]), left, right), indexEnd]

        if data == "":
            return None
        data = data.split(",")
        return buildNode(data, 0)[0]


# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
