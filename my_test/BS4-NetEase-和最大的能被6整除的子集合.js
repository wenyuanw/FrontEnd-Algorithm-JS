/*
 * @Author: Ran
 * @Date: 2021-03-27 16:38:37
 * @LastEditTime: 2021-03-29 16:25:49
 * @FilePath: \JZoffer\my_test\wangyi3.js
 * @Description: 
 * 最大和问题
 * 给定一个数组，找出一个子集合
 * 集合中数字的和能被6整除
 * 且和是所有满足要求的子集合里的最大值
 * 如果找不到则返回-1
 * 
 * https://leetcode-cn.com/problems/greatest-sum-divisible-by-three/
 * 
 * 输入
 * 4
 * 6 8 4 3
 * 
 * 输出
 * 18
 * 
 * 说明：
 * 6+8+4
 */

// 思路：按模6分组，每组排序

let n = parseInt(readline()); // 个数
let nums = readline().split(' ').map(item => parseInt(item)); // 元素数组