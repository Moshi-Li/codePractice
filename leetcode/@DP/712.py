class Solution:
    def minimumDeleteSum(self, s1, s2):
        def calcValue(array):
            result = 0
            for i in range(len(array)):
                result += ord(array[i])
            return result

        listOne = list(s1)
        listTwo = list(s2)

        if len(listOne) == 0 or len(listTwo) == 0:
            return calcValue(listOne) + calcValue(listTwo)

        dp = [[0] * (len(listTwo)+1) for i in range(len(listOne)+1)]

        for n in range(1, len(listOne)+1):
            dp[n][0] = calcValue(listOne[0:n])
        for m in range(1, len(listTwo)+1):
            dp[0][m] = calcValue(listTwo[0:m])

        for i in range(1, len(listOne)+1):
            for j in range(1, len(listTwo)+1):
                change = 0
                if listOne[i-1] != listTwo[j-1]:
                    change = ord(listOne[i-1]) + ord(listTwo[j-1])

                dp[i][j] = min([dp[i-1][j-1]+change, dp[i-1][j] +
                               ord(listOne[i-1]), dp[i][j-1] +
                               ord(listTwo[j-1])])
        return dp[-1][-1]


s = Solution()
s.minimumDeleteSum("eat", "sea")
