class Solution:
    def groupAnagrams(self, strs: list[str]) -> list[list[str]]:
        itemMap = {}
        for item in strs:
            chars = list(item)
            chars.sort()

            if itemMap.get("".join(chars)):
                itemMap.get("".join(chars)).append(item)
            else:
                itemMap["".join(chars)] = [item]

        return list(itemMap.values())


solution = Solution()
r = solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
print(r)
