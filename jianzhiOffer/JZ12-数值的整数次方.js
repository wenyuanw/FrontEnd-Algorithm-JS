/*
 * @Author: Ran
 * @Date: 2021-03-23 09:55:17
 * @LastEditTime: 2021-03-23 10:57:37
 * @FilePath: \JZoffer\jianzhiOffer\JZ12-数值的整数次方.js
 * @Description: 
 * 题目描述：
 * 给定一个double类型的浮点数base和int类型的整数exponent。求base的exponent次方。
 * 保证base和exponent不同时为0
 * 
 * 输入：
 * 2,3
 * 返回值：
 * 8.00000
 */

// 直接调 API ？ 迷惑行为
function Power(base, exponent) {
    return Math.pow(base, exponent);
}

/* 解法 2: 暴力法
将数字 base 连续乘 exponent 次即可。
时间复杂度是 O(N),空间复杂度是 O(1) */

// 原文地址：https://xxoo521.com/2019-12-31-pow/
// ac地址：https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00

function Power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }

    const isNegative = exponent < 0; // 是否是负指数
    const absExponent = Math.abs(exponent);
    let result = base;
    for (let i = 1; i < absExponent; ++i) {
        result = result * base;
    }

    return isNegative ? 1 / result : result;
}

// 位运算：
// 原文地址：https://xxoo521.com/2019-12-31-pow/
// ac地址：https://www.nowcoder.com/practice/1a834e5e3e1a4b7ba251417554e07c00

function Power(base, exponent) {
    if (exponent === 0) {
        return 1;
    }
    if (exponent === 1) {
        return base;
    }

    const isNegative = exponent < 0; // 是否是负指数
    let absExponent = Math.abs(exponent);
    let result = 1;
    while (absExponent) {
        // 如果exponent最右位是1，将当前base累乘到result
        if (absExponent & 1) {
            result = result * base;
        }

        base = base * base; // base自乘法
        absExponent = Math.floor(absExponent / 2); // exponent右移1位
    }

    return isNegative ? 1 / result : result;
}