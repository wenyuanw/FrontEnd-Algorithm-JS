/*
 * @Author: Ran
 * @Date: 2021-03-21 16:45:17
 * @LastEditTime: 2021-03-21 16:48:39
 * @FilePath: \JZoffer\LeetCode\LC410-分割数组的最大值-二分.js
 * @Description: 
 * 分割数组的最大值
 * 给定一个非负整数数组 nums 和一个整数 m ，
 * 你需要将这个数组分成 m 个非空的连续子数组。
 * 设计一个算法使得这 m 个子数组各自和的「最大值最小」。
 * 
 * 示例 1：
 * 输入：nums = [7,2,5,10,8], m = 2
 * 输出：18
 * 解释：
 * 一共有四种方法将 nums 分割为 2 个子数组。 其中最好的方式是将其分为 [7,2,5] 和 [10,8] 。
 * 因为此时这两个子数组各自的和的最大值为18，在所有情况中最小。
 * 
 * 示例 2：
 * 输入：nums = [1,2,3,4,5], m = 2
 * 输出：9
 */

// 可以用二分做，也可以用动态规划做，没有写动态规划的解法

/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */

var splitArray = function(nums, m) {
    let left = Math.max(...nums);
    let right = 0;
    nums.forEach(item => right += item);

    while (left < right) {
        let mid = left + parseInt((right - left) / 2);

        let splits = split(nums, mid);
        if (splits > m) {
            // 如果分割数太多，说明说明「子数组各自的和的最大值」太小，
            // 此时需要将「子数组各自的和的最大值」调大
            // 下一轮搜索的区间是 [mid + 1, right]
            left = mid + 1;
        } else {
            // 此时是 splits <= m
            // 下一轮搜索的区间是上一轮的反面区间 [left, mid]
            right = mid;
        }
    }
    return right;

    function split(nums, maxIntervalSum) {
        // 至少是一个分割
        let splits = 1;
        // 当前区间的和：
        let curIntervalSum = 0;
        for (num of nums) {
            if (curIntervalSum + num > maxIntervalSum) {
                curIntervalSum = 0;
                splits++;
            }
            curIntervalSum += num;
        }
        return splits;
    }
};