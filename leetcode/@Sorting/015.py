

class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        def twoSum(nums, index, target):
            l = index + 1
            r = len(nums)-1
            result = []
            hashMap = {}
            while l < r:
                if nums[l] + nums[r] < target or hashMap.get(nums[l]):
                    l += 1
                elif nums[l] + nums[r] > target or hashMap.get(nums[r]):
                    r -= 1
                else:
                    result.append([nums[l], nums[r]])
                    hashMap[nums[l]] = True
                    hashMap[nums[r]] = True
                    l += 1
            return result

        nums.sort()
        result = []
        hashMap = {}
        for index, item in enumerate(nums):
            if index > len(nums)-3 or hashMap.get(item):
                hashMap[item] = True
                continue
            else:
                result += list(map(lambda x: x +
                               [item], twoSum(nums, index, -item)))
                hashMap[item] = True
        return result


solution = Solution()
r = solution.threeSum([-1, 0, 1, 2, -1, -4])
print(r)
