

/*
    Dynamic programing;

    for ecah i in arr, find the largest sum containning i. 
    (consider i as the last element of subset)

*/

array = [1,2,3,-3,4,-6,9,3,-1,-5]
function max_sum_subset(arr) {
    var opt = []
    opt.push(arr[0]);

    for (var i = 1; i < arr.length; i++) {
        opt.push(Math.max( (opt[i-1] + arr[i]), arr[i]) );
    }
    return Math.max(...opt);
}

console.log(max_sum_subset(array));