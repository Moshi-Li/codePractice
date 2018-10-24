var romanToInt = function(s) {
    var T = new Object();
    T['I'] = 1;
    T['V'] = 5;
    T['X'] = 10;
    T['L'] = 50;
    T['C'] = 100;
    T['D'] = 500;
    T['M'] = 1000;

    if (s.length === undefined || s.length < 1) {return "error"}

    if (s.length === 1) {
        if (T[s[0]] === undefined) {return "error"}
        return T[s[0]];
    }

    var arr = s.split('');
    var num = T[s[0]];
    
    
    
    for (var i = 1; i < s.length; i++) {

        if (T[s[i]] === undefined) {return "error"}
        num += T[s[i]];
        if (T[s[i]] > T[s[i - 1]]) {num -= T[s[i - 1]] * 2}

        
    }
    return num;

};