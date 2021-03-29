/*
 * @Author: Ran
 * @Date: 2021-03-28 11:33:27
 * @LastEditTime: 2021-03-28 13:32:25
 * @FilePath: \JZoffer\jianzhiOffer\JZ28-数组中出现次数超过一半的数字.js
 * @Description: 
 * 剑指Offer
 * LeetCode 169. 多数元素
 * 数组中有一个数字出现的次数超过数组长度的一半，请找出这个数字。
 * 例如输入一个长度为9的数组{1,2,3,2,2,2,5,4,2}。
 * 由于数字2在数组中出现了5次，超过数组长度的一半，因此输出2。如果不存在则输出0。
 */

// 思路：
// 若是存在某数字出现次数超过数组长度的一般，
// 则排序过后它必定会在中间的位置
function MoreThanHalfNum_Solution(numbers) {
    numbers.sort((a, b) => a - b);
    let mid = Math.ceil(numbers.length / 2);
    let count = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === numbers[mid - 1]) {
            count++;
        }
    }

    if (count >= mid) {
        return numbers[mid - 1];
    } else {
        return 0;
    }

}
module.exports = {
    MoreThanHalfNum_Solution: MoreThanHalfNum_Solution
};

// LeetCode 上面限制条件没有这么多
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a, b) => a - b);
    return nums[Math.floor(nums.length / 2)]
};
// 参考题解的做法,摩尔投票法:
var majorityElement = function(nums) {
    let x = 0,
        vote = 0;

    for (let i = 0; i < nums.length; i++) {
        if (vote === 0) {
            x = nums[i];
        }
        if (x === nums[i]) {
            vote += 1;
        } else {
            vote -= 1;
        }
    }
    return x;
};

// 参考题解的做法,摩尔投票法:
function MoreThanHalfNum_Solution(numbers) {
    let x = 0,
        vote = 0,
        count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (vote === 0) {
            x = numbers[i];
        }
        if (x === numbers[i]) {
            vote += 1;
        } else {
            vote -= 1;
        }
    }

    for (const num of numbers) {
        if (x === num) {
            count++;
        }
    }

    if (count >= Math.floor(numbers.length / 2) + 1) {
        return x;
    } else {
        return 0;
    }
}
module.exports = {
    MoreThanHalfNum_Solution: MoreThanHalfNum_Solution
};