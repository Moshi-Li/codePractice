var maxKilledEnemies = function (grid) {
  const rowLength = grid.length;
  const columnLength = grid[0].length;
  const dp = Array.from(Array(rowLength), () =>
    new Array(columnLength)
      .fill(0)
      .map(() => new Object({ left: 0, right: 0, top: 0, down: 0 }))
  );

  for (let i = 0; i < rowLength; i++) {
    let count;
    count = 0;
    for (let j = 0; j < columnLength; j++) {
      if (grid[i][j] === "0") dp[i][j].left = count;
      else if (grid[i][j] === "E") count++;
      else count = 0;
    }

    count = 0;
    for (let j = columnLength - 1; j >= 0; j--) {
      if (grid[i][j] === "0") dp[i][j].right = count;
      else if (grid[i][j] === "E") count++;
      else count = 0;
    }
  }

  for (let j = 0; j < columnLength; j++) {
    let count;
    count = 0;
    for (let i = 0; i < rowLength; i++) {
      if (grid[i][j] === "0") dp[i][j].top = count;
      else if (grid[i][j] === "E") count++;
      else count = 0;
    }
    count = 0;
    for (let i = rowLength - 1; i >= 0; i--) {
      if (grid[i][j] === "0") dp[i][j].down = count;
      else if (grid[i][j] === "E") count++;
      else count = 0;
    }
  }

  let max = 0;
  dp.forEach((row) => {
    row.forEach(({ left, right, top, down }) => {
      max = Math.max(max, left + right + top + down);
    });
  });

  return max;
};

maxKilledEnemies([
  ["W", "W", "W"],
  ["0", "0", "0"],
  ["E", "E", "E"],
]);
