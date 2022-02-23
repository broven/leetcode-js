/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let totalProfit = 0;
    let currentPosition = -1;
    if (prices.length === 0) return totalProfit;
    // 什么时候买入: 当前价格小于明天的价格
    // 什么时候卖出: 手中已经持有, 并且明天的价格小于今天的价格, 或者到最后一天了
    for (let i = 0; i < prices.length; i++) {
        const currentPrice = prices[i];
        const featurePrice = i + 1 === prices.length ?  -1 : prices[i + 1];
        if (currentPosition === -1) {
            if (currentPrice < featurePrice) {
                currentPosition = prices[i];
                continue;
            }
        } else {
            if (currentPrice > featurePrice) {
                    totalProfit = totalProfit + currentPrice - currentPosition;
                    currentPosition = -1;
            }
            }
        }

    return totalProfit;
    }

// @lc code=end
console.log(maxProfit([7,1,5,3,6,4]))
