/*
 * @Author: Ran
 * @Date: 2021-03-17 18:37:25
 * @LastEditTime: 2021-03-30 08:51:14
 * @FilePath: \JZoffer\LeetCode\LC-JZ03数组中重复的数字.js
 * @Description: 
 * 找出数组中重复的数字。
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
 * 数组中某些数字是重复的，但不知道有几个数字重复了，
 * 也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let repNum;
    while (true) {
        repNum = nums.pop();
        if (nums.indexOf(repNum) !== -1) {
            return repNum;
        }
    }
};

// 使用 Map 解决
/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    let map = new Map();
    for (i of nums) {
        if (map.has(i)) return i;
        map.set(i);
    }
    return null;
};

function duplicate(numbers) {
    // 存在不合法的输入的话输出-1
    if (!numbers.length) return -1;
    for (let num of numbers) {
        if (numbers.indexOf(num) !== numbers.lastIndexOf(num)) {
            return num;
        }
    }
}