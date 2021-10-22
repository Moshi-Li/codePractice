class Solution:
    def findNumberOfLIS(self, nums):
        dp = [1] * len(nums)

        for i in range(1, len(nums)):
            for j in range(0, i):
                if nums[i] > nums[j]:
                    dp[i] = max(dp[i], dp[j]+1)

        hashMap = {0: 1}
        for item in dp:
            if hashMap.get(item) == None:
                hashMap[item] = hashMap[item-1]
            else:
                hashMap[item] = hashMap.get(item) + hashMap.get(item - 1)

        return hashMap[max(dp)]
