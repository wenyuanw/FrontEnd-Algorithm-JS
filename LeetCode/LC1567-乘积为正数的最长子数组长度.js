/*
 * @Author: Ran
 * @Date: 2021-07-25 11:19:18
 * @LastEditTime: 2021-07-25 12:48:16
 * @FilePath: \FrontEnd-Algorithm-JS\LeetCode\LC1567-乘积为正数的最长子数组长度.js
 * @Description: 
 * 给你一个整数数组 nums ，请你求出乘积为正数的最长子数组的长度。
 * 一个数组的子数组是由原数组中零个或者更多个连续数字组成的数组。
 * 请你返回乘积为正数的最长子数组长度。
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
/*  贪心
 n === 0 正负数统计清零
 n>0 正数累加 如果前面有负数 负数也累加
 n<0 乘后变号 所以正负数累加交换 负数累加 有正数也累加
 每次非零数都贪最大正数统计长度。 */
var getMaxLen = function(nums) {
    let maxLen = 0
    let posLen = 0
    let negLen = 0

    if (nums.length <= 0) return maxLen

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            posLen = 0 // 正数长度
            negLen = 0 // 负数长度
        } else if (nums[i] > 0) {
            posLen++
            if (negLen > 0) { negLen++ }
            maxLen = Math.max(maxLen, posLen)
        } else if (nums[i] < 0) {
            let temp = posLen
            posLen = negLen
            negLen = temp
            negLen++
            if (posLen > 0) { posLen++ }
            maxLen = Math.max(maxLen, posLen)
        }
    }

    return maxLen
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    const N = nums.length;
    let dpB = new Array(N);
    let dpL = new Array(N);
    dpB[0] = 0 >= nums[0] ? 0 : 1;
    dpL[0] = 0 > nums[0] ? 1 : 0;

    for (let i = 1; i < nums.length; i++) {
        if (0 == nums[i]) {
            dpB[i] = 0;
            dpL[i] = 0;
        } else if (0 < nums[i]) {
            dpB[i] = dpB[i - 1] + 1;
            if (dpL[i - 1] > 0) {
                dpL[i] = dpL[i - 1] + 1;
            } else {
                dpL[i] = 0;
            }
        } else {
            dpL[i] = dpB[i - 1] + 1;
            if (dpL[i - 1] > 0) {
                dpB[i] = dpL[i - 1] + 1;
            } else {
                dpB[i] = 0;
            }
        }
    }
    // console.log(dpB);
    // console.log(dpL);
    return Math.max(...dpB);
};

class Solution:
    def getMaxLen(self, nums: List[int]) - > int:
    nums = [0] + nums + [0]
last_zero, result, negs = 0, 0, []# 上一个0的位置、 结果、 负数的位置

for i in range(1, len(nums)):
    if nums[i] == 0:
    if len(negs) % 2 == 0: #偶数个负数， 取整个子数组
result = max(result, i - last_zero - 1)
else :#奇数个负数， 要么剃掉第一个， 要么剃掉最后一个
result = max(result, i - negs[0] - 1, negs[-1] - last_zero - 1)
last_zero = i
negs = []
elif nums[i] < 0:
    negs.append(i)# 记录负数的位置

return result

， 一遍扫描， 过程当中需要纪录的必要信息包括：

上一个0的位置
上一个0以来， 负数个数的奇偶性
上一个0以来， 第一个负数和最后一个负数的位置
因此空间复杂度还可以优化到常数级别。