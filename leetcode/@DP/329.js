/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
  const rowLength = matrix.length;
  const columnLength = matrix[0].length;
  const dp = Array.from(Array(rowLength), () =>
    new Array(columnLength).fill(
      new Object({
        increasing: 1,
        decreasing: 1,
      })
    )
  );

  let max = 0;

  for (let i = 0; i < rowLength; i++) {
    for (let j = 0; j < columnLength; j++) {
      if (i - 1 >= 0 && j - 1 >= 0) {
        const top = matrix[i - 1][j];
        const left = matrix[i][j - 1];
        dp[i][j] = {
          increasing: Math.max(
            matrix[i][j] > top
              ? dp[i - 1][j].increasing + 1
              : dp[i][j].increasing,
            matrix[i][j] > left
              ? dp[i][j - 1].increasing + 1
              : dp[i][j].increasing
          ),
          decreasing: Math.max(
            matrix[i][j] < top
              ? dp[i - 1][j].decreasing + 1
              : dp[i][j].decreasing,
            matrix[i][j] < left
              ? dp[i][j - 1].decreasing + 1
              : dp[i][j].decreasing
          ),
          diagonal: Math.max(
            ...(top < matrix[i][j] && matrix[i][j] < left
              ? [
                  dp[i][j - 1].decreasing + 1 + dp[i - 1][j].increasing,
                  j + 1 < columnLength
                    ? dp[i - 1][j + 1].decreasing -
                      dp[i - 1][j].decreasing +
                      2 +
                      dp[i][j - 1].decreasing
                    : 1,
                ]
              : [1]),
            ...(left < matrix[i][j] && matrix[i][j] < top
              ? [
                  dp[i - 1][j].decreasing + 1 + dp[i][j - 1].increasing,
                  j + 1 < columnLength
                    ? dp[i - 1][j + 1].increasing -
                      dp[i - 1][j].increasing +
                      2 +
                      dp[i][j - 1].increasing
                    : 1,
                ]
              : [1])
          ),
        };
      } else if (i - 1 >= 0 && j - 1 < 0) {
        debugger;
        dp[i][j] = {
          increasing: Math.max(
            matrix[i][j] > matrix[i - 1][j]
              ? dp[i - 1][j].increasing + 1
              : dp[i][j].increasing,
            dp[i][j].increasing
          ),
          decreasing: Math.max(
            matrix[i][j] < matrix[i - 1][j]
              ? dp[i - 1][j].decreasing + 1
              : dp[i][j].decreasing,
            dp[i][j].decreasing
          ),
        };
        debugger;
      } else if (i - 1 < 0 && j - 1 >= 0) {
        debugger;
        dp[i][j] = {
          increasing: Math.max(
            matrix[i][j] > matrix[i][j - 1]
              ? dp[i][j - 1].increasing + 1
              : dp[i][j].increasing,
            dp[i][j].increasing
          ),
          decreasing: Math.max(
            matrix[i][j] < matrix[i][j - 1]
              ? dp[i][j - 1].decreasing + 1
              : dp[i][j].decreasing,
            dp[i][j].increasing
          ),
        };
        debugger;
      }

      max = Math.max(
        max,
        dp[i][j].increasing,
        dp[i][j].decreasing,
        dp[i][j].diagonal ? dp[i][j].diagonal : 0
      );
    }
  }

  console.dir(dp);
  console.log(max);
  return max;
};

longestIncreasingPath([
  [1, 4, 7, 9],
  [0, 3, 8, 5],
]);
