/*
 * @Author: Ran
 * @Date: 2021-03-31 15:12:10
 * @LastEditTime: 2021-03-31 23:18:47
 * @FilePath: \JZoffer\jianzhiOffer\JZ32-把数组排成最小的数.js
 * @Description: 
 * 输入一个正整数数组，把数组里所有数字拼接起来排成一个数，
 * 打印能拼接出的所有数字中最小的一个。
 * 例如输入数组{3，32，321}，则打印出这三个数字能排成的最小数字为321323。
 */

/* 
解题思路:
根据题目的要求,两个把数组排成最小的数能拼接成数字 mn 和 nm
如果 mn < nm, 那么我们应该打印出 mn, 也就是 m 应该排在 n 的前面,
我们定义此时 m 小于 n; 反之,则 n 小于 m 
由于把 m 和n 拼接起来得到 mn 和 nm,它们的位数一定是相同的,
因此比较它们的大小只需要按照字符串大小的比较规则就可以了. 
*/

function PrintMinNumber(numbers) {
    // 注意 返回值 是字符串
    let res = numbers.sort(compare);

    // 定义比较规则: 
    function compare(num1, num2) {
        if ('' + num1 + num2 < '' + num2 + num1) {
            return -1;
        }
    }
    return res.join('');
}
module.exports = {
    PrintMinNumber: PrintMinNumber
};

console.log(PrintMinNumber([3, 32, 321]));