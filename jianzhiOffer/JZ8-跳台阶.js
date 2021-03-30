/*
 * @Author: Ran
 * @Date: 2021-03-01 23:17:29
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 17:32:03
 * @FilePath: \JZoffer\jianzhiOffer\JZ8-跳台阶.js
 * @Description:
 * 题目描述：
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法（先后次序不同算不同的结果）。
 */

/* 对于第n个台阶来说，只能从n-1或者n-2的台阶跳上来，所以
F(n) = F(n-1) + F(n-2)
斐波拉契数序列，初始条件
n=1:只能一种方法
n=2:两种
递归一下就好了 */

// function jumpFloor(number) {
//     // write code here
//     if (number == 0) {
//         return 0;
//     }
//     if (number == 1) {
//         return 1;
//     }
//     if (number == 2) {
//         return 2;
//     }
//     return jumpFloor(n - 1) + jumpFloor(n - 2);
// }

// // 大佬的代码，利用备忘录，代码性能更佳
// function jumpFloor(n) {
//     const cache = {
//         0: 0,
//         1: 1
//     };
//     return __jumpFloor(n + 1); // 注意下标

//     function __jumpFloor(n) {
//         if (cache[n] !== undefined) {
//             return cache[n];
//         }

//         cache[n] = __jumpFloor(n - 1) + __jumpFloor(n - 2);
//         return cache[n];
//     }
// }

// 动态规划思想：
var numWays = function(n) {
    let pre = 1,
        curr = 1;
    let res = 0;
    if (n <= 1) return 1;
    for (let i = 2; i <= n; i++) {
        res = (pre + curr) % (1e9 + 7);
        pre = curr;
        curr = res;
    }
    return res;
};
console.log(numWays(78));