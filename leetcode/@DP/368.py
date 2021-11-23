class Solution:
    def largestDivisibleSubset(self, nums):
        if len(nums) == 1:
            return nums

        nums.sort()
        dp = [1] * len(nums)
        dpMap = [[]] * len(nums)
        dpMap[0] = [nums[0]]
        for i in range(1, len(nums)):
            dpMap[i] = [nums[i]]
            for j in range(i):
                if dp[j]+1 > dp[i] and nums[i] % nums[j] == 0:
                    dp[i] = max(dp[j]+1, dp[i])
                    dpMap[i] = dpMap[j] + [nums[i]]

        return dpMap[dp.index(max(dp))]


s = Solution()
r = s.largestDivisibleSubset([4, 8, 10, 240])
print(r)
