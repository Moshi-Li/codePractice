# Definition for a binary tree node.
class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


class Solution:
    def distanceK(self, root, target, k):
        def register(parent, child):
            graph[id(child)] = {
                "connections": [parent] if parent != None else [],
                "visited": False
            }

            if child.left != None:
                graph.get(id(child)).get("connections").append(child.left)
                register(child, child.left)
            if child.right != None:
                graph.get(id(child)).get("connections").append(child.right)
                register(child, child.right)

        if k == 0:
            return [target.val]

        graph = {
            id(root): {
                "connections": [root.left, root.right],
                "visited": False
            }
        }

        register(None, root)

        items = graph.get(id(target)).get("connections")
        graph.get(id(target))["visited"] = True
        distance = 1
        while distance < k:
            newResult = []
            for item in items:
                connectingNodes = graph.get(id(item)).get("connections")
                graph.get(id(item))["visited"] = True
                for node in connectingNodes:
                    if graph.get(id(node)).get("visited") == False:
                        newResult.append(node)

            items = newResult
            distance += 1

        return list(map(lambda item: item.val, items))
