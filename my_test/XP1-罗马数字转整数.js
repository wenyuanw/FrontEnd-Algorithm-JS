/*
 * @Author: Ran
 * @Date: 2021-03-09 11:08:19
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-09 13:03:29
 * @FilePath: \JZoffer\XP1-罗马数字转整数.js
 * @Description:
 * ----------- 虾皮2021秋招部分笔试题汇总 -----------
 * ----https://www.nowcoder.com/test/28761331/summary 
 * 题目描述：
 * 罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
        字符          数值
        I             1
        V             5
        X             10
        L             50
        C             100
        D             500
        M             1000
 * 例如， 罗马数字 2 写做 II ，即为两个并列的 1。
 * 12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。
 * 通常情况下，罗马数字中小的数字在大的数字的右边。
 * 但也存在特例，例如 4 不写做 IIII，而是 IV。
 * 数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。
 * 同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：
 * I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
 * X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
 * C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
 * 给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。
 */

/**
 * 
 * @param s string字符串 
 * @return int整型
 */

function romanToInt(s) {
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
}
module.exports = {
    romanToInt: romanToInt
};