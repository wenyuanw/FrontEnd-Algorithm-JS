/*
 * @Author: Ran
 * @Date: 2021-09-19 18:50:16
 * @LastEditTime: 2021-09-19 18:50:16
 * @FilePath: \FrontEnd-Algorithm-JS\LeetCode\LC121-买卖股票的最佳时机.js
 * @Description: 
 * 
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) return 0
    let profit = 0
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] < prices[j]) {
                profit = Math.max(profit, prices[j] - prices[i])
            }
        }
    }
    return profit
};


var maxProfit = function(prices) {
    let result = 0
    let len = prices.length
    let minPrice = Infinity

    for (let i = 0; i < len; i++) {
        // 当前价格比历史最低还要低，那就在这里买入
        if (prices[i] < minPrice) {
            minPrice = prices[i]
                // 当前收益大于历史最大收益，那就在这里卖出
        } else if (prices[i] - minPrice > result) {
            result = prices[i] - minPrice
        }
    }

    return result
};