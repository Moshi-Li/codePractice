class Solution:
    def shortestWay(self, source, target):
        if len(source) == 0:
            return -1

        sourceMap = [{}] * len(source)
        sourceMap[-1][source[-1]] = len(source)

        for i in reversed(range(len(source)-1)):
            sourceMap[i] = {**sourceMap[i+1]}
            sourceMap[i][source[i]] = i+1

        cur = 0
        count = 0
        index = 0

        while index < len(target):

            if cur == len(sourceMap):
                cur = 0
                count += 1

            if sourceMap[cur].get(target[index]) == None and cur == 0:
                return -1
            elif sourceMap[cur].get(target[index]) == None:
                cur = 0
                count += 1
            else:
                cur = sourceMap[cur].get(target[index])
                index += 1

        return count+1


s = Solution()
r = s.shortestWay("adbsc", "adddsbc")
print(r)
