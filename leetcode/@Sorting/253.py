import bisect


class Solution:
    def minMeetingRooms(self, intervals: list[list[int]]) -> int:
        if(len(intervals) == 1):
            return 1
        intervals.sort(key=lambda item: item[0])

        maxRoomOccupied = 0
        meetingEndTime = []
        for meeting in intervals:

            finishiedMeeting = bisect.bisect(meetingEndTime, meeting[0])
            meetingEndTime = meetingEndTime[finishiedMeeting:]

            meetingInsertedPosition = bisect.bisect(meetingEndTime, meeting[1])
            meetingEndTime = meetingEndTime[:meetingInsertedPosition] + [
                meeting[1]] + meetingEndTime[meetingInsertedPosition:]

            maxRoomOccupied = max(maxRoomOccupied, len(meetingEndTime))

        return maxRoomOccupied


solution = Solution()
r = solution.minMeetingRooms([[1, 35], [4, 18], [12, 45], [22, 27], [25, 46]])
print(r)
