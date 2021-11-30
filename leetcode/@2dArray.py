# [[0]*column for i in range(row)]
array = [[0]*2 for i in range(3)]
print(array)
for index, item in enumerate([100, 200]):
    print(index)
    print(item)
values = []
values.sort(key=lambda node: node.val)
