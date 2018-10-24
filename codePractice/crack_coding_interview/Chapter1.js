//1.1
function isUnique(str) {
    var arr = str.split('');
    arr.sort()
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            return false;
        }
    } 
    return true;
}

function isUnique_test() {
console.log("isUnique_test:")
console.log("Expect: true; Output: " + isUnique('abc'));
console.log("Expect: false; Output: " + isUnique('aba'));
}

//1.2

function isPermutation(str1, str2) {
    if (str1.length != str2.length) {
        return false;
    }
    if (str1.split('').sort().join('') != str2.split('').sort().join('')) {
        return false;
    }
    return true;
}

function isPermutation_test() {
console.log("isPermutation_test:")
console.log("Expect: true; Output: " + isPermutation('aab','baa'));
console.log("Expect: true; Output: " + isPermutation('aabcs','baasc'));
console.log("Expect: false; Output: " + isPermutation('adac','adwa'));


}


//1.3
function URLify(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === ' ') {
            arr[i] = '%20';
        }
    }
    return arr.join('');
}

function URLify_test() {
console.log("URLify_test:")
//console.log("Expect: true; Output: " + isPermutation('aab','baa'));
//console.log("Expect: true; Output: " + isPermutation('aabcs','baasc'));
}

//1.4
function palindromePermutation(str) {
    var table = new Object()
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != ' ') {
            if (table[arr[i]] === undefined) {
                table[arr[i]] = 1;
            }
            else {
                table[arr[i]] = table[arr[i]] + 1;
            }
        }
    }
    console.log(table)
    var count = 0;
    for (var i in table) {
        if (table[i] % 2 === 1) {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    return true;
}

//1.5

function oneAway(str1, str2) {

    function remove(arr, index) {
        arr.splice(index, 1);
    }
    function insert(arr, index, str) {
        arr.splice(index, 0, str);
    }

    var arr1 = str1.split('');
    var arr2 = str2.split('');

    var m_count = 0;

    var i = 0;

    while (i < arr1.length && i < arr2.length) {
        if (arr1[i] != arr2[i]) {
            if (arr1.length === arr2.length) {
                arr1[i] = arr2[i]
            }
            else if (arr1.length > arr2.length) {
                remove(arr1, i);
                i--;
            }
            else {
                insert(arr1, i, arr2[i]);
                i--
            }
            m_count++;
        }
        i++;
    }

    if (arr1.length > arr2.length) {
        m_count = m_count + arr1.length - arr2.length;
        arr1 = arr1.slice(0, arr2.length - 1);
    }

    if (arr1.length < arr2.length) {
        for (var i = arr1.length; i < arr2.length; i++) {
            arr1.push(arr2[i]);
            m_count++;
        }
    }

    if (m_count > 1) {
        return false
    }

    else {
        return true;
    }
}

//1.6 string compression;

function strCompression(str) {
    if (str.length < 2) {
        return str;
    }

    var my_str = '';
    var i = 1;
    var count = 1;
    while (i < str.length) {
        
        var char = str[i-1];
        if (str[i] != str[i-1]) {
            my_str = my_str + char + count;
            count = 1;
            i++;
        }
        else {
            count++;
            i++
        }

    }

    my_str = my_str + char + count;

    if (my_str.length > str.length) {
        return str;
    }
    else {
        return my_str;
    }

}

//1.7
function rotateMatrix(M) {
    if (M.length === 0 || M.length != M[0].length) {
        return "Invalid Input";
    }


}

//1.9 
function isSubstring(str1,str2) {
    if (str1.length != str2.length) {
        return false;
    }
    if (str1===str2) {
        return true;
    }

    for (var i = 1; i < str1.length; i++) {
        var left = str1.slice(0, i);
        var right = str1.slice(i, str1.length);

        if (right+left === str2) {
            return true;
        }
    }
    return false;
}

//Main
function main() {
    //isUnique_test();
    //isPermutation_test();
    //URLify_test()
    //console.log(palindromePermutation('tct cad'))
    //console.log(oneAway('21345', '12345'))
    //console.log(strCompression('aa'))

    console.log(isSubstring('ab', 'ba'));
}

main();
