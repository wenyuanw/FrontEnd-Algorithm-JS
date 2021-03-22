/*
 * @Author: Ran
 * @Date: 2021-03-22 11:29:48
 * @LastEditTime: 2021-03-22 11:44:13
 * @FilePath: \JZoffer\jianzhiOffer\JZ13-调整数组顺序使奇数位于偶数前面.js
 * @Description: 
 * 题目描述：
 * 输入一个整数数组，实现一个函数来调整该数组中数字的顺序，
 * 使得所有的奇数位于数组的前半部分，所有的偶数位于数组的后半部分，
 * 并保证奇数和奇数，偶数和偶数之间的相对位置不变。
 * 
 * 示例：
 * 输入：
 * [1,2,3,4]
 * 输出：
 * [1,3,2,4]
 */

/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 
 * @param array int整型一维数组 
 * @return int整型一维数组
 */

// 最简单的思路，需要新建两个数组，分别存放奇数和偶数：
function reOrderArray(array) {
    let oddArr = [];
    let evenArr = [];
    for (let item of array) {
        if (item % 2 === 0) {
            //             even:
            evenArr.push(item);
        } else {
            oddArr.push(item);
        }
    }
    return oddArr.concat(evenArr);
}

// ----LeetCode 里面稍有不同----
// 不需要保证奇数和奇数，偶数和偶数之间的相对位置不变
// 应该可以用双指针，头尾分别出发，头遇到偶数停下，尾遇到奇数停下，然后交换位置即可

var exchange = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (right > left) {
        while (right > left && nums[right] % 2 === 0) right--;
        while (right > left && nums[left] % 2 !== 0) left++;
        swap(nums, left, right);
    }
    return nums;

    function swap(nums, left, right) {
        let temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;
    }
};