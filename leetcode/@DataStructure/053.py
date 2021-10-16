class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        if (len(nums) == 1):
            return nums[0]

        dpResult = [nums[0]]
        for i in range(1, len(nums)):

            if(dpResult[i-1] > 0):
                dpResult.append(dpResult[i-1]+nums[i])
            else:
                dpResult.append(nums[i])
        return max(dpResult)


solution = Solution()
print(solution.maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
