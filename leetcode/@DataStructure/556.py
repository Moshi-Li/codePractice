import bisect

#not passed


class Solution:
    def nextGreaterElement(self, n: int) -> int:

        nums = list(map(lambda x: int(x), list(str(n))))
        nums.reverse()
        index = None
        for i in range(len(nums)-1):
            if(nums[i] > nums[i+1]):
                index = i+1
                break

        if not index:
            return -1

        remainningNums = nums[:index]
        switchIndex = bisect.bisect(remainningNums, nums[index])

        temp = remainningNums[switchIndex]
        remainningNums[switchIndex] = nums[index]
        nums[index] = temp

        remainningNums.sort()
        nums = nums[index:]
        nums.reverse()
        nums = nums + remainningNums

        result = int("".join(list(map(lambda x: str(x), nums))))
        return result if result > n and result < 2147483648 else -1


solution = Solution()
r = solution.nextGreaterElement(2147483486)

print(r)
