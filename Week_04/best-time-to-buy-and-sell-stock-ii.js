/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // 这个只要下一次比这一次大，就可以买入
    let sum = 0
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) sum += (prices[i] - prices[i - 1])
    }
    return sum  
};