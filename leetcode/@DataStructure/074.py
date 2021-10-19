import bisect


class Solution:
    def searchMatrix(self, matrix, target: int):
        column = [item[0] for item in matrix]
        indexRow = bisect.bisect_left(column, target)
        if matrix[indexRow] == target:
            return True
        elif indexRow - 1 < 0:
            return False
        else:
            indexColumn = bisect.bisect_left(matrix[indexRow], target)
            if matrix[indexRow][indexColumn + 1] == target:
                return True
            else:
                return False
