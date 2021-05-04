/*
 * @Author: Ran
 * @Date: 2021-05-04 12:59:49
 * @LastEditTime: 2021-05-04 15:23:14
 * @FilePath: \snackbar-wuef:\FrontEndLearning\FE_Learning\JZoffer\jianzhiOffer\JZ37-数字在排序数组中出现的次数.js
 * @Description: 
 * 统计一个数字在升序数组中出现的次数。
 * 
 * 二分查找
 */

function GetNumberOfK(data, k) {
    let index = binarySearch(data, k);
    let res = 0;
    while (data[index] === k) {
        res++;
        index++;
    }
    return res;
}

function binarySearch(nums, target) {
    let left = 0;
    let right = nums.length;
    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (target === nums[mid]) {
            right = mid;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else if (target < nums[mid]) {
            right = mid;
        }
    }
    return left;
}

// 大佬的解法：
// 简洁
var search = function(nums, target) {
    return helper(nums, target) - helper(nums, target - 1);
};
var helper = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;
    while (i <= j) {
        let m = i + Math.floor((j - i) / 2);
        if (nums[m] <= target) {
            i = m + 1;
        } else {
            j = m - 1;
        }
    }
    return i;
}

// https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length === 0) return [-1, -1];
    // 寻找右边界：
    const right = helper(nums, 0, nums.length, target + 0.5)
    if (right < 1 || nums[right - 1] != target) return [-1, -1];
    const left = helper(nums, 0, right, target - 0.5);
    return [left, right - 1];
};

var helper = function(nums, i, j, target) {
    while (i < j) {
        let m = i + Math.floor((j - i) / 2);
        if (nums[m] <= target) {
            i = m + 1;
        } else {
            j = m;
        }
    }
    return i;
}