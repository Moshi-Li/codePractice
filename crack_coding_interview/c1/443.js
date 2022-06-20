/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  const resultArray = [];
  chars.forEach((item, index) => {
    if (
      resultArray[resultArray.length - 1] &&
      resultArray[resultArray.length - 1].char === item
    ) {
      resultArray[resultArray.length - 1].count++;
    } else {
      resultArray.push({ char: item, count: 1 });
    }
  });
  let count = 0;
  resultArray
    .map((item) => {
      return item.count > 1 ? `${item.char}${item.count}` : `${item.char}`;
    })
    .join("")
    .split("")
    .forEach((item, index) => {
      count++;
      chars[index] = item;
    });

  return count;
};

console.log(compress(["a"]));
