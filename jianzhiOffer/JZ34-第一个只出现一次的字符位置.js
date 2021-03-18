/*
 * @Author: Ran
 * @Date: 2021-03-08 23:27:42
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-09 13:47:40
 * @FilePath: \JZoffer\JZ34-第一个只出现一次的字符位置.js
 * @Description: 
 * 本题同时也是 LeetCode 387 类似题目，
 * 不过 LeetCode 中可以假设该字符串只包含小写字母
 * 题目描述：
 * 在一个字符串(0<=字符串长度<=10000，全部由字母组成)中找到第一个只出现一次的字符,
 * 并返回它的位置, 如果没有则返回 -1（需要区分大小写）.（从0开始计数）
 */


//  个人思路：
//  字符串转换为数组，从头遍历字符串数组，将数组元素存入新数组 notRepeat，
//  若是出现第二次，则从 notRepeat 中删去该元素
//  思路出错，不能删除，但是可以放到最后面
//  最后要返回第一个只出现一次的字符，利用 API 将 notRepeat[0] 在 strArr 中的索引值返回即可。

function FirstNotRepeatingChar(str) {
    //     将字符串转换为数组处理
    let strArr = str.split('');
    let atrObj = {};
    for (let i = 0; i < strArr.length; i++) {
        if (atrObj[strArr[i]]) {
            atrObj[strArr[i]]++;
        } else {
            atrObj[strArr[i]] = 1;
        }
    }
    for (let item in atrObj) {
        if (atrObj[item] === 1) {
            return strArr.indexOf(item);
        }
    }
    return -1;
}

// 解法二：队列的思想
function FirstNotRepeatingChar(str) {
    let strArr = str.split('');
    for (let i = 0; i < strArr.length; i++) {
        let uniqChar = strArr[0];
        strArr.shift();
        if (strArr.indexOf(uniqChar) === -1) {
            return i;
        }
        strArr.push(uniqChar);
    }
    return -1;
}