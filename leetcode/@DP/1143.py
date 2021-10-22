

class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        def getMaxLength(dp, r, c):
            if r < 0 or c < 0:
                return 0
            else:
                return dp[r][c]

        dp = [[0]*len(text1) for i in range(len(text2))]

        for i in range(len(dp)):
            for j in range(len(dp[0])):
                if text2[i] == text1[j]:
                    dp[i][j] = max([getMaxLength(dp, i-1, j-1)+1,
                                   getMaxLength(dp, i, j-1),
                                   getMaxLength(dp, i-1, j)])
                else:
                    dp[i][j] = max([getMaxLength(dp, i-1, j-1),
                                    getMaxLength(dp, i, j-1),
                                    getMaxLength(dp, i-1, j)])

        return dp[-1][-1]
