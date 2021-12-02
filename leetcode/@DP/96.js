/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  if (n === 0 || n === 1) return n;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;
  for (let i = 2; i < dp.length; i++) {
    let count = 0;
    for (let j = 0; j < i; j++) {
      //j, i-1-j
      count += (j === 0 ? 1 : dp[j]) * (i - 1 - j === 0 ? 1 : dp[i - 1 - j]);
    }
    dp[i] = count;
  }
  return dp[n];
};

console.log(numTrees(5));
