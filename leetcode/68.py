import math


class Solution:
    def fullJustify(self, words, maxWidth):
        def mergeWord(levelWords, wordCount, maxSize):
            if(len(levelWords) == 1):
                return words[0] + "".join([" "]*(maxSize-wordCount))
            else:
                result = ""

                baseSpace = int(math.floor(
                    (maxSize-wordCount) / (len(levelWords) - 1)))

                longLeftSection = (maxSize-wordCount) % (len(levelWords)-1)

                # print(f"baseSp: {baseSpace}")
                # print(f"longLeftSection: { longLeftSection}")

                p = 0
                while p < longLeftSection:
                    result += levelWords[p] + "".join([" "]*(baseSpace+1))
                    p += 1
                    # print(f"1w:{result}")

                while p < len(levelWords):
                    result += levelWords[p] + "".join([" "]*(baseSpace))
                    p += 1
                    # print(f"1w:{result}")

                result = result[:maxWidth]
                return result

        paragraph = []
        level = []
        levelCharCount = 0

        for word in words:
            if len(word) + levelCharCount + len(level) < maxWidth:
                level.append(word)
                levelCharCount += len(word)
            else:
                paragraph.append(level)
                level = [word]
                levelCharCount = len(word)

        for index, item in enumerate(paragraph):
            paragraph[index] = mergeWord(item, len("".join(item)), maxWidth)

        print(level)
        print(" ".join(level))
        paragraph.append(
            mergeWord([" ".join(level)], len(" ".join(level)), maxWidth))
        return paragraph
