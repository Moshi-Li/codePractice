/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */

/**
 * dp is developed gradually during iteration
 * For each coin value, dp is iterated.
 * Ex. for coins = [c1,c2,c3]
 * during the first iteration dp[i] represents # of ways to form i amount using [c1]
 * during the second iteration dp[i] represents # of ways to form i amount using [c1,c2]
 *
 */
var change = function (amount, coins) {
  dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  coins.forEach((coin) => {
    for (let i = coin; i < amount + 1; i++) {
      if (i - coin >= 0) {
        dp[i] += dp[i - coin];
      }
    }
  });

  return dp[amount];
};

console.log(change(5, [1, 2, 5]));
