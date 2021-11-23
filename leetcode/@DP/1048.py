class Solution:
    def longestStrChain(self, words):

        def isPrecedent(pre, next):
            if len(pre) + 1 != len(next):
                return False

            charList = list(next)
            for i in range(len(charList)):
                if "".join(charList[0:i]+charList[i+1:len(charList)]) == pre:
                    return True

            return False

        words.sort(key=lambda x: len(x))
        dp = [1] * len(words)

        for i in range(1, len(words)):
            for j in range(i):

                if isPrecedent(words[j], words[i]):
                    dp[i] = max([dp[j]+1, dp[i]])

        return max(dp)


s = Solution()
r = s.longestStrChain(
    ["a", "b", "ba", "bca", "bda", "bdca"])
print(r)
