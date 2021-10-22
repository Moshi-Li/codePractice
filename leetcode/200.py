class Solution:
    def numIslands(self, grid):
        def build(row, colunm, islandCount):
            if(grid[row-1][colunm-1] != "1"):
                return islandCount

            if max([dp[row-1][colunm],
                    dp[row+1][colunm],
                    dp[row][colunm-1],
                    dp[row][colunm+1]]) == 0:
                islandCount += 1

            dp[i][j] = islandCount
            build(row+1, colunm)
            build(row-1, colunm)
            build(row, colunm+1)
            build(row, colunm-1)

            return islandCount

        dp = [[0]*(len(grid[0])+1) for i in range(len(grid)+1)]
        islandCount = 0

        for i in range(0, len(grid)):
            for j in range(0, len(grid[0])):
                if grid[i][j] == "1":
                    islandCount = build(i+1, j+1, islandCount)

        return islandCount
