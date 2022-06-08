const isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const charMapLeft = {};
  const charMapRight = {};

  s.split("").forEach((char) => {
    if (charMapLeft[char]) {
      charMapLeft[char]++;
    } else {
      charMapLeft[char] = 1;
    }
  });
  t.split("").forEach((char) => {
    if (charMapRight[char]) {
      charMapRight[char]++;
    } else {
      charMapRight[char] = 1;
    }
  });

  let result = true;
  Object.keys(charMapLeft).forEach((char) => {
    if (charMapRight[char] !== charMapLeft[char]) {
      result = false;
    }
  });

  return result;
};

isAnagram("anagram", "nagaram");
