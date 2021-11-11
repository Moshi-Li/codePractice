import bisect


class Solution:
    def nextPermutation(self, nums):
        """
        Do not return anything, modify nums in-place instead.
        """
        for i in reversed(range(0, len(nums)-1)):
            if nums[i] < nums[i+1]:
                nums[i+1:len(nums)] = sorted(nums[i+1:len(nums)])
                swapIndex = bisect.bisect_right(
                    nums[i+1:len(nums)], nums[i]) + i+1
                temp = nums[i]
                nums[i] = nums[swapIndex]
                nums[swapIndex] = temp

                return nums

        nums.reverse()

        return nums


bisect.bisect_right
bisect.bisect_left
