/*
 * @Author: Ran
 * @Date: 2021-03-22 13:31:40
 * @LastEditTime: 2021-03-22 13:55:24
 * @FilePath: \JZoffer\jianzhiOffer\JZ11-二进制中1的个数.js
 * @Description: 
 * 题目描述：
 * 输入一个整数，输出该数32位二进制表示中1的个数。其中负数用补码表示。
 */
function NumberOf1(n) {
    let res = 0;
    let binNum = (n >>> 0).toString(2); // 转换为 32 位二进制表示
    for (let i = 0; i < binNum.length; i++) {
        if (binNum[i] === '1') res++;
    }
    return res;
}

/* 解法 2: n & (n - 1)
解法 2 采用n & (n - 1)的做法，这种做法的可行原因是：能将数字 n 的二进制表示中，最右边的 1 变成 0。

举个例子，以 5 为例，其二进制是 101:

101 & 100 => 100
100 & 011 => 0
因此，整体思路是：

n 和 n-1 相与的结果赋给 n
n 如果为 0，结束；否则回到第 1 步
和解法 1 相比，空间复杂度是 O(1)，但是解法 1 一定需要循环 32 次，但是解法 2 的循环次数就是数字中 1 的个数，优于解法 1。 */

// 原文地址：https://xxoo521.com/2019-12-31-number-of-one/
// ac地址：https://www.nowcoder.com/practice/8ee967e43c2c4ec193b040ea7fbb10b8

/**
 * @param {number} n
 * @return {number}
 */
function NumberOf1(n) {
    let count = 0;

    while (n) {
        n = n & (n - 1);
        ++count;
    }

    return count;
}