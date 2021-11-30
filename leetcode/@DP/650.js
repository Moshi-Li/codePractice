var minSteps = function (n) {
  if (n === 1) return 0;

  for (let i = n - 1; i >= 1; i--) {
    if (n % i === 0) {
      return minSteps(i) + 1 + n / i - 1;
    }
  }
  return null;
};
