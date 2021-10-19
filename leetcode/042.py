class Solution:
    def trap(self, height):
        maxLeftH = [0] * len(height)
        maxLeftH[0] = height[0]
        maxRightH = [0] * len(height)
        maxRightH[-1] = height[-1]

        for i in range(1, len(height)):
            maxLeftH[i] = max(maxLeftH[i-1], height[i-1])
        for i in reversed(range(0, len(height)-1)):
            maxRightH[i] = max(maxRightH[i+1], height[i+1])

        count = 0
        for i in range(len(height)):
            count += max(min(maxLeftH[i], maxRightH[i]) - height[i], 0)

        return count
