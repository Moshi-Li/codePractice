class MyQueue {
    constructor() {
        this.stack_1 = [];
        this.stack_2 = [];
    }

    enqueue(value) {
        this.stack_1.push(value);
    }
    dequeue() {
        if (this.stack_2.length === 0) {
            this.stack_2 = this.stack_1.reverse();
            this.stack_1 = [];
        }
        return this.stack_2.pop()
    }
    
    front() {
        if (this.stack_2.length === 0) {
            this.stack_2 = this.stack_1.reverse();
            this.stack_1 = [];
        }
        var value = this.stack_2.pop();
        this.stack_2.push(value)
        return value;
    }

    size() {
        return this.stack_1.length + this.stack_2.length;
    }

    print() {
        for (var i = this.stack_2.length-1; i >= 0; i--) {
            console.log(this.stack_2[i])
        }
        for (var i = 0; i < this.stack_1.length; i++) {
            console.log(this.stack_1[i])
        }
    }
}


//isSubsequence;
function isSubsequence(str1, str2) {
    if (str1.length > str2.length) {return false}

    var i = 0;
    var j = 0;
    var count = 0

    while (i < str1.length && j < str2.length ) {
        if (str1[i] != str2[j]) {
            j++;
        }
        else {
            count++;
            j++;
            i++;
        }
    }

    if (count === str1.length) {
        return true;
    }
    else {
        return false;
    }
}

function roof(M) {
    console.log(M)
    function neighbor(r, c) {

        //left
        var result = []
        if (r-1 > -1 && M[r-1][c] === 1) {
            result.push([r-1,c])
        }
        //right
        if (r+1 < M.length && M[r+1][c] === 1) {
            result.push([r+1,c])
        }

        //top
        if (c-1 > -1 && M[r][c-1] === 1) {
            result.push([r,c-1])
        }

        if (c+1 < M[0].length && M[r][c+1]) {
            result.push([r,c+1])
        }
        return result;
    }
    var Q = new MyQueue();
    var table = new Object();
    for (var i = 0; i < M[0].length; i++) {
        if (M[0][i] === 1){Q.enqueue([0,i])}
    }

    while (Q.size() != 0) {
        var cur = Q.dequeue();

        var neighbors = neighbor(cur[0], cur[1]);

        table['' + cur[0] + ',' + cur[1] ] = [cur[0],cur[1]];

        for (var i = 0; i < neighbors.length; i++) {
            if (table['' + neighbors[i][0] + ',' + neighbors[i][1]] === undefined) {
                Q.enqueue(neighbors[i])
                table['' + neighbors[i][0] + ',' + neighbors[i][1]] = [neighbors[i][0], neighbors[i][1]];
            }
        }
    }


    
    for (var i = 0; i < M.length; i++) {
        for (var j = 0; j < M[0].length; j++) {
            M[i][j] = 0;
        }
    }

    for (var i in table) {
        var pos = table[i];
        M[pos[0]][pos[1]] = 1
    }
    console.log(M)
    return M;
    
}




//1。 用+或者- 连接一串小数，使得结果在0-0.12之间。返回所有组合。用的dfs。







