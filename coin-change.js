/*

You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.

 

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1
Example 2:

Input: coins = [2], amount = 3
Output: -1
Example 3:

Input: coins = [1], amount = 0
Output: 0
 

Constraints:

1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104

*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  const memo = {
    '0': 0,
  };
  function memoizedCoin(amt) {
    if (amt in memo) return memo[amt];
    
    let minCoins = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (coins[i] <= amt) {
        const coinCoint = memoizedCoin(amt-coins[i]);
        if (coinCoint !== -1) {
          minCoins = Math.min(minCoins, coinCoint);
        }
      }
    }
    
    if (minCoins !== Infinity) {
      memo[amt] = minCoins + 1;
    } else {
      memo[amt] = -1;
    }

    return memo[amt];
  }
  
  return memoizedCoin(amount);
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
  if (amount === 0) return 0;

  const out = new Array(amount+1).fill(Infinity);
  for (let i = 0; i < coins.length; i++) {
    if (coins[i] <= amount) {
      out[coins[i]] = 1;
    }
  }
  
  for (let i = 1; i < out.length; i++) {
    if (out[i] !== Infinity) {
      for (let j = 0; j < coins.length; j++) {
        if (i + coins[j] < out.length) {
          out[i + coins[j]] = Math.min(out[i] + 1, out[i + coins[j]]);
        }
      }
    }
  }
  
  return out[amount] !== Infinity ? out[amount] : -1;
};