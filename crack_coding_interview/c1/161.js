var isOneEditDistance = function (s, t) {
  if (s === t) return false;
  if (Math.abs(s.length - t.length) > 1) return false;
  for (let i = 0; i < s.length && i < t.length; i++) {
    if (s[i] != t[i]) {
      if (
        s.slice(i) === t.slice(i + 1) ||
        s.slice(i + 1) === t.slice(i) ||
        s.slice(i + 1) === t.slice(i + 1)
      )
        return true;
      return false;
    }
  }
  return true;
};
