/*
 * @Author: Ran
 * @Date: 2021-01-12 10:54:29
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-12 10:55:56
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ27-斐波那契数列.js
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