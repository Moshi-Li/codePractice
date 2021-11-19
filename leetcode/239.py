class Solution:
    def maxSlidingWindow(self, nums, k):
        n = len(nums)
        if n * k == 0:
            return []
        if k == 1:
            return nums

        queue = []
        result = []

        for i in range(0, k):
            while len(queue) and nums[i] > queue[len(queue)-1]:
                queue.pop()

            queue.append(nums[i])

        result.append(queue[0])
        if len(nums) <= k:
            return result

        for i in range(k, len(nums)):
            if nums[i-k] == queue[0]:
                queue.pop(0)

            while len(queue) and nums[i] > queue[len(queue)-1]:
                queue.pop()

            queue.append(nums[i])
            result.append(queue[0])

        return result
