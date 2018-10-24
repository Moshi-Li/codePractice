/*
id = 10

youtueb： https://www.youtube.com/watch?v=qza1UKNHAys&t=786s
*/


/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */


var isMatch = function(s, p) {
    s = s.split('')
    p = p.split('')
    var dp = []
    for (var i = 0; i < p.length + 1; i++) {
        dp.push([]);
        for (var j = 0; j < s.length + 1; j++ ) {
            dp[i].push(false);
        }
    }


    
    dp[0][0] = true;
    
    for (var i = 0; i < p.length; i++) {
        if (p[i] === '*') {
            dp[i+1][0] = dp[i-1][0];
        }
    }



    for (var i = 1; i < dp.length; i++) {
        for (var j = 1; j < dp[i].length; j++) {
            if (p[i - 1] === ".") {
                dp[i][j] = (dp[i-1][j-1])
            }
            else if (p[i - 1] === "*") {
                if ( p[i-2] != s[j-1] && p[i-2] != '.') {
                    dp[i][j] = dp[i-2][j]
                }
                else {
                    dp[i][j] = dp[i][j-1] || dp[i-2][j]
                }
            }

            else {
                dp[i][j] = (p[i-1] === s[j - 1]) && (dp[i-1][j-1])
            }
        }
    }
    
    console.log(dp)
    return dp[p.length][s.length]
}



console.log(isMatch("aaa","ab*a*c*a"))