/*  Space:  O(N)
 *  Time:   O(N*logN)
 * 
 */

function mergesort(array) {
    function merge(left, right) {
        var l = 0, r = 0, array = [];
        while (l < left.length && r < right.length) {
            if (left[l] < right[r]) {
                array.push(left[l]); 
                l++
            }
            else {
                array.push(right[r]); 
                r++
            }
        }
        return array.concat(left.slice(l)).concat(right.slice(r));
    }


    if (array.length < 2) {return array}

    var mid = Math.floor(array.length/2)
    
    var left = array.slice(0, mid)
    var right = array.slice(mid)

    return merge(mergesort(left), mergesort(right));

}


function wetDry(M, W) {
    W.sort(function(a,b){ return M[b]-M[a]});
    var result = new Array(M.length).fill(0)
    for (var i = 0; i < W.length; i++) {
        var pos = W[i];

        if (result[pos] === 0) {
            var left = pos;
            while (left >= 0 && M[pos] >= M[left]) {
                result[left] = 1;
                left--;
            }   

            var right = pos;
            while (right <= M.length && M[pos] >= M[right]) {
                result[right] = 1;
                right++;
            }   
        }
    }
    console.log(result)
}

var m = [1]
var w = [0]

//wetDry(m,w)

function bustProb(sum) {
    console.log(sum)
    if (sum > 21) {return 1}
    if (17 <= sum && sum <= 21) {return 0};

    var arr = [sum];

    var bust_c = 0;
    var safe_c = 0;

    while (arr.length > 0) {
        //console.log(arr);
        var new_arr = [];
        for (var j = 0; j < arr.length; j++) {
            for (var i = 1; i < 11; i++) {
                if (arr[j] + i > 21) {bust_c++}
                else if (17 <= arr[j]+i && arr[j]+i <= 21) {safe_c++}
                else{new_arr.push(arr[j]+i)}
            }
        }

        arr = new_arr;
        
    }

    return (bust_c/ (bust_c+safe_c));
}
for (var i = 1; i < 22; i++) {
    console.log(bustProb(i))
}
