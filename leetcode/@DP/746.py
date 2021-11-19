class Solution:

    def minCostClimbingStairs(self, cost):
        if len(cost) == 0:
            return None
        elif len(cost) == 1:
            return cost[0]
        elif len(cost) == 2:
            return min(cost[0], cost[1])
        else:
            dp = [cost[0], cost[1]]
            for i in range(2, len(cost)):
                dp.append(min(dp[i-1], dp[i-2]))

            return min(dp[-1], dp[-2])
