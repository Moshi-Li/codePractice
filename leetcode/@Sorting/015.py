class Solution:
    def threeSum(self, nums: list[int]) -> list[list[int]]:
        def getSum(nums: list[int], target: int, count: int) -> list[list[int]]:
            nums.sort()
            if(count == 2):
                result = []
                leftP = 0
                rightP = len(nums)-1
                hashMap = {}

                while rightP > leftP:
                    if(nums[leftP]+nums[rightP] == target):
                        if(not hashMap.get(nums[leftP]) and not hashMap.get(nums[rightP])):
                            result.append([nums[leftP], nums[rightP]])
                            hashMap[nums[leftP]] = hashMap[nums[rightP]] = True
                        leftP += 1
                    elif(nums[leftP]+nums[rightP] > target):
                        rightP -= 1
                    else:
                        leftP += 1
                return result

            result = []

            for index in range(len(nums)):
                matches = getSum(nums[:index] +
                                 nums[index+1:], target-nums[index], count-1)
                for item in matches:
                    item.append(nums[index])

                hashMap = {}
                hashMap[index] = True
                result += matches

            hashMap = {}
            for item in result:
                item.sort()
                hashMap[str(item)] = item

            return list(hashMap.values())

        return getSum(nums, 0, 3)


solution = Solution()
r = solution.threeSum([-1, 0, 1, 2, -1, -4])
print(r)
