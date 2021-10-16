class Solution:
    def generate(self, numRows: int) -> list[list[int]]:
        def getLevel(level: int, hashTable: list[list[int]]) -> list[int]:
            if level == 0:
                hashTable[0] = [1]
                return [1]
            elif hashTable.get(level):
                return hashTable.get(level)
            else:
                upperLever = getLevel(level-1, hashTable)
                result = []
                for i in range(level-1):
                    result.append(upperLever[i] + upperLever[i+1])
                result = [1]+result+[1]
                hashTable[level] = result
                return result

        Map = {}

        return [getLevel(i, Map) for i in range(numRows)]


solution = Solution()
r = solution.generate(5)
print(r)
