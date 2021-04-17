/*
 * @Author: Ran
 * @Date: 2021-04-17 14:16:11
 * @LastEditTime: 2021-04-17 15:31:46
 * @FilePath: \JZoffer\jianzhiOffer\JZ52-正则表达式匹配.js
 * @Description: 
 * 请实现一个函数用来匹配包括'.'和'*'的正则表达式。
 * 模式中的字符'.'表示任意一个字符，而'*'表示它前面的字符可以出现任意次（包含0次）。
 *  在本题中，匹配是指字符串的所有字符匹配整个模式。
 * 例如，字符串"aaa"与模式"a.a"和"ab*ac*a"匹配，但是与"aa.a"和"ab*a"均不匹配
 */

// 直接使用 正则 的面试用不上的方法
function match(str, pattern) {
    let re = new RegExp('^' + pattern + '$');
    return re.test(str);
}

// 书上的答案，递归的解法
function match(s, p) {
    if (s === null || p === null) return false;
    return matchCore(s, p);
}

function matchCore(str, pattern) {
    if (str === '' && pattern === '') return true;
    if (str !== '' && pattern === '') return false;
    if (pattern[1] === '*') {
        if (pattern[0] === str[0] || (pattern[0] === '.' && str !== '')) {
            // move on the next state
            return matchCore(str.slice(1), pattern.slice(2)) ||
                // stay on the current state
                matchCore(str.slice(1), pattern) ||
                // ignore a'*'
                matchCore(str, pattern.slice(2));
        } else {
            // ignore a'*'
            return matchCore(str, pattern.slice(2));
        }
    }
    if (pattern[0] === str[0] || (pattern[0] === '.' && str !== '')) {
        return matchCore(str.slice(1), pattern.slice(1));
    }
    return false;
}