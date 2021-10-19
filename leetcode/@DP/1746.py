class Solution:
    def maxSumAfterOperation(self, nums):
        if len(nums) == 0:
            return 0

        maxNumber = 0
        flipped = 0
        nonFlipped = 0
        for k in range(len(nums)):
            flipped = max([flipped + nums[k], nonFlipped +
                          nums[k]*nums[k], nums[k]*nums[k]])
            nonFlipped = max([nonFlipped + nums[k], nums[k]])
            maxNumber = max([maxNumber, flipped])

        return maxNumber
