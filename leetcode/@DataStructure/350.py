class Solution:
    def intersect(self, nums1: list[int], nums2: list[int]) -> list[int]:
        hashA = {}
        hashB = {}
        for num in nums1:
            hashA[num] = hashA.get(num)+1 if hashA.get(num) else 1
        for num in nums2:
            hashB[num] = hashB.get(num)+1 if hashB.get(num) else 1

        result = []
        for key in list(set(list(hashA.keys())+list(hashB.keys()))):
            if(hashA.get(key) and hashB.get(key)):
                result = result + [key] * min(hashA.get(key), hashB.get(key))
        return result


solotion = Solution()
r = solotion.intersect([1, 2, 3, 1], [1, 1, 2])
print(r)
