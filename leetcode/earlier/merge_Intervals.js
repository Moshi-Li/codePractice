// id = 56;

var merge = function(intervals) {
    console.log(intervals)
    function my_merge(arr) {
        for (var i = 0; i < arr.length - 1; i ++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i][1] >= arr[j][0] && arr[j][1] >= arr[i][0]) {
                    console.log(i)
                    console.log(j)
                    arr[j][0] = Math.min(arr[i][0],arr[j][0])
                    arr[j][1] = Math.max(arr[i][1],arr[j][1])
                    arr.splice(i,1)
                    
                    console.log(arr)
                    return my_merge(arr);
                }
            }
        }
        return arr;
    }
    
    
    return my_merge(intervals)
};

console.log(merge([[2,3],[5,5],[2,2],[3,4],[3,4]]))