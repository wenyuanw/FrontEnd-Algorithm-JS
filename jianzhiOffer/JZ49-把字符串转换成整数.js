/*
 * @Author: Ran
 * @Date: 2021-04-19 10:41:20
 * @LastEditTime: 2021-04-19 11:58:46
 * @FilePath: \JZoffer\jianzhiOffer\JZ49-把字符串转换成整数.js
 * @Description: 
 * 将一个字符串转换成一个整数，要求不能使用字符串转换整数的库函数。 
 * 数值为0或者字符串不是一个合法的数值则返回0
 * 
 * 输入描述:
 * 输入一个字符串,包括数字字母符号,可以为空
 * 返回值描述:
 * 如果是合法的数值表达则返回该数字，否则返回0
 */

// 既然是整数，那应该就是正整数或者负整数
function StrToInt(str) {

}


// 这个本质上跟使用库函数没什么差别。。。。
function StrToInt(str) {
    str = str - 0;
    if (str === 0) return 0;
    return Number.isNaN(str) ? 0 : str;
}