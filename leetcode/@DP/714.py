class Solution:
    def maxProfit(self, prices, fee) -> int:
        if len(prices) <= 1:
            return 0

        madeProft = False
        dp = [[0] * 2 for i in range(len(prices))]
        minPrice = prices[0]

        for i in range(1, len(dp)):
            if prices[i] > prices[i-1]:
                madeProft = True
                dp[i] = [max(dp[i-1][0], dp[i-1][1] +
                             prices[i] - minPrice - fee),
                         dp[i-1][1]
                         ]
            else:
                if(prices[i-1]-minPrice-2 > 0):
                    dp[i] = [dp[i-1][0], dp[i-1][0]]
                    minPrice = prices[i]
                else:
                    dp[i] = [dp[i-1][0], dp[i-1][1]]
                    minPrice = min(minPrice, prices[i])

        return dp[-1][0]
