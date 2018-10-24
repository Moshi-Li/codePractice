/*  Space:  O(logN)
 *  Time:   O(N*logN) | O(N^2)
 * 
 */
function quickSort(arr) {

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function swap (arr, left, right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
    }

    function partition(arr, pivot, left, right) {
        var pivot_value = arr[pivot];
        swap(arr, pivot, right)
        var partitionIndex = left;
        for (var i = left; i < right; i++) {
            if(arr[i] < pivot_value) {
                swap(arr, i, partitionIndex);
                partitionIndex++;
            } 
        }
        swap(arr, partitionIndex, right);
        return partitionIndex;
    }

    function sort(arr, left, right) {
        if (left < right) {
            var pivot = getRandomInt(left,right)
            var partitionIndex = partition(arr, pivot,left,right);

            sort(arr, left, partitionIndex - 1);
            sort(arr, partitionIndex + 1, right);

            
        }
        return arr;
    }

    return sort(arr, 0, arr.length -1);

}


var arr = [11,8,14,3,6,2,7];

console.log(quickSort(arr));
