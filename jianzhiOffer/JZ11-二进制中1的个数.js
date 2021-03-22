/*
 * @Author: Ran
 * @Date: 2021-03-22 13:31:40
 * @LastEditTime: 2021-03-22 13:41:14
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