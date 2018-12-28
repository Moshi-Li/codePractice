
//Sliding Window
function lengthOfLongestSubstring(S) {
    var table = new Object();
    var max = 0;
    var i = 0;
    var j = 0

    while (j < S.length) {
        if (table[S[j]] === undefined) {
            table[S[j]] = true;
            
            max = Math.max(max, j-i+1);
            j++;
        }

        else {
            delete table[S[i]];
            i++;
        }
    }
    return max;
}