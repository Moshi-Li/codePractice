class Node{
    constructor(char, isLeaf) {
        this.char = char;
        this.isLeaf = isLeaf;
        this.child = new Object();
    }
}

function getObjectSize(obj) {
    var count = 0;
    for (var i in obj) {
        count++;
    }
    return count;
}

class Tries {
    constructor() {
        this.root = new Node('', false)
    }

    insert(key) {
        
        var arr = key.split('');
        var child = this.root.child;
        var next;
        for (var i = 0; i < arr.length; i++) {
            if (child[arr[i]] != undefined) {
                next = child[arr[i]];
            }
            else {
                if (i === arr.length - 1 ) {
                    next = new Node(arr[i], true)
                    child[arr[i]] = next;
                }
                else {
                    next = new Node(arr[i], false)
                    child[arr[i]] = next;
                }
            }
            child = next.child;
        } 
        
    }


    search(str) {
        var child = this.root.child;
        var node = this.root;
        for (var i = 0; i < str.length; i++) {
            if (child[str[i]] === undefined) {
                return false;
            }
            
            if (i=== str.length - 1 && child[str[i]].isLeaf === true) {
                return true;
            } 
            child = child[str[i]].child;
        }
        return false;
    }

    getMaxH(child) {
        console.log(child)
        if (getObjectSize(child) === 0) {
            return 1;
        }

        var max = -1;
        for (var i in child) {
            var temp = this.getMaxH(child[i].child)
            if (temp > max){max = temp}
        }
        console.log(max)

        return max+1;
        
    }
    getMax() {
        var child = this.root.child;
        if (getObjectSize(child) === 0) {return 0};

        while (getObjectSize(child) === 1) {
            if (getObjectSize(child) === 0) {return 0};
            var temp;
            for (var i in child) {
                temp = i;
            }
            child = child[temp].child;
        }

        console.log(child)
        var largest = 0;
        var second = 0;
        for (var i in child){
            var temp = this.getMaxH(child[i].child);
            if (temp >= largest) {
                console.log("t:" + temp)
                second = largest;
                largest = temp;
            }
        }
        console.log(largest)
        console.log(second)
        return largest + second;
        
    }

    print() {
        var arr = [this.root];

        while (arr.length != 0) {
           
            var str = '['

            for(var j = 0; j < arr.length; j++) {
                str += arr[j].char + ','
            }
            str = str.split('');
            str[str.length - 1] = ']';
            str = str.join('')
            console.log(str);

            
            var new_arr = [];
            for (var i = 0; i < arr.length; i++) {
                for (var next in arr[i].child) {
                    new_arr.push(arr[i].child[next]);
                }
            }

            arr = new_arr;
        }
    }
}
/*
var head = new Tries()
head.insert('1101')

head.insert('11011')


head.print()
head.getMax()
*/


function findMissing(A) {
    var table = new Object();
    for (var i = 0; i < A.length; i++) {
        table[A[i]] = true;
    }
    console.log(table)
    var i = 1;
    var result = [];
    while (i < 100) {
        //console.log(i)
        if (table[i] === undefined) {
            var start = i;
            while (table[i] === undefined && i < 100) {
                console.log(i)
                i++;
            }
            var end = i-1;
            result.push([start, end]);
        }
        i++;
    }
    return result;
}


function wordPatternMatch(P, S) {
    function isMatch(pattern, str, map) {
        if (pattern.length === 1) {
            if (map[pattern] === undefined) {
                for (var i in map) {
                    if (map[i] === str) {return false}
                }
                return true;
            }
            if (map[pattern] === str) {return true}
            else {return false}
        }


        var p = pattern[0]
        if (map[p] != undefined) {
            var word = map[p]

            if (word.length > str.length) {return false}

            if (str.slice(0, word.length) === word) {
                var new_pattern = pattern.slice(1)
                var new_str = str.slice(word.length)
                return isMatch(new_pattern, new_str,map)
            }
        }

        else {

            for (var i = 1; i < str.length; i++) {

                var word = str.slice(0,i)
                map[p] = word;

                var new_pattern = pattern.slice(1)
                var new_str = str.slice(word.length)


                if (isMatch(new_pattern, new_str,map)) {
                    return true;
                }

                delete map[p]
            }
        }

        return false;
    }
    var M = new Object();
    if (P==='' && S==='') {return true}
    if (P==='' || S==='') {return false}

    console.log(isMatch(P, S, M));
}

//wordPatternMatch('aab', 'aaab')


function circusTower (A) {
    function canPut(first, second) {
        if (second[0] < first[0] && second[1] < first[1]) {
            return true;
        }
        return false;
    }

    A.sort(function(a,b) {return (b[0]*b[1]) - (a[0]*a[1])})
    console.log(A)
    var dp = []
    for (var i = 0; i < A.length; i++) {dp.push(1)}
    
    for (var index = 0; index < A.length-1; index++) {
        var i = index;
        var j = index + 1

        while (i < j && j < A.length) {

            if (canPut(A[i],A[j])) {

                dp[j] = dp[i] + 1

                /*
                while (i < j) {
                    if (canPut(A[i],A[j])) {
                        dp[j] = Math.max(dp[j], dp[i]+1);
                        i++
                    }
                    else {
                        break;
                    }

                }
                i = index;
                */
                j++
            }
            else {
                j++
            }
        }
    }
    console.log(dp)
}


circusTower([[1,1],[2,2],[3,3],[5,5]]) 

/*
[ [ 3, 3 ], [ 2, 2 ], [ 1, 1 ] ]

    1         2           2

*/


// abcd
// aabbccdd

//N(N-1)(N-2)