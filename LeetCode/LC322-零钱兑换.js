/*
 * @Author: Ran
 * @Date: 2021-03-04 23:27:03
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-05 00:37:28
 * @FilePath: \JZoffer\LC322-零钱兑换.js
 * @Description: 
 * 题目描述：
 * 给定不同面额的硬币 coins 和一个总金额 amount。
 * 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1。
 * 你可以认为每种硬币的数量是无限的。
 */

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
// 无法组成的时候返回-1
var coinChange = function(coins, amount) {
    // 备忘录
    let cache = {};

    function dp(n) {
        // 若是备忘录中已有，则直接返回
        if (cache[n] != undefined) return cache[n];

        if (n == 0) return 0;
        if (n < 0) return -1;

        let res = amount + 1; // 硬币数最大也就是amount个1元硬币，所以amount+1一定是取不到的

        for (let coin of coins) {
            let subProblem = dp(n - coin)
            if (subProblem == -1)
                continue;
            res = Math.min(res, 1 + subProblem);
        }
        if (res != amount + 1)
            cache[n] = res;
        else cache[n] = -1;
        return cache[n];
    }
    return dp(amount);
};