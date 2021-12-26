class MyQueue:

    def __init__(self):
        self.toolArray = []
        self.itemArray = []

    def push(self, x: int) -> None:
        while len(self.itemArray):
            self.toolArray.append(self.itemArray.pop())

        self.toolArray.append(x)

        while len(self.toolArray):
            self.itemArray.append(self.toolArray.pop())

    def pop(self) -> int:
        return self.itemArray.pop()

    def peek(self) -> int:
        return self.itemArray[-1]

    def empty(self) -> bool:

        return len(self.itemArray) == 0
