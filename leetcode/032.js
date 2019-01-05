const longestValidParentheses = s => {
  var count = 1;
  var max = 0;
  for (var i = s.search("("); i < s.length; i++) {
    s[i] === "(" ? count++ : count--;
  }
};
