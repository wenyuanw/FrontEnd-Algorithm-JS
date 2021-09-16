/*
 * @Author: Ran
 * @Date: 2021-09-16 10:19:21
 * @LastEditTime: 2021-09-16 10:20:37
 * @FilePath: \FrontEnd-Algorithm-JS\LeetCode\LC20-有效的括号.js
 * @Description: 
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 */
// 自己写的
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const left = []
    const map = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const strArr = s.split('')
    let flag = true
    strArr.forEach(char => {
        if (char === '(' | char === '{' | char === '[') {
            left.push(char)
        } else {
            if (left.pop() !== map[char]) {
                flag = false
            }
        }
    })
    if (left.length !== 0) {
        return false
    }
    return flag
};

// 题解：
var isValid = function(s) {
    // 奇数的时候可以直接返回
    const n = s.length;
    if (n % 2 === 1) {
        return false;
    }
    const pairs = new Map([
        [')', '('],
        [']', '['],
        ['}', '{']
    ]);
    const stk = [];
    for (let ch of s) {
        if (pairs.has(ch)) {
            if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(ch);
        }
    };
    return !stk.length;
};