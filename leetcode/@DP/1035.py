class Solution:
    def maxUncrossedLines(self, nums1, nums2):
        def getLenghth(dp, row, colunm):
            if(row < 0 or colunm < 0):
                return 0
            else:
                return dp[row][colunm]

        dp = [[0]*len(nums1) for i in range(len(nums2))]

        for i in range(len(dp)):
            for j in range(len(dp[0])):
                if nums2[i] == nums1[j]:
                    dp[i][j] = max(
                        [getLenghth(dp, i - 1, j - 1) + 1, getLenghth(dp, i, j - 1), getLenghth(dp, i - 1, j)])
                else:
                    dp[i][j] = max(
                        [getLenghth(dp, i - 1, j - 1), getLenghth(dp, i, j - 1), getLenghth(dp, i - 1, j)])

        return dp[-1][-1]
