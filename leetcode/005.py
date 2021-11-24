class Solution:
    def longestPalindrome(self, s: str) -> str:

        longest = ""

        for i in range(len(s)):

            left = i
            right = i+1

            while 0 <= left and right < len(s) and s[left] == s[right]:
                if right-left+1 >= len(longest):
                    longest = s[left: right+1]
                right += 1
                left -= 1

            left = i
            right = i
            while 0 <= left and right < len(s) and s[left] == s[right]:
                if right-left+1 >= len(longest):
                    longest = s[left: right+1]
                right += 1
                left -= 1

        return longest


s = Solution()
r = s.longestPalindrome("aaa")
print(r)
