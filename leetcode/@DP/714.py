import sys


class Solution:
    def maxProfit(self, prices, fee) -> int:
        hold = -sys.maxsize
        sold = 0

        for i in range(len(prices)):

            currentHold = max(hold, sold - prices[i])
            currentSold = max(sold, hold + prices[i] - fee)

            hold = currentHold
            sold = currentSold

        return max(sold, hold)
