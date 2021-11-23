class Solution:
    def findNumberOfLIS(self, nums):

        dp = [1] * len(nums)

        for i in range(1, len(nums)):
            for j in range(i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[j]+1, dp[i])

        dpWay = [1] * len(nums)
        for i in range(1, len(dp)):

            count = 0
            for j in range(i):
                if nums[i] > nums[j] and dp[i] - dp[j] == 1:
                    count += dpWay[j]
            dpWay[i] = max(dpWay[i], count)

        maxLength = max(dp)
        count = 0
        for i in range(len(dpWay)):
            if dp[i] == maxLength:
                count += dpWay[i]
        return count


s = Solution()
print(s.findNumberOfLIS([1, 3, 5, 4, 7]))
