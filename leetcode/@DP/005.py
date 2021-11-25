class Solution:
    def longestPalindrome(self, s: str) -> str:
        dp = [[""]*len(s) for i in range(len(s))]
        longestP = ""

        for i in reversed(range(len(s))):
            for j in range(i, len(s)):

                if i == j:
                    dp[i][j] = s[i]
                elif s[i] == s[j] and (i+1 == j or len(dp[i+1][j-1])):
                    dp[i][j] = s[i] + dp[i+1][j-1] + s[j]
                elif i+1 != j:
                    break
                if len(dp[i][j]) > len(longestP):
                    longestP = dp[i][j]

        return longestP


s = Solution()
inputItem = "crbidxnkyieminyzchamldzjzglygkfbbyggagwdqdqamzpguppqjfrcewfduwvcmhliahovcwoupwxwhaoiiiguahuqxiqndwxqxweppcbeoasgtucyqlxnxpvtepwretywgjigjjuxsrbwucatffkrqyfkesakglyhpmtewfknevopxljgcttoqonxpdtzbccpyvttuaisrhdauyjyxgquinvqvfvzgusyxuqkyoklwslljbimbgznpvkdxmakqwwveqrpoiabmiegoyzuyoignfcgmqxvpcmldivknulqbpyxjuvyhrzcsgiusdhsogftokekbdynmksyebsnzbxjxfvwamccphzzlzuvotvubqvhmusdtwvlsnbqwqhqcigmlfoupnqcxdyflpgodnoqaqfekhcyxythaiqxzkahfnblyiznlqkbithmhhytzpcbkwicstapygjpjzvrjcombyrmhcusqtslzdyiiyvujnrxvkrwffwxtmdqqrawtvayiskcnpyociwkeopardpjeyuymipekbefbdfuybfvgzfkjtvurfkopatvusticwbtxdtfifgklpmjamiocalcocqwdivyulupammxhdbeazrrktxiyothnvbwwrsocxzxaxmoenigbhvxffddexrwsioqoyovaqvtmkwzupstkgkmvrddzolmuzjnsj"
r = s.longestPalindrome(inputItem)
print(r)
