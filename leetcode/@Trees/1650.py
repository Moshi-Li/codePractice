
# Definition for a Node.
class Node:
    def __init__(self, val):
        self.val = val
        self.left = None
        self.right = None
        self.parent = None


class Solution:
    def lowestCommonAncestor(self, p, q):
        hashMapP = {}
        hashMapQ = {}
        while p or q:

            if p:
                hashMapP[id(p)] = p
            if q:
                hashMapQ[id(q)] = q

            if hashMapP.get(id(q)):
                return hashMapP.get(id(q))
            if hashMapQ.get(id(p)):
                return hashMapQ.get(id(p))

            p = p.parent if p and p.parent else None
            q = q.parent if q and q.parent else None

        return None
