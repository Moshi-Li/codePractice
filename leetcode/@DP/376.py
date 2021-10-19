class Solution:
    def wiggleMaxLength(self, nums):
        if len(nums) == 0:
            return 0

        count = 0
        direction = None
        for i in range(1, len(nums)):
            if nums[i-1] < nums[i] and not direction:
                count += 1
                #print(f"1; {nums[i]}; c: {count}")
                direction = True
            elif nums[i-1] > nums[i] and (direction == True or direction == None):
                count += 1
                #print(f"2 {nums[i]}; c: {count}")
                direction = False

        return count + 1
