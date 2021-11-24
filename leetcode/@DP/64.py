class Solution:
    def minPathSum(self, grid):
        dp = [[0]*len(grid[0]) for i in range(len(grid))]

        for i in range(len(grid)):
            for j in range(len(grid[i])):
                if i == 0 and j == 0:
                    dp[i][j] = grid[i][j]
                elif i == 0:
                    dp[i][j] = dp[i][j-1] + grid[i][j]
                elif j == 0:
                    dp[i][j] = dp[i-1][j] + grid[i][j]
                else:
                    dp[i][j] = grid[i][j] + min([dp[i-1][j], dp[i][j-1]])

        return dp[-1][-1]


s = Solution()
r = s.minPathSum(
    [[1, 2, 3], [4, 5, 6]])
print(r)
