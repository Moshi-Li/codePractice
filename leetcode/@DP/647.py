class Solution:
    def countSubstrings(self, s: str) -> int:
        dp = [[False]*len(s) for i in range(len(s))]
        count = 0

        for i in range(len(s)):

            dp[i][i] = True
            count += 1

            left = i
            right = i+1

            while 0 <= left and right < len(s):
                if (right - left == 1 or dp[left+1][right-1]) and dp[left][right] == False and s[left] == s[right]:
                    dp[left][right] = True
                    dp[right][left] = True
                    count += 1
                    left -= 1
                    right += 1
                else:
                    break

            left = i-1
            right = i+1

            while 0 <= left and right < len(s):
                if (right - left == 1 or dp[left+1][right-1]) and dp[left][right] == False and s[left] == s[right]:
                    dp[left][right] = True
                    dp[right][left] = True
                    count += 1
                    left -= 1
                    right += 1
                else:
                    break

        return count
