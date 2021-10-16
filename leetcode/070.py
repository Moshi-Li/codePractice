class Solution:
    def climbStairs(self, n: int) -> int:
        def calculateWays(n: int) -> int:
            if n < 3:
                return n

            if (hashMap.get(n)):
                return hashMap.get(n)
            else:
                result = calculateWays(n-1)+calculateWays(n-2)
                hashMap[n] = result
                return result
        hashMap = {}
        return calculateWays(n)
