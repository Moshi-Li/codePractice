class Solution:
    def rob(self, nums):
        if len(nums) <= 1:
            return sum(nums)

        dp = [0]*len(nums)
        dp[0] = [nums[0], 0]

        for i in range(1, len(nums)):
            dp[i] = [[
                dp[i-1][1] + nums[i],
                max(dp[i-1])
            ]]

        return max(dp[-1])
