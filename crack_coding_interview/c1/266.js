/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const map = {};
  s.split("").forEach((char) => {
    if (!map[char]) map[char] = 0;
    map[char]++;
  });

  const oddCount = Object.keys(map).filter(
    (item) => map[item] % 2 !== 0
  ).length;

  if ((oddCount > 0 && s.length % 2 === 0) || oddCount > 1) {
    return false;
  }
  return true;
};

console.log(canPermutePalindrome("code"));
