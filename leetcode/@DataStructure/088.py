class Solution:
    def merge(self, nums1: list[int], m: int, nums2: list[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        for index in range(m, m+n):
            nums1[index] = nums2[index-m]

        nums1.sort()
