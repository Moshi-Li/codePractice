var removeDuplicateLetters = function(s) {
    s = s.split('')
    var table = new Object()
    
    for (var i = 0; i < s.length; i++) {
        table.hasOwnProperty(s[i]) ? table[s[i]] ++ : table[s[i]] = 1
    }
    
    console.log(table);
    for (var i = 0; i < s.length; i++) {
        if (table[s[i]] > 1) {

            table[s[i]]--;
            s.splice(i,1)
            i--;
        }
    }
    
    console.log(table);
    return s.sort().join('')
};

var a = removeDuplicateLetters("cbacdcbc")
console.log(a)