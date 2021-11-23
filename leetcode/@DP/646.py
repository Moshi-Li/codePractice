class Solution:
    def findLongestChain(self, pairs):
        if len(pairs) == 0:
            return 0

        pairs.sort(key=lambda x: x[1])
        cur = pairs[0][1]
        count = 1

        for i in range(1, len(pairs)):
            if cur < pairs[i][0]:
                cur = pairs[i][1]
                count += 1

        return count
