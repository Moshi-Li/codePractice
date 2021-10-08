class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        for i in range(0, len(nums)):
            for j in range(i+1, len(nums)):
                if nums[i]+nums[j] == target:
                    return [i, j]

    def twoSum_B(self, nums: list[int], target: int) -> list[int]:
        remains = {}
        for index in range(len(nums)):
            diff = target - nums[index]

            if isinstance(remains.get(diff), int):
                return [remains.get(diff), index]
            else:
                remains[nums[index]] = index


solution = Solution()
print(solution.twoSum_B([2, 7, 11, 15], 9))
print(solution.twoSum([3, 2, 4], 6))
print(solution.twoSum([3, 3], 6))
