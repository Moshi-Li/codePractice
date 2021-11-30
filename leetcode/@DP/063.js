/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const getItem = (row, column) => {
    if (row < 0 || column < 0) return 0;
    else {
      return dp[row][column];
    }
  };

  const rowLength = obstacleGrid.length;
  const columnLength = obstacleGrid[0].length;
  if (obstacleGrid[0][0] === 1) return 0;

  const dp = Array.from(Array(rowLength), () => new Array(columnLength));

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (obstacleGrid[i][j]) {
        dp[i][j] = 0;
      } else {
        dp[i][j] = getItem(i - 1, j) + getItem(i, j - 1);
      }
    }
  }
  return dp[rowLength - 1][columnLength - 1];
};

Array.from(Array(1));
