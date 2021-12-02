var coinChange = function (coins, amount) {
  const find = (coins, amount) => {
    if (amount === 0) return 0;
    if (map[amount]) return map[amount];

    let candidates = coins
      .map((coin) => {
        let remaining = amount - coin;
        if (remaining > 0) {
          return find(coins, remaining);
        } else if (remaining < 0) return -1;
        else return 0;
      })
      .filter((item) => item !== -1);

    if (candidates.length) {
      map[amount] = Math.min(...candidates) + 1;
      return Math.min(...candidates) + 1;
    } else {
      map[amount] = -1;
      return -1;
    }
  };

  const map = {};
  return find(coins, amount);
};

//console.log(coinChange([186, 419, 83, 408], 6429));
//console.log(coinChange([1, 2, 5], 11));
