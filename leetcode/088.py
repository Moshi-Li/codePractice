class Solution:
    def merge(self, nums1, m, nums2, n) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """

        leftIndex = m-1
        rightIndex = n-1
        curIndex = m+n - 1

        while curIndex > -1:

            if leftIndex < 0:

                nums1[curIndex] = nums2[rightIndex]
                rightIndex -= 1
                curIndex -= 1
            elif rightIndex < 0:
                nums1[curIndex] = nums1[leftIndex]
                leftIndex -= 1
                curIndex -= 1
            elif nums1[leftIndex] >= nums2[rightIndex]:
                nums1[curIndex] = nums1[leftIndex]
                leftIndex -= 1
                curIndex -= 1
            elif nums1[leftIndex] < nums2[rightIndex]:
                nums1[curIndex] = nums2[rightIndex]
                rightIndex -= 1
                curIndex -= 1
