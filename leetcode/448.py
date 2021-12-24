class Solution:
    def findDisappearedNumbers(self, nums):
        result = []
        visitMap = {}
        for i in range(0, len(nums)):
            visitMap[nums[i]] = True

        for i in range(1, len(nums)+1):
            if visitMap.get(i) == None:
                result.append(i)

        return result
