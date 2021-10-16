import math


class Solution:
    def maxArea(self, height: list[int]) -> int:
        left = 0
        right = len(height) - 1
        maxArea = 0
        while right > left:

            maxArea = max(maxArea, min(
                height[left], height[right])*(right-left))
            if(height[left] > height[right]):
                right -= 1
            else:
                left += 1

        return maxArea


solution = Solution()
r = solution.maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
#r = solution.maxArea([4, 3, 2, 1, 4])
#r = solution.maxArea([1, 2, 1])
print(r)
