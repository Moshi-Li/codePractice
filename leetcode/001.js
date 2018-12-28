function twoSum(A, target) {
    var table = new Object();
    for (var i = 0; i < A.length; i++) {
        var diff = target - A[i];
        if (table[diff] != undefined) {
            return [table[diff], i]
        }
        else {
            table[A[i]] = i;
        }
    }
    return [-1,-1];
}