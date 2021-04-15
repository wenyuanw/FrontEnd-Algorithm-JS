/*
 * @Author: Ran
 * @Date: 2021-04-15 08:54:02
 * @LastEditTime: 2021-04-15 09:30:12
 * @FilePath: \JZoffer\jianzhiOffer\JZ42-和为S的两个数字.js
 * @Description: 
 * 输入一个 递增排序 的数组和一个数字S，在数组中查找两个数，
 * 使得他们的和正好是S，如果有多对数字的和等于S，输出两个数的 乘积最小 的。
 * 
 * 返回值描述:
 * 对应每个测试案例，输出两个数，小的先输出。
 */

// 暴力解法：
function FindNumbersWithSum(array, sum) {
    if (array.length < 2) return [];
    for (let i = 0; i < array.length; i++) {
        if (array.indexOf(sum - array[i]) !== -1) {
            return [array[i], sum - array[i]];
        }
    }
    // 注意处理特例，若是不存在这两个值
    return [];
}
module.exports = {
    FindNumbersWithSum: FindNumbersWithSum
};

/* 
数列满足递增，设两个头尾两个指针i和j，
若ai + aj == sum，就是答案（相差越远乘积越小）
若ai + aj > sum，aj肯定不是答案之一（前面已得出 i 前面的数已是不可能），j -= 1
若ai + aj < sum，ai肯定不是答案之一（前面已得出 j 后面的数已是不可能），i += 1
O(n) 
*/
function FindNumbersWithSum(nums, target) {
    if (nums.length < 2) return [];
    let left = 0;
    let right = nums.length - 1;
    while (right > left) {
        if (nums[left] + nums[right] === target) {
            return [nums[left], nums[right]];
        }
        if (nums[left] + nums[right] > target) {
            right--;
        }
        if (nums[left] + nums[right] < target) {
            left++;
        }
    }
    return [];
}