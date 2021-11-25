class Solution:
    def productExceptSelf(self, nums):
        dpLeft = [1] * len(nums)
        dpRight = [1] * len(nums)
        result = [1] * len(nums)

        for i in range(1, len(nums)):
            dpLeft[i] = dpLeft[i-1] * nums[i-1]

        for i in reversed(range(0, len(nums)-1)):
            dpRight[i] = dpRight[i+1] * nums[i+1]
            result[i] = dpLeft[i]*dpRight[i]

        return result


s = Solution()
r = s.productExceptSelf([1, 2, 3, 4])
print(r)
