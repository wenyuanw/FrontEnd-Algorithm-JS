/*
 * @Author: Ran
 * @Date: 2021-04-12 11:09:55
 * @LastEditTime: 2021-04-13 09:39:41
 * @FilePath: \JZoffer\jianzhiOffer\JZ67-剪绳子.js
 * @Description: 
 * 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1，m<=n），
 * 每段绳子的长度记为k[1],...,k[m]。请问k[1]x...xk[m]可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
 */


/* 
动态规划解题思路
首先定义函数 f(n) 为把长度为 n 的绳子剪成若干段后各段长度乘积的最大值。
在剪第一刀时，我们有 n-1 种可能的选择，也就是剪出来的第一段绳子的可能长度为 1，2，...，n-1。
因此 f(n) = max(f(i) * f(n-i))，其中0 < i < n

f(2) = 1;
f(3) = 2;
*/
function cutRope(number) {
    if (number < 2) return 0;
    if (number === 2) return 1;
    if (number === 3) return 2;
    let DP = [];
    DP[0] = 0;
    DP[1] = 1;
    DP[2] = 2;
    DP[3] = 3;
    // 因为2和3在不切的时候就是最大的值，而2和3的最大值是1和2，是因为如果长度为2或者3时必须至少切一刀。
    let max = 0;
    let product = 0;
    for (let i = 4; i <= number; ++i) {
        max = 0;
        for (let j = 1; j <= Math.ceil(i / 2); ++j) {
            product = DP[j] * DP[i - j];
            max = Math.max(max, product);
            DP[i] = max;
        }
    }
    return DP[number];
}

/* 
贪婪算法
按照如下策略剪绳子，则得到的各段绳子的长度的乘积将最大:
当 n >= 5 时，我们尽可能多地剪长度为 3 的绳子；
当剩下的绳子长度为 4 时，把绳子剪成两段长度为 2 的绳子。
*/
function cutRope(number) {
    if (number < 2) return 0;
    if (number === 2) return 1;
    if (number === 3) return 2;

    // 尽可能多地剪去长度为 3 的绳子段
    let timesOf3 = parseInt(number / 3);
    // 当绳子最后剩下的长度为 4 的时候，不能再剪去长度为 3 的绳子段。
    if (number - 3 * timesOf3 === 1) timesOf3 -= 1;
    let timesOf2 = (number - 3 * timesOf3) / 2;
    return Math.pow(3, timesOf3) * Math.pow(2, timesOf2);
}