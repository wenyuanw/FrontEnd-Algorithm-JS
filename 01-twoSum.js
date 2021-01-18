/*
 * @Author: Ran
 * @Date: 2021-01-18 10:52:16
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-18 11:35:45
 * @Description: 
 * 给定一个整数数组 nums 和一个整数目标值 target，
 * 请你在该数组中找出和为目标值的那两个整数，并返回它们的数组下标。
 * 你可以假设每种输入只会对应一个答案。
 * 但是，数组中同一个元素不能使用两遍。
 * 你可以按任意顺序返回答案。
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 遍历暴力解法， 注意同一个元素不能使用两遍。

// 错误想法
// 同一个元素用了两边，内层for循环应该改一下，从j = i + 1 后面开始找才对
/* var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = 0; j < nums.length; j++)
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
    }
}; */

/* 正确暴力解法：
但是这种笨方法，耗时耗内存都比较大
想到了用数组中的indexOf方法，代码性能略有提升
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++)
            if (nums[i] + nums[j] == target) {
                return [i, j];
            }
    }
};
 */

// 错误解答：
/* 测试用例：[3,2,4] 6
输出了：[0,0]
第一个元素用了两次。。。。 */
/* var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        if (nums.indexOf(target - nums[i]) != -1) {
            return [i, nums.indexOf(target - nums[i])];
        }
    }
};
console.log(twoSum([3, 2, 1], 3)); */

// 加一个判断，不能用两个相同元素
var twoSum = function(nums, target) {
    for (i = 0; i < nums.length; i++) {
        let index = nums.indexOf(target - nums[i]);
        if (index != -1 && index != i) {
            return [i, index];
        }
    }
};

console.log(twoSum([3, 2, 4], 6))