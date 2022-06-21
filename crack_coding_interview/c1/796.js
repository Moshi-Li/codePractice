/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  if (s.length !== goal.length) return false;
  let result = false;
  s.split("").every((char, index) => {
    if (`${s.slice(index)}${s.slice(0, index)}` === goal) {
      result = true;
      return false;
    }
    return true;
  });
  return result;
};
console.log(rotateString("abcd", "cdeab"));
