# https://www.youtube.com/watch?v=g-PGLbMth_g&t=76s


def selectionSort(array: list[int]) -> list[int]:
    for i in range(len(array)):
        minNumber = array[i]
        minNumberIndex = i
        for j in range(i, len(array)):
            if array[j] < minNumber:
                minNumber = array[j]
                minNumberIndex = j

        temp = array[i]
        array[i] = array[minNumberIndex]
        array[minNumberIndex] = temp
    return array


print(selectionSort([3, 3213, 13, 13, 432, 113, 244, 2, 1]))
