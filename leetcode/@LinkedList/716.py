import bisect


class MaxStack:

    def __init__(self):
        self.data = []

    def push(self, x: int) -> None:
        self.data.append(x)

    def pop(self) -> int:
        return self.data.pop()

    def top(self) -> int:
        return self.data[-1]

    def peekMax(self) -> int:
        return max(self.data)

    def popMax(self) -> int:
        maxNum = max(self.data)
        index = -1
        for i, item in enumerate(self.data):
            if maxNum == item:
                index = i

        self.data = self.data[:index] + self.data[index+1:]
        return maxNum
