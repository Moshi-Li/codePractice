class Solution:
    def wiggleMaxLength(self, nums):
        if len(nums) == 0:
            return 0

        # Up: True
        # Down: False
        direction = None
        count = 0
        for i in range(1, len(nums)):
            if nums[i-1] > nums[i] and (direction == True or direction == None):
                count += 1
                direction = False
            elif nums[i-1] < nums[i] and (direction == False or direction == None):
                count += 1
                direction = True
        return count+1


solution = Solution()
solution.wiggleMaxLength([100, 200])
