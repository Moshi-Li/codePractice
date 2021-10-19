class Solution:
    def rob(self, nums):
        if len(nums) <= 3:
            return max(nums)
        else:
            dp_1 = [0] * (len(nums)-1)
            dp_2 = [0] * (len(nums)-1)

            dp_1[0] = [nums[0], 0]
            dp_2[0] = [nums[1], 0]
            for i in range(1, len(nums)-1):
                dp_1[i] = [
                    dp_1[i-1][1] + nums[i],
                    max(dp_1[i-1])
                ]

                dp_2[i] = [
                    dp_2[i-1][1] + nums[i+1],
                    max(dp_2[i-1])
                ]

            return max(dp_1[-1] + dp_2[-1])
