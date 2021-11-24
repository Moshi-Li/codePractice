class Solution:
    def shortestDistanceColor(self, colors, queries):

        dpLeft = [0] * len(colors)
        dpRight = [0] * len(colors)

        dpLeft[0] = {
            1: 0 if colors[0] == 1 else None,
            2: 0 if colors[0] == 2 else None,
            3: 0 if colors[0] == 3 else None,
        }
        dpRight[-1] = {
            1: len(colors)-1 if colors[-1] == 1 else None,
            2: len(colors)-1 if colors[-1] == 2 else None,
            3: len(colors)-1 if colors[-1] == 3 else None,
        }

        for i in range(1, len(dpLeft)):
            dpLeft[i] = {**dpLeft[i-1]}
            dpLeft[i][colors[i]] = i

        for i in reversed(range(0, len(dpLeft)-1)):
            dpRight[i] = {**dpRight[i+1]}
            dpRight[i][colors[i]] = i

        result = [-1] * len(queries)
        for i in range(len(queries)):
            index = queries[i][0]
            color = queries[i][1]

            if dpLeft[index].get(color) == None and dpRight[index].get(color) == None:
                result[i] = -1
            elif dpLeft[index].get(color) != None and dpRight[index].get(color) != None:
                result[i] = min([
                    index - dpLeft[index].get(color),
                    dpRight[index].get(color) - index
                ])
            else:
                result[i] = index - dpLeft[index].get(color) if dpLeft[index].get(
                    color) != None else dpRight[index].get(color) - index

        return result


s = Solution()
r = s.shortestDistanceColor([1, 1, 2, 1, 3, 2, 2, 3, 3],
                            [[1, 3], [2, 2], [6, 1]])
print(r)
