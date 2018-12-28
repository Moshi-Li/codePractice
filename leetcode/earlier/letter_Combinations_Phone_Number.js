/*
id 17

Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.


ex 
Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
*/

var letterCombinations = function(digits) {
    if (digits.length == 0) {
        return [];
    }
    
    var map = {
        1 : "",
        2 : "abc",
        3 : "def",
        4 : "ghi",
        5 : "jkl",
        6 : "mno",
        7 : "pqrs",
        8 : "tuv",
        9 : "wxyz",
        0 : " " 
    }

    stack = digits.split('').reverse();
    var to_return = map[stack.pop()].split('');

    while (stack.length != 0) {
        var new_arr = [];
        var next_num = map[stack.pop()].split('')
        for (var i = 0; i < to_return.length; i ++) {
            for (var j = 0; j < next_num.length; j++ ) {
                new_arr.push(to_return[i] + next_num[j])
            }
        }
        to_return = new_arr;
    }

    return to_return;


};

console.log(letterCombinations("23"))