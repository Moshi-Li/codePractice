

class Node:
    def __init__(self, key=None, value=None, frequency=None, preNode=None, nextNode=None) -> None:
        self.preNode = preNode
        self.nextNode = nextNode
        self.key = key
        self.value = value
        self.frequency = frequency


class LFUCache:

    def __init__(self, capacity: int):
        self.capacity = capacity
        self.length = 0
        self.data = {}
        self.frequencies = {}
        self.minFrequency = 0

    def get(self, key):
        if self.data.get(key):
            item = self.data.get(key)

            head, tail = self.frequencies.get(item.frequency)

            item.preNode.nextNode = item.nextNode
            item.nextNode.preNode = item.preNode

            if head.nextNode is tail and tail.preNode is head and item.frequency == self.minFrequency:
                self.minFrequency += 1

            item.frequency += 1

            if self.frequencies.get(item.frequency):
                head = self.frequencies.get(item.frequency)[0]
                head.nextNode.preNode = item
                item.nextNode = head.nextNode
                head.nextNode = item
                item.preNode = head

            else:
                headNode = Node()
                tailNode = Node()
                headNode.nextNode = item
                item.preNode = headNode
                tailNode.preNode = item
                item.nextNode = tailNode

                self.frequencies[item.frequency] = [headNode, tailNode]

            return item.value
        else:
            return -1

    def put(self, key, value) -> None:
        if self.capacity == 0:
            return
        if self.get(key) != -1:
            self.data.get(key).value = value
        else:
            self.addNew(key, value)

    def addNew(self, key, value):
        if self.length == self.capacity:
            head, tail = self.frequencies.get(self.minFrequency)
            itemToRemove = tail.preNode
            itemToRemove.preNode.nextNode = itemToRemove.nextNode
            itemToRemove.nextNode.preNode = itemToRemove.preNode

            del self.data[itemToRemove.key]
            self.length -= 1

        item = Node(key, value, 1)
        if self.frequencies.get(1):
            head = self.frequencies.get(item.frequency)[0]
            head.nextNode.preNode = item
            item.nextNode = head.nextNode
            head.nextNode = item
            item.preNode = head
        else:
            headNode = Node()
            tailNode = Node()
            headNode.nextNode = item
            item.preNode = headNode
            tailNode.preNode = item
            item.nextNode = tailNode

            self.frequencies[1] = [headNode, tailNode]

        self.data[key] = item
        self.minFrequency = 1
        self.length += 1

    def print(self):
        print("========")
        print(f"length: {self.length} minF:{self.minFrequency}")
        print("data: ")
        print(self.data)
        print("frenquencies")
        print(self.frequencies)

# Your LFUCache object will be instantiated and called as such:
# obj = LFUCache(capacity)
# param_1 = obj.get(key)
# obj.put(key,value)


cache = LFUCache(2)
cache.get(3)

cache.put(3, 333)
cache.put(3, 333)


cache.put(1, 1)
cache.put(2, 2)

print(cache.get(1))

cache.print()
