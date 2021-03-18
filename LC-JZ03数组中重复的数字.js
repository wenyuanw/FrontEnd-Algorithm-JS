/* 
20210317
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
数组中某些数字是重复的，但不知道有几个数字重复了，
也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let repNum; 
    while(true) {
        repNum = nums.pop();
        if (nums.indexOf(repNum) !== -1) {
            return repNum;
        }
    }
};

// 使用 Map 解决
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let map = new Map();
    for(i of nums) {
        if(map.has(i)) return i;
        map.set(i);
    }
    return null;
};