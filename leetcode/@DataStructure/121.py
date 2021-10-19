class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        minPrice = prices[0]
        maxProfit = 0
        for index, price in enumerate(prices):
            if index == 0:
                continue
            else:
                maxProfit = max([maxProfit, price-minPrice])
                minPrice = min([minPrice, price])

        return maxProfit
