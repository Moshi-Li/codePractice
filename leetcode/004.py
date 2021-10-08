import math


class Solution:
    def findMedianSortedArrays(self, nums1: list[int], nums2: list[int]) -> float:
        indexA = 0
        indexB = 0
        sortedArray = []

        while indexA < len(nums1) or indexB < len(nums2):
            if indexA == len(nums1):
                sortedArray.append(nums2[indexB])
                indexB = indexB+1
            elif indexB == len(nums2):
                sortedArray.append(nums1[indexA])
                indexA = indexA+1
            else:
                if nums1[indexA] < nums2[indexB]:
                    sortedArray.append(nums1[indexA])
                    indexA = indexA + 1
                else:
                    sortedArray.append(nums2[indexB])
                    indexB = indexB + 1

        length = len(sortedArray)
        if length % 2 == 0:
            return (sortedArray[int(length/2)] + sortedArray[int(length/2)-1])/2
        else:
            return sortedArray[int(math.floor(length/2))]


solution = Solution()
r = solution.findMedianSortedArrays([1, 2, 3, 4], [3, 4, 5, 6])
print(r)
