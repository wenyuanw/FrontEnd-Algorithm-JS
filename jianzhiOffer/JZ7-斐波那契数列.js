/*
 * @Author: Ran
 * @Date: 2021-01-12 10:54:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-20 11:30:39
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ7-斐波那契数列.js
 * @Description: 
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项
 * （从0开始，第0项为0，第1项是1）。n≤39
 */

//  自己写的题解:
function Fibonacci(n) {
    let Arr = [];
    Arr[0] = 0;
    Arr[1] = 1;
    for (let i = 2; i <= 39; i++) {
        Arr[i] = Arr[i - 1] + Arr[i - 2];
    }
    return Arr[n];
}

// LeetCode 上面的题目
/* 
https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。 
*/


/**
 * @param {number} n
 * @return {number}
 */

// 动态规划
var fib = function(n) {
    // fib(n) = fib(n - 1) + fib(n - 2)
    let dp = [];
    dp[0] = 0;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
        // 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
        if (dp[i] >= 1e9 + 7) dp[i] = dp[i] - (1e9 + 7);
    }
    return dp[n];
};

// 暴力递归竟然会超时，有点意思
var fib = function(n) {
    // fib(n) = fib(n - 1) + fib(n - 2)
    if (n == 0) return 0;
    if (n == 1) return 1;

    return fib(n - 1) + fib(n - 2);
};

var fib = function(n) {
    // fib(n) = fib(n - 1) + fib(n - 2)
    let cache = {
        0: 0,
        1: 1
    }

    return _fib(n);

    function _fib(n) {
        if (cache[n] !== undefined) return cache[n];

        cache[n] = _fib(n - 1) + _fib(n - 2);
        // 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
        if (cache[n] >= 1e9 + 7) cache[n] = cache[n] - (1e9 + 7);
        return cache[n];
    }

};