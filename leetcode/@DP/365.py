class Solution:
    def minCostII(self, costs):
        if len(costs) == 1:
            return min(costs[0])

        dp = [0]*len(costs)
        dp[0] = costs[0]

        for i in range(1, len(costs)):
            result = [0] * len(costs[0])
            for j in range(len(result)):
                result[j] = min(dp[i-1][:j]+dp[i-1][j+1:]) + costs[i][j]

            dp[i] = result

        return min(dp[-1])
