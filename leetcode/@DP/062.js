/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  const getItem = (row, column) => {
    if (row < 0 || column < 0) return 0;
    else {
      return dp[row][column];
    }
  };

  const dp = Array.from(Array(m), () => new Array(n));

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = getItem(i - 1, j) + getItem(i, j - 1);
      }
    }
  }
  return dp[m - 1][n - 1];
};
