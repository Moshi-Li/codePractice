class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        dictionary = {}
        for number in nums:
            if dictionary.get(number) != 1:
                dictionary[number] = 1
            else:
                return True
        return False


solotion = Solution()
r = solotion.containsDuplicate([1, 2, 3, 1])
print(r)
