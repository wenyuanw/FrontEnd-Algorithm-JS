/*
 * @Author: Ran
 * @Date: 2021-01-16 10:52:33
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-16 12:01:16
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ6-旋转数组的最小数字.js
 * @Description: 
 * 
把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。
NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

// 分析题目
// 这是一个非递减排序数组的旋转，非递减未必是递增
// 若[1, 2 ,3 ,4 ,5] 旋转 [3, 4, 5, 1, 2]
// 若[0, 1 ,1 ,1 ,1] 旋转 [1, 0, 1, 1, 1],[1, 1, 1, 0, 1]

// 笨方法
// 为什么牛客上面自测输入会出错？???
function minNumberInRotateArray(rotateArray) {
    // write code here
    if (rotateArray.length == 0) {
        return 0;
    }
    return Math.min(...rotateArray);
}
console.log(minNumberInRotateArray([3, 4, 5, 2, 2]));

// 正确方法是要用二分查找