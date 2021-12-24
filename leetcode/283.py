class Solution:
    def moveZeroes(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        nonZeroCount = 0
        for i in range(0, len(nums)):
            if nums[i] != 0:
                nums[nonZeroCount] = nums[i]
                nonZeroCount += 1

        for i in range(nonZeroCount, len(nums)):
            nums[i] = 0

        return nums


s = Solution()
nums = [0, 1, 0, 3, 12]
s.moveZeroes(nums)
print(nums)
