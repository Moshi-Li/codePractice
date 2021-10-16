class Solution:
    def uniquePaths(self, m: int, n: int) -> int:
        Map = [[0]*n for i in range(m)]

        for i in range(m):
            for j in range(n):
                if(i == 0 and j == 0):
                    Map[0][0] = 1
                    continue
                result = 0
                result += Map[i][j-1] if j-1 >= 0 else 0
                result += Map[i-1][j] if i-1 >= 0 else 0
                Map[i][j] = result
        return Map[-1][-1]


solution = Solution()
print(solution.uniquePaths(2, 2))

#result = 0
#result = result + Map[i][j-1] if j-1 >= 0 else 0
#result += result + Map[i-1][j] if i-1 >= 0 else 0
