class Solution:
    def longestLine(self, mat):
        def getValue(row, column):
            if row < 0 or column < 0 or column >= len(mat[0]) or mat[row][column] == 0:
                return {
                    "row": 0,
                    "column": 0,
                    "diagonal": 0,
                    "anti-diagonal": 0
                }
            else:
                return dp[row][column]

        dp = [[0]*len(mat[0]) for i in range(len(mat))]
        maxLength = 0
        for i in range(len(mat)):
            for j in range(len(mat[i])):
                if mat[i][j] == 1:
                    dp[i][j] = {
                        "row": getValue(i, j-1).get("row") + 1,
                        "column": getValue(i-1, j).get("column") + 1,
                        "diagonal": getValue(i-1, j-1).get("diagonal") + 1,
                        "anti-diagonal": getValue(i-1, j+1).get("anti-diagonal") + 1
                    }
                    maxLength = max([maxLength,
                                     dp[i][j].get("row"),
                                     dp[i][j].get("column"),
                                     dp[i][j].get("diagonal"),
                                     dp[i][j].get("anti-diagonal")]
                                    )

        return maxLength


s = Solution()
r = s.longestLine([[1, 1, 0, 0, 1, 0, 0, 1, 1, 0],
                   [1, 0, 0, 1, 0, 1, 1, 1, 1, 1],
                   [1, 1, 1, 0, 0, 1, 1, 1, 1, 0],
                   [0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
                   [0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
                   [1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
                   [0, 1, 1, 1, 1, 1, 1, 0, 0, 1],
                   [1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
                   [0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
                   [1, 1, 1, 0, 1, 0, 1, 1, 1, 1]])
print(r)
