import bisect


class Solution:
    def nextPermutation(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        if len(nums) <= 1:
            return nums
        nums.reverse()
        index = len(nums)
        for i in range(1, len(nums)):
            if nums[i] < nums[i-1]:
                indexSwap = bisect.bisect(nums, nums[i], 0, i)
                temp = nums[i]
                nums[i] = nums[indexSwap]
                nums[indexSwap] = temp
                index = i
                break

        tempArray = nums[:index]
        tempArray.reverse()

        for i in range(index):
            nums[i] = tempArray[i]

        nums.reverse()
