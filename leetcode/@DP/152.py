import sys


class Solution:
    def maxProduct(self, nums):
        if len(nums) == 1:
            return nums[0]
        maxProduct = 0
        positive = 0
        negative = 0

        for num in nums:
            p = positive
            n = negative

            positive = max([p * num, n * num, num])
            negative = min([p * num, n * num, num])

            #print(f"p:{positive} n:{negative}")
            maxProduct = max([positive, negative, maxProduct])

        return maxProduct
