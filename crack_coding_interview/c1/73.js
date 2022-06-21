var setZeroes = function (matrix) {
  const map = {
    row: {},
    column: {},
  };
  matrix.forEach((arr, rowIndex) => {
    arr.forEach((num, columnIndex) => {
      if (num === 0) {
        map.row[rowIndex] = true;
        map.column[columnIndex] = true;
      }
    });
  });
  matrix.forEach((arr, rowIndex) => {
    arr.forEach((num, columnIndex) => {
      if (map.row[rowIndex] || map.column[columnIndex]) {
        matrix[rowIndex][columnIndex] = 0;
      }
    });
  });
};
