var findPaths = function (m, n, maxMove, startRow, startColumn) {
  const dfs = (row, column, maxMove) => {
    if (row < 0 || row >= m || column < 0 || column >= n) {
      return 1;
    } else if (maxMove === 0) {
      return 0;
    } else {
      const result =
        dfs(row + 1, column, maxMove - 1) +
        dfs(row - 1, column, maxMove - 1) +
        dfs(row, column + 1, maxMove - 1) +
        dfs(row, column - 1, maxMove - 1);

      //cache[`${row},${column},${maxMove}`] = result;
      return result;
    }
  };
  const cache = {};
  return dfs(startRow, startColumn, maxMove);
};

console.log(findPaths(8, 50, 23, 5, 26));
