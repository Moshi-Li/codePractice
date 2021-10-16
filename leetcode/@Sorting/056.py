class Solution:
    def merge(self, intervals: list[list[int]]) -> list[list[int]]:
        intervals.sort(key=lambda item: item[0])

        result = []
        for i in range(len(intervals)):
            if i == 0:
                result.append(intervals[i])
                continue

            if intervals[i][0] <= result[-1][1]:
                result[-1] = [min(intervals[i][0], result[-1][0]),
                              max(intervals[i][1], result[-1][1])]
            else:
                result.append(intervals[i])
        return result


solution = Solution()
r = solution.merge([[1, 3], [2, 6], [8, 10], [15, 18]])
print(r)
