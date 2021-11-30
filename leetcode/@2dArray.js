const array = Array.from(Array(2 /** Row */), () => new Array(4) /** Column */);
console.log(array);
a = [];
a.sort(function (a, b) {
  return a - b;
}); // Ascending
