/*
 * @Author: Ran
 * @Date: 2021-05-03 16:21:19
 * @LastEditTime: 2021-05-03 17:07:53
 * @FilePath: \snackbar-wuef:\FrontEndLearning\FE_Learning\JZoffer\jianzhiOffer\JZ30-连续子数组的最大和.js
 * @Description: 
 * 输入一个整型数组，数组里有正数也有负数。
 * 数组中的一个或连续多个整数组成一个子数组。
 * 求所有子数组的和的最大值。要求时间复杂度为 O(n).
 */

// 牛客里面的剑指测试用例还是不太行，暴力法也不超时。。。
function FindGreatestSumOfSubArray(array) {
    if (array.length === 0) return 0;
    let sum = 0;
    let res = -Infinity;
    for (let i = 0; i < array.length; i++) {
        for (let j = i; j < array.length; j++) {
            sum += array[j];
            if (res < sum) res = sum;
        }
        sum = 0;
    }
    return res;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let sum = 0;
    let res = -Infinity;
    for (let i = 0; i < nums.length; ++i) {
        if (sum <= 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        if (sum > res) {
            res = sum;
        }
    }
    return res;
};

// 动态规划
// 动态规划：
// 状态转移方程：dp[i] = max(dp[i-1] + nums[i], nums[i])，其中dp[i]表示以索引i为结束点基准的子数组的最大值。
// 初始状态：dp[0]= nums[0]。
var maxSubArray = function(nums) {
    if (nums.length === 0) return 0;
    let res = nums[0];
    let dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; ++i) {
        console.log(i);
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        res = Math.max(res, dp[i])
    }
    return res;
};

var maxSubArray = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(nums[i - 1], 0);
        res = Math.max(res, nums[i])
    }
    return res;
};

var maxSubArray = function(nums) {
    // 三阶段：定义常数级别变量 两个初始值的定义比较关键 
    // 一个是prev 表示上次迭代的最值 初始值为0 不能为负 别一个是最值的初始值max = Number.MIN_SAFE_INTEGER 代表最小的安全整数 用于确保最值的迭代
    let prev = 0,
        max = Number.MIN_SAFE_INTEGER

    for (const num of nums) {
        prev = Math.max(prev + num, num)
        max = prev > max ? prev : max
    }

    return max

    /* 作者：floretpig
    链接：https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/solution/shen-ru-qian-chu-gou-zao-dpfang-cheng-yo-z19w/
    来源：力扣（LeetCode）
    著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */
};