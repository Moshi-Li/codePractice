class Solution:
    def decodeString(self, s):
        def build(self, s):
            if s[-1] != "]":
                return s
            else:
                temp = 0
                repitation = ""
                while temp < len(s):
                    if s[temp] == "[":
                        repitation = int(repitation)
                        return "".join(repitation * [build(s[temp + 1:len(s) - 1])])

                    temp += 1

        return build(s)
