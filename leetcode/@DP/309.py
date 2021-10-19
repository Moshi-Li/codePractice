import sys


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        hold = - sys.maxsize
        sell = 0
        cooldown = 0

        for i in range(len(prices)):
            hold = max(hold, cooldown - prices[i])
            cooldown = sell
            sell = max(sell, hold + prices[i])

            #print(f"i:{i} hold:{hold} sell:{sell} cooldown:{cooldown}")

        return max(cooldown, sell)
