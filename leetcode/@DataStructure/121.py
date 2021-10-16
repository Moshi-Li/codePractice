class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        # [price, preHigh]
        dayQuote = []
        for price in reversed(prices):
            if(len(dayQuote) == 0):
                dayQuote.append([price, 0])
            else:
                dayQuote.append([price, max(dayQuote[-1][0], dayQuote[-1][1])])

        maxProfit = 0
        for item in dayQuote:
            maxProfit = max(maxProfit, item[1]-item[0])

        return maxProfit
