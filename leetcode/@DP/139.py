class Solution:
    def wordBreak(self, s, wordDict):
        wordMap = {}
        for i in range(len(wordDict)):
            wordMap[wordDict[i]] = True

        breakPoint = [-1]
        for i in range(0, len(s)):
            for j in breakPoint:

                if wordMap.get(s[j+1:i+1]) != None:
                    breakPoint.append(i)
                    break

        return True if breakPoint[-1] == len(s)-1 else False


s = Solution()
r = s.wordBreak("leetcode", ["leet", "code"])
print(r)
