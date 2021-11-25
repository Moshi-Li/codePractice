class Solution:
    def integerBreak(self, n: int) -> int:

        dp = [None, None, 1] + [None] * (n-2)

        for i in range(3, n+1):
            dp[i] = i-1
            for j in range(2, i):
                dp[i] = max(dp[i], dp[j]*(i-j), j*(i-j))

        return dp[-1]


s = Solution()
r = s.integerBreak(3)
print(r)
