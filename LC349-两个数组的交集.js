/* 
20210316
题目描述：
给定两个数组，编写一个函数来计算它们的交集。

输入：nums1 = [1,2,2,1], nums2 = [2,2]
输出：[2]

输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出：[9,4]
*/

// 利用Set的特性来做,需要注意返回的是数组
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Set

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var intersection = function(nums1, nums2) {
    // 使用集合 Set 对象，交集操作
    let _intersection = [];     // 注意我们要 return {number[]}
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    for(let item of set2) {
        if(set1.has(item)) {
            _intersection.push(item);
        }
    }
    return _intersection;
};

// 官方题解：排序 + 双指针
// 如果两个数组是有序的，则可以使用双指针的方法得到两个数组的交集。

// 首先对两个数组进行排序，然后使用两个指针遍历两个数组。
// 可以预见的是加入答案的数组的元素一定是递增的，为了保证加入元素的唯一性，
// 我们需要额外记录变量 pre 表示上一次加入答案数组的元素。

// 初始时，两个指针分别指向两个数组的头部。
// 每次比较两个指针指向的两个数组中的数字，如果两个数字不相等，
// 则将指向较小数字的指针右移一位，如果两个数字相等，
// 且该数字不等于 pre ，将该数字添加到答案并更新 pre 变量，
// 同时将两个指针都右移一位。
// 当至少有一个指针超出数组范围时，遍历结束。

var intersection = function(nums1, nums2) {
    nums1.sort((x, y) => x - y);
    nums2.sort((x, y) => x - y);
    const length1 = nums1.length, length2 = nums2.length;
    let index1 = 0, index2 = 0;
    const intersection = [];
    while (index1 < length1 && index2 < length2) {
        const num1 = nums1[index1], num2 = nums2[index2];
        if (num1 === num2) {
            // 保证加入元素的唯一性
            if (!intersection.length || num1 !== intersection[intersection.length - 1]) {
                intersection.push(num1);
            }
            index1++;
            index2++;
        } else if (num1 < num2) {
            index1++;
        } else {
            index2++;
        }
    }
    return intersection;
};
