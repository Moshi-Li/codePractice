import math


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1 or len(s) < 3:
            return s

        def generateMap(s: str, numRows: int) -> list[list[int]]:
            numberOfColumns = math.ceil(len(s)/(2*numRows - 2)) * (numRows - 1)
            return [[0]*numberOfColumns for i in range(numRows)]

        def placeMap(s: str, numRows: int, map: list[list]):
            indexOfString = 0
            rowOfMap = 0
            coloumnOfMap = 0
            direction = "DOWN"

            while indexOfString < len(s):
                map[rowOfMap][coloumnOfMap] = s[indexOfString]
                indexOfString = indexOfString + 1

                if(direction == "DOWN"):
                    if rowOfMap + 1 < numRows:
                        rowOfMap = rowOfMap + 1
                    else:
                        rowOfMap = rowOfMap - 1
                        coloumnOfMap = coloumnOfMap + 1
                        direction = "DIAGONAL"
                else:
                    if(rowOfMap - 1 >= 0):
                        rowOfMap = rowOfMap - 1
                        coloumnOfMap = coloumnOfMap + 1
                    else:
                        rowOfMap = rowOfMap + 1
                        direction = "DOWN"

            return map

        def generateString(map: list[list[any]]) -> str:
            result = ""
            for i in range(len(map)):
                for j in range(len(map[i])):
                    if isinstance(map[i][j], str):
                        result = result + map[i][j]
            return result

        map = generateMap(s, numRows)
        map = placeMap(s, numRows, map)
        result = generateString(map)
        return result


solution = Solution()
r = solution.convert("PAYPALISHIRING", 4)
print(r)
