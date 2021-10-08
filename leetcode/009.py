class Solution:
    def isPalindrome(self, x: int) -> bool:
        if (x < 0):
            return False
        charList = list(str(x))
        stringOriginal = "".join(charList)
        charList.reverse()
        stringReversed = "".join(charList)

        if(stringOriginal == stringReversed):
            return True
        return False


solution = Solution()
print(solution.isPalindrome(12321))
