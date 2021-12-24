
class Solution:
    def detectCycle(self, head: Optional):
        visitMap = {}

        cur = head
        while cur != None:
            if visitMap.get(id(cur)) != None:
                return visitMap.get(id(cur))
            else:
                visitMap[id(cur)] = cur
                cur = cur.next

        return None
