# https://www.youtube.com/watch?v=xli_FI7CuzA
def bubbleSort(array: list[int]) -> list[int]:
    if(len(array) <= 1):
        return array
    for i in range(len(array)):
        for j in range(1, len(array)):
            if(array[j] < array[j-1]):
                temp = array[j]
                array[j] = array[j-1]
                array[j-1] = temp
    return array


r = bubbleSort([3, 3213, 13, 13, 432, 113, 244, 2, 1])
print(r)
