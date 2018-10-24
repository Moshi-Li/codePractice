//1.1
function tripleStep(N) {
    console.log(N)
    if (N === 1) {return 1}
    if (N === 2) {return 2}
    if (N === 3) {return 4}

    var data = [];
    data.push(1);
    data.push(2)
    data.push(4)

    for (var i = 3; i < N; i++) {
        var temp = data[i-1] + data[i-2] + data[i-3];
        data.push(temp)
    }
    console.log(data)

    return data[N-1]
}


//8.4

function powerSet(Set) {
    function getCopy(array) {
        var arr = [];
        for (var i = 0; i < array.length; i++) {
            arr.push(array[i])
        }
        return arr;
    }
    if (Set.length === 0) {return []};
    if (Set.length === 1) {return [Set]};

    var last = Set.pop();

    var combination = powerSet(Set);
    //console.log(combination);
    var new_combination = []
    for (var i = 0; i < combination.length; i++) {
        var n = getCopy(combination[i]);
        n.push(last)
        new_combination.push(n);
    }
    new_combination.push([last]);
    new_combination = combination.concat(new_combination);
    new_combination = new_combination.sort(function(a,b){
        return a.length - b.length
    });

    return new_combination; 
}


// 8.6 
function Parens(N) {
    function parse(table) {
        var array = []
        for(var i in table) {
            array.push(table[i])
        }
        return array;
    }

    function getCombination(str1, str2) {
        var arr = [];
        for(var i = 0; i < str1.length; i++) {
            var new_str = [str1.slice(0,i), str2, str1.slice(i)].join('')
            arr.push(new_str)
        }
        return arr;
    }

    //console.log(getCombination('(())','()'));

    if (N===0) {return ''};
    var table = new Object();
    table['()'] = '()';

    var array = [table];


    for (var i = 1; i < N; i++) {
        var pre_table = array[i-1];

 
        var cur_table = new Object();
        for (var str in pre_table) {

            var temp = getCombination(str,'()');
            for (var k = 0; k < temp.length; k++) {
                cur_table[temp[k]] = temp[k]
            }
        }
        array.push(cur_table);
    }

    var result = parse(array[N-1]);

    console.log(result.length)
    return result;
}


//8.11
function coins(N) {
    if( N < 5 ) {
        return 1;
    }
    var coin = [5,10,15,25]
    var dp = [1]
    for (var i = 1; i < N+1; i++) {
        dp.push(1)
    }

    for (var i = 0; i < coin.length; i++) {
        for (var j = 1; j < N+1; j++) {
            if (j >= coin[i]) {
                dp[j] = dp[j] + dp[j-coin[i]]
            }
        }
    }
    return dp[N]
}

//8.12   8 queens

function NQueens(N) {
    function isSafe(array, r, c) {
        for (var i = 0; i < array.length; i++) {
            if (r === array[i][0] || c === array[i][1]) {
                return false;
            }
            if (Math.abs(r-array[i][0]) === Math.abs(c-array[i][1])) {
                return false
            }
        }
        return true;
    }

    function placeAt(array, c, result, N) {    

        for (var i = 0; i < N; i++) {

            if (isSafe(array, i, c)){                
                array.push([i,c])
                if (c === N - 1) {
                    console.log('=======IN!!!!!!!!!')
                    var copy = array.slice()
                    result.push(copy)
                    console.log(result)
                    console.log('=======IN!!!!!!!!!')
                }
                else {
                   placeAt(array, c+1,result, N)
                }
                array.pop();
            }
        }
    } 

    var result = []
    placeAt([], 0, result, N);
    console.log(result)
}


//8.13 stack of Boxes


//8.14 Boolean Expression


function main() {
    NQueens(4);
}

main();





