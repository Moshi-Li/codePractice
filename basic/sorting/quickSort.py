# https://www.youtube.com/watch?v=Hoixgm4-P4M&t=2s
import math


def quickSort(array: list[int]) -> list[int]:
    if(len(array) <= 1):
        return array
    if(len(array) == 2):
        return [min(array[0], array[1]), max(array[0], array[1])]

    pivot = array[int(math.floor(len(array)/2))]
    largerNumbers = []
    smallerNumbers = []
    for number in array:
        if(number < pivot):
            smallerNumbers.append(number)
        elif(number > pivot):
            largerNumbers.append(number)

    return quickSort(smallerNumbers)+[pivot]+quickSort(largerNumbers)


print(quickSort([3, 3213, 13, 13, 432, 113, 244, 2, 1]))
