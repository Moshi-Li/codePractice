class Solution:
    def getFactors(self, n):
        def factor(n, i, combi, combis):
            while i * i <= n:
                if n % i == 0:
                    # pay attention to the comma at the end
                    combis += combi + [i, n/i],
                    factor(n/i, i, combi+[i], combis)
                i += 1
            return combis
        return factor(n, 2, [], [])


s = Solution()
r = s.getFactors(16)
