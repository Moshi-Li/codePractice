import bisect


class Solution:
    def jobScheduling(self, startTime: list[int], endTime: list[int], profit: list[int]) -> int:
        def findMaxProfit(index: int) -> int:

            if(index == len(jobs)):
                return 0
            if (hashMap.get(index)):
                return hashMap.get(index)

            nextJobIndex = bisect.bisect_left(
                startTime, jobs[index].get("end"))

            maxProfit = max(jobs[index].get("profit") +
                            findMaxProfit(nextJobIndex), findMaxProfit(index+1))

            hashMap[index] = maxProfit
            return maxProfit

        jobs = []
        for index in range(len(startTime)):
            jobs.append({
                "start": startTime[index],
                "end": endTime[index],
                "profit": profit[index]
            })

        jobs.sort(key=lambda item: item.get("start"))
        startTime.sort()
        hashMap = {}
        findMaxProfit(0)
        return findMaxProfit(0)


solution = Solution()
r = solution.jobScheduling([1, 2, 3, 3], [3, 4, 5, 6], [50, 10, 40, 70])
print(r)
