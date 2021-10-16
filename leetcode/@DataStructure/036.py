class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        def checkValidSqure(board, r, c):
            hashMap = {}
            for i in range(r, r+3):
                for j in range(c, c+3):

                    if hashMap.get(board[i][j]) == True and board[i][j] != ".":
                        return False
                    else:
                        hashMap[board[i][j]] = True
            return True

        def checkRow(board):
            rowIndex = columnIndex = 0
            hashMap = {}
            while rowIndex < len(board) and columnIndex < len(board[0]):

                if hashMap.get(board[rowIndex][columnIndex]) == True and board[rowIndex][columnIndex] != ".":
                    return False
                else:
                    hashMap[board[rowIndex][columnIndex]] = True

                columnIndex += 1
                if (columnIndex >= len(board[0])):
                    hashMap = {}
                    columnIndex = 0
                    rowIndex += 1

            return True

        def checkColumn(board):
            rowIndex = columnIndex = 0
            hashMap = {}
            while rowIndex < len(board) and columnIndex < len(board[0]):

                if hashMap.get(board[rowIndex][columnIndex]) == True and board[rowIndex][columnIndex] != ".":

                    return False
                else:

                    hashMap[board[rowIndex][columnIndex]] = True

                rowIndex += 1
                if (rowIndex >= len(board)):
                    hashMap = {}
                    rowIndex = 0
                    columnIndex += 1

            return True

        if len(board) % 3 != 0 or len(board[0]) % 3 != 0:
            return False

        rowIndex = columnIndex = 0
        while rowIndex < len(board) and columnIndex < len(board[0]):
            # checkout validity
            if not checkValidSqure(board, rowIndex, columnIndex):
                return False

            # move to next
            columnIndex += 3
            if columnIndex >= len(board[0]):
                columnIndex = 0
                rowIndex += 3

        return True and checkRow(board) and checkColumn(board)


solution = Solution()
r = solution.isValidSudoku([["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], [
                           "4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]])
print(r)
