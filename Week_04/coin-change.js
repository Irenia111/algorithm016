/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    // 这个是可以拿贪心写，当coins有倍数关系的时候
    // https://leetcode-cn.com/problems/coin-change/solution/dong-tai-gui-hua-tao-lu-xiang-jie-by-wei-lai-bu-ke/
    // 先拿动态规划写
    if (amount === 0) return 0
    let dp = Array(amount + 1).fill(amount + 1)
    dp[0] = 0
    for (let i = 1; i < amount + 1; i++) {
        for (let k = 0; k < coins.length; k++) {
            if (i < coins[k]) continue
            dp[i] = Math.min(dp[i], 1 + dp[i - coins[k]])
        }
    }
    return dp[amount] === amount + 1 ? -1 : dp[amount]
};