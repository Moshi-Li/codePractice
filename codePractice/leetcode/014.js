var longestCommonPrefix = function(strs) {
    if (strs.length ===undefined || strs.length < 1) {return ''}


    function findP(pre, str) {

        var temp = '';
        for (var i = 0; i < pre.length; i++) {
            if (pre[i] === str[i]) {
                temp += pre[i]
            }
            else {return temp}
        }
        return temp;

    }
    var prefix = strs[0];


    for (var i = 0; i < strs.length; i++) {

        prefix = findP(prefix, strs[i])
        if (prefix === '') {return prefix;}
    }

    return prefix;
};

var r = longestCommonPrefix(["flower","flow","flight"]);
//console.log(r);