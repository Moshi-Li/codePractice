class Solution:
    def permute(self, nums):
        def getPermute(nums):

            if len(nums) == 1:

                return [nums]
            elif len(nums) == 2:
                copy = nums[0:]
                copy.reverse()
                return [nums[0:], copy]

            result = []
            for index, num in enumerate(nums):
                childPermutation = getPermute(
                    nums[0:index] + nums[index+1:len(nums)])
                # print(childPermutation)
                for i in range(len(childPermutation)):
                    result.append([num]+childPermutation[i])
                # print(result)

            return result

        return getPermute(nums)
