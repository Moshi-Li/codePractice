class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        if len(s) == 0 or len(s) == 1:
            return len(s)

        left = 0
        right = 0
        chars = list(s)
        maxLength = 1
        curLength = 0
        charCount = {}

        while left <= right and right < len(chars):

            if left == right:
                curLength = 1
                charCount = {}
                charCount[chars[left]] = 1
                right += 1
            elif charCount.get(chars[right]) == None or charCount.get(chars[right]) == 0:

                curLength += 1
                charCount[chars[right]] = 1
                maxLength = max(maxLength, curLength)

                right += 1
            else:

                charCount[chars[left]] -= 1
                left += 1
                curLength -= 1

        return maxLength
