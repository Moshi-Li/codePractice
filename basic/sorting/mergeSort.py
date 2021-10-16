# https://www.youtube.com/watch?v=4VqmGXwpLqc
import math


def mergeSort(array: list[int]) -> list[int]:
    if(len(array) <= 1):

        return array
    if(len(array) == 2):

        return [min(array[0], array[1]), max(array[0], array[1])]

    pivot = int(math.floor(len(array)/2))

    arrayLeft = mergeSort(array[:pivot])
    arrayRight = mergeSort(array[pivot:])

    result = []
    indexLeft = indexRight = 0
    while indexLeft < len(arrayLeft) and indexRight < len(arrayRight):
        if(arrayLeft[indexLeft] > arrayRight[indexRight]):
            result.append(arrayRight[indexRight])
            indexRight += 1
        else:
            result.append(arrayLeft[indexLeft])
            indexLeft += 1

    return result + arrayLeft[indexLeft:] + arrayRight[indexRight:]


r = mergeSort([3, 3213, 13, 13, 432, 113, 244, 2, 1])
print(r)
