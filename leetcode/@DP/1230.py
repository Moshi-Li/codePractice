
class Solution:
    def probabilityOfHeads(self, prob, target):

        dp = [0] * (target+1)

        dp[0] = 1 - prob[0]
        if target != 0:
            dp[1] = prob[0]

        headCount = 0

        for i in range(1, len(prob)):

            if prob[i] == 0:
                pass
            elif prob[i] == 1:
                dp.pop()
                dp = [1]+dp

            else:
                nextDp = [0] * len(dp)
                nextDp[0] = dp[0]*(1 - prob[i])
                for j in range(1, min(target+1, i+2)):
                    nextDp[j] = (dp[j-1] * prob[i]) + (dp[j] * (1-prob[i]))
                dp = nextDp

        return dp[-1]


solution = Solution()
result = solution.probabilityOfHeads([0.4, 1], 1)

print(result)
