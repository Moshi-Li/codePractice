/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const isSquare = (n) => {
    return n > 0 && Math.sqrt(n) % 1 === 0;
  };

  if (isSquare(n)) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;

  for (let i = 2; i < dp.length; i++) {
    if (isSquare(i)) dp[i] = 1;
    else {
      let min = Number.MAX_VALUE;
      for (let j = 1; j < i; j++) {
        min = Math.min(dp[j] + dp[i - j], min);
      }
      dp[i] = min;
    }
  }

  return dp[n];
};

console.log(numSquares(13));
