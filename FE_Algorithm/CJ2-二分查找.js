/*
 * @Author: Ran
 * @Date: 2021-03-16 16:59:57
 * @LastEditTime: 2021-05-04 14:00:13
 * @FilePath: \snackbar-wuef:\FrontEndLearning\FE_Learning\JZoffer\FE_Algorithm\CJ2-二分查找.js
 * @Description: 
 */
/* 
2021
记录前端求职常见的编程题
-----------------------
*****二分查找*****
*/

// https://www.cnblogs.com/kyoner/p/11080078.html

// 搜索左侧边界：
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