/*
 * @Author: Ran
 * @Date: 2021-03-02 23:28:26
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-02 23:51:17
 * @FilePath: \JZoffer\JZ9-变态跳台阶.js
 * @Description: 
 * 题目描述：
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级……它也可以跳上n级。
 * 求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */

// 思路一：
// 因为n级台阶，第一步有n种跳法：跳1级、跳2级、到跳n级
// 跳1级，剩下n-1级，则剩下跳法是f(n-1)
// 跳2级，剩下n-2级，则剩下跳法是f(n-2)
// 所以f(n)=f(n-1)+f(n-2)+...+f(1)
// 因为f(n-1)=f(n-2)+f(n-3)+...+f(1)
// 所以f(n)=2*f(n-1)

function jumpFloorII(number) {
    // write code here
    if (number == 0 || number == 1)
        return 1;
    return 2 * jumpFloorII(number - 1);
}

// 思路二：
// 每个台阶都有跳与不跳两种情况（除了最后一个台阶），最后一个台阶必须跳。所以共有2^(n-1)种情况

function jumpFloorII(number) {
    // 使用位运算计算2的次方，加快速度
    return 1 << (number - 1);
}
// 结果跟递归好像没区别？