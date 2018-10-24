var wordBreak = function(s, wordDict) {
    var table = [];
    for (var i = 0; i < s.length; i++) {
        var sub = s.substring(0,i+1)

        if (wordDict.includes(sub)) {
            if (i+1 === s.length) {
                table.push(true);
            }
            else {
                table.push(true && wordBreak(s.substring(i+1), wordDict));
            }
        }
    }
    table.push(false);

    for (var i = 0; i < table.length; i++) {
        if (table[i] === true) {
            return true;
        }
    }
    return false;
};

console.log(wordBreak("aaaaaaa", ["aaa","aaaa"]));