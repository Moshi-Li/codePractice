class Solution:
    def levelOrder(self, root):
        if root == None:
            return None

        items = [root]
        result = []

        while len(items):
            levelResult = []
            newItems = []
            for item in items:
                if item == None:
                    continue

                newItems.append(item.left)
                newItems.append(item.right)
                levelResult.append(item.val)

            if len(levelResult):
                result.append(levelResult)
            items = newItems

        return result
