class Solution:
    def matrixReshape(self, mat: list[list[int]], r: int, c: int) -> list[list[int]]:

        if r == len(mat) and c == len(mat[0]):
            return mat

        if r*c != len(mat) * len(mat[0]):
            return mat

        nums = []
        for item in mat:
            nums += item

        nums.reverse()

        newMat = [[None]*c for i in range(r)]

        for i in range(r):
            for j in range(c):
                newMat[i][j] = nums.pop()

        return newMat
