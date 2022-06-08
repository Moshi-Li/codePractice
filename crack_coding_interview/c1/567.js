/**
 *
 * Sliding Windows
 * 26*[] for a-z to record the char count info
 *
 */

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Window = new Array(26).fill(0);
  const s2Window = new Array(26).fill(0);

  //Init Windows
  Array(s1.length)
    .fill(0)
    .forEach((item, index) => {
      s1Window[s1.charCodeAt(index) - "a".charCodeAt(0)]++;
      s2Window[s2.charCodeAt(index) - "a".charCodeAt(0)]++;
    });

  const s1WindowData = s1Window.join("");
  if (s1WindowData === s2Window.join("")) return true;

  for (let i = s1.length; i < s2.length; i++) {
    s2Window[s2.charCodeAt(i) - "a".charCodeAt(0)]++;
    s2Window[s2.charCodeAt(i - s1.length) - "a".charCodeAt(0)]--;
    if (s1WindowData === s2Window.join("")) return true;
  }
  return false;
};
console.log(checkInclusion("ab", "eidbaooo"));
