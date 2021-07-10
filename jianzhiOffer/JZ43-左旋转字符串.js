/*
 * @Author: Ran
 * @Date: 2021-07-10 23:51:52
 * @LastEditTime: 2021-07-11 00:05:46
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ43-左旋转字符串.js
 * @Description: 
 * 汇编语言中有一种移位指令叫做循环左移（ROL），现在有个简单的任务，
 * 就是用字符串模拟这个指令的运算结果。
 * 对于一个给定的字符序列 S，请你把其循环左移 K 位后的序列输出
 * （保证 K 小于等于 S 的长度）。
 * 例如，字符序列S=”abcXYZdef”,要求输出循环左移 3 位后的结果，
 * 即“XYZdefabc”。是不是很简单？OK，搞定它！
 * 
 * 输入： "abcXYZdef",3
 * 返回值："XYZdefabc"
 */
function LeftRotateString(str, n) {
    if (str === null) return ''
    let strArr = str.split('')
    let arr1 = strArr.slice(0, n)
    let arr2 = strArr.slice(n)
    return [...arr2, ...arr1].join('')
}

function LeftRotateString(str, n) {
    if (!str) return '';
    let a = str.slice(0, n);
    let b = str.slice(n, str.length);
    return b + a;
}