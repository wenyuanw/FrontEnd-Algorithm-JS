/*
 * @Author: Ran
 * @Date: 2021-03-29 21:45:52
 * @LastEditTime: 2021-03-29 21:46:09
 * @FilePath: \JZoffer\LeetCode\LC013-罗马数字转整数.js
 * @Description: 
 * https://leetcode-cn.com/problems/roman-to-integer/
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let StrObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let specialArr = [];
    let intNum = 0;
    let strArr = s.split('');
    for (let i = 0; i < strArr.length - 1; i++) {
        // 只判断到倒数第二个元素的位置
        if (StrObj[strArr[i]] >= StrObj[strArr[i + 1]]) {
            intNum += StrObj[strArr[i]];
        } else {
            specialArr.push(i)
            i++;
        }
    }
    if (specialArr[specialArr.length - 1] != strArr.length - 2)
        intNum += StrObj[strArr[strArr.length - 1]];
    if (specialArr.length === 0) {
        return intNum;
    } else {
        for (let j = 0; j < specialArr.length; j++) {
            intNum += StrObj[strArr[specialArr[j] + 1]] - StrObj[strArr[specialArr[j]]];
        }
        return intNum;
    }
};