import math


class Solution:
    def rotate(self, matrix):
        """
        Do not return anything, modify matrix in-place instead.
        """
        l = len(matrix)
        for i in range(0, int(l/2)):
            for j in range(0, int(math.ceil(l/2))):
                temp = matrix[i][j]
                matrix[i][j] = matrix[l-1-j][i]
                matrix[l-1-j][i] = matrix[l-1-i][l-1-j]
                matrix[l-1-i][l-1-j] = matrix[j][l-1-i]
                matrix[j][l-1-i] = temp


def printP(map):
    for i in range(len(map)):
        print(map[i])


solution = Solution()
input = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
printP(input)
solution.rotate(input)
printP(input)
