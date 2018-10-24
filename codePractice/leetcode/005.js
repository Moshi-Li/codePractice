//brute force   O(n^3)
function longestPalindrome(S) {
    //[1,2,3]  1
    //[1,2,3,4]  2
    function isP(str) {
        if (str.length === 0) {return false}
        if (str.length === 1) {return true}

        var mid = Math.floor(str.length / 2);
        for (var i = 0; i < mid; i++) {
            if (str[i] != str[str.length-i-1]) {return false}
        }

        return true;
    }

    var result = '';
    for (var i = 0; i < S.length; i++) {
        for (var j = i; j < S.length; j++) {
            if (S[i] === S[j]) {
                var str = S.slice(i,j+1)
                if (str.length > result.length) {
                    if (isP(str)) {result = str}
                }
            }
        }
    }
    return result;
}

//expand from center   O(n^2)
function longestPalindrome(S) {
    function maxP(index, S) {
        var result = S[index];

        //Odd String
        var l = index - 1, r = index + 1;
        var r_l = index, r_r = index;

        while (l >= 0 && r < S.length && S[l] === S[r]) {
            r_l = l;
            r_r = r;

            l--;
            r++;
        };
        var temp = S.slice(r_l,r_r+1);
        if (temp.length > result.length) {result = temp}

        //Even String
        l = index, r = index + 1;
        r_l = index, r_r = index;

        while (l >= 0 && r < S.length && S[l] === S[r]) {
            r_l = l;
            r_r = r;

            l--;
            r++;
        };

        temp = S.slice(r_l,r_r+1);
        if (temp.length > result.length) {result = temp}

        return result;

    }

    var result = ''
    for (var i = 0; i < S.length; i++) {
        var s = maxP(i, S);
        if (s.length > result.length) {result = s}
    }
    return result;
}

