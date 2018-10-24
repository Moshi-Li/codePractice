var letterCombinations = function(digits) {
    var T = new Object();
    T[2] = ['a', 'b', 'c'];
    T[3] = ['d', 'e', 'f'];
    T[4] = ['g', 'h', 'i'];
    T[5] = ['j', 'k', 'l'];
    T[6] = ['m', 'n', 'o'];
    T[7] = ['p', 'q', 'r', 's'];
    T[8] = ['t', 'u', 'v']
    T[9] = ['w', 'x', 'y', 'z'];

    
    if (digits.length < 1) {return []}
    if (digits.length === 1) {return T[digits]}


    var arr = digits.split('');
    var result = T[digits[0]];

    for (var i = 1; i < digits.length; i++) {
        var digit = digits[i];

        if (T[digit] === undefined) {return 'error'}
        
        var new_result = []; 
        for (var j = 0; j < T[digit].length; j++) {
            for (var k = 0; k < result.length; k++) {
                new_result.push(result[k] + T[digit][j])
            }
        }


        result = new_result;
    }
    return result;
    
};
letterCombinations("23")

