class Solution:
    def subarraySum(self, nums, k):

        totals = {0: 1}
        total = 0
        count = 0
        for index, num in enumerate(nums):
            total += num
            count += totals.get(total-k, 0)
            totals[total] = totals.get(total, 0)+1

        return count


s = Solution()
s.subarraySum([1], 1)
