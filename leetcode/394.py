class Solution:
    def decodeString(self, s):
        result = ""
        repetition = ""
        lock = 0
        lockIndex = None
        for i in range(0, len(s)):

            if s[i] == "[":
                lock += 1
                if lockIndex == None:
                    lockIndex = i
            elif s[i] == "]":
                lock -= 1
                if lock == 0:

                    localResult = self.decodeString(s[lockIndex+1:i])
                    lockIndex = None

                    if len(repetition):
                        repetition = int(repetition)
                        while repetition > 0:
                            result += localResult
                            repetition -= 1
                        repetition = ""

            elif lock == 0:
                if ord("0") <= ord(s[i]) <= ord("9"):
                    repetition += s[i]
                else:
                    result += s[i]

        return result


s = Solution()
r = s.decodeString("3[a2[c]]")
print(r)
