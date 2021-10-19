class Solution:
    def findMaxConsecutiveOnes(self, nums):
        flipped = 0
        nonFlipped = 0
        maxLength = 0
        for num in nums:
            if num:
                flipped = max(flipped+1, 1)
                nonFlipped += 1
            else:
                flipped = nonFlipped + 1
                nonFlipped = 0

            maxLength = max([maxLength, flipped, nonFlipped])

        return maxLength
