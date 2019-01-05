const findSubstring = (s, words) => {
    const isMatch = (counter, str, wordLength) => {
        var left = 0;
        var right = wordLength;
        while (right <= str.length) {
            var temp = str.substring(left, right);
            if (counter[temp] === undefined || counter[temp] < 1) {
                return false;
            } else {
                counter[temp]--;
                counter._count--;
                left += wordLength;
                right += wordLength;
            }
        }
        return counter._count === 0 ? true : false;
    };

    if (words.length < 1) return [];
    const wordLength = words[0].length;
    var Counter = {
        _count: 0
    };

    words.map((entry) => {
        Counter[entry] === undefined ? (Counter[entry] = 1) : Counter[entry]++;
        Counter._count++;
    });

    var result = [];

    for (var i = 0; i <= s.length - wordLength * words.length; i++) {
        var stringSection = s.substring(i, i + wordLength * words.length);
        var counter = { ...Counter };
        isMatch(counter, s.substring(i, i + wordLength * words.length), wordLength) ? result.push(i) : () => { };
    }

    return result;
};

//"barfoothefoobarman"
//["foo","bar"]
findSubstring("barfoothefoobarman", ["foo", "bar"])