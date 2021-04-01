/*
 * @Author: Ran
 * @Date: 2021-04-01 08:53:39
 * @LastEditTime: 2021-04-01 09:43:12
 * @FilePath: \JZoffer\jianzhiOffer\JZ40-数组中只出现一次的数字.js
 * @Description: 
 * 
 */

// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array) {
    let res = [];
    let len = array.length;
    let count = 0;
    // 可以先排序,再对前后的进行比较
    array.sort((a, b) => a - b);
    let i = 0;
    while (i < len) {
        if (array[i] !== array[i + 1]) {
            res.push(array[i]);
            i += 1;
            count += 1;
            if (i === len - 1) {
                res.push(array[i]);
                count += 1;
            }
            if (count === 2) return res;
        } else {
            i += 2;
        }
    }
}

// 题目变形:
// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
var singleNumber = function(nums) {
    let len = nums.length;
    // 可以先排序,再对前后的进行比较
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < len) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        } else {
            i += 3;
            if (i === len - 1) return nums[i];
        }
    }
};


let array = [3, 4, 3, 3];

console.log(singleNumber(array));