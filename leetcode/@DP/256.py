class Solution:
    def minCost(self, costs):
        if len(costs) == 1:
            return min(costs[0])

        dp = [0]*len(costs)
        dp[0] = costs[0]

        for i in range(1, len(costs)):
            dp[i] = [
                min(dp[i-1][1], dp[i-1][2])+costs[i][0],
                min(dp[i-1][0], dp[i-1][2])+costs[i][1],
                min(dp[i-1][0], dp[i-1][1])+costs[i][2]
            ]

        return min(dp[-1])
