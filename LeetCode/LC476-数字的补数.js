/* 
20210318
题目描述：
给你一个正整数 num ，输出它的补数。
补数是对该数的二进制表示取反。

输入：num = 5
输出：2
解释：5 的二进制表示为 101（没有前导零位），其补数为 010。所以你需要输出 2 。
*/

/**
 * @param {number} num
 * @return {number}
 */
 var findComplement = function(num) {
    
    // 首先是需要熟悉 toString(radix) 和 parseInt(string, radix) 用于进制转换的用法
    // 1. 十进制转换为二进制
    num = num.toString(2);
    let numArr = num.split('');
    // 2. 使用异或运算（每一位与 1 进行异或），实现按位取反
    numArr = numArr.map(item => item ^ 1);
    num = numArr.join('')
    // 3. 返回十进制的整数
    return parseInt(num, 2)
};