class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        appearedLetters = {}
        prevIndex = 0
        currentIndex = 0
        result = 0
        while currentIndex < len(s):
            if(appearedLetters.get(s[currentIndex]) != None):
                if currentIndex - prevIndex > result:
                    result = currentIndex - prevIndex

                currentIndex = prevIndex = appearedLetters[s[currentIndex]]+1
                appearedLetters = {s[prevIndex]: prevIndex}
            else:
                appearedLetters[s[currentIndex]] = currentIndex

            currentIndex = currentIndex + 1

        if currentIndex - prevIndex > result:
            result = currentIndex - prevIndex

        return result


solution = Solution()
r = solution.lengthOfLongestSubstring("dvdf")
print(r)
