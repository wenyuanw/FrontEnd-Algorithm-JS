/*
 * @Author: Ran
 * @Date: 2021-04-17 14:16:11
 * @LastEditTime: 2021-04-17 16:16:17
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

// 动态规划，从后往前分析
const isMatch = (s, p) => {
    if (s == null || p == null) return false;

    const sLen = s.length,
        pLen = p.length;

    const dp = new Array(sLen + 1);
    for (let i = 0; i < dp.length; i++) {
        dp[i] = new Array(pLen + 1).fill(false); // 将项默认为false
    }
    // base case
    dp[0][0] = true;
    for (let j = 1; j < pLen + 1; j++) {
        if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
    }
    // 迭代
    for (let i = 1; i < sLen + 1; i++) {
        for (let j = 1; j < pLen + 1; j++) {

            if (s[i - 1] == p[j - 1] || p[j - 1] == ".") {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] == "*") {
                if (s[i - 1] == p[j - 2] || p[j - 2] == ".") {
                    dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j];
                } else {
                    dp[i][j] = dp[i][j - 2];
                }
            }
        }
    }
    return dp[sLen][pLen]; // 长sLen的s串 是否匹配 长pLen的p串
};

//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/regular-expression-matching/solution/shou-hui-tu-jie-wo-tai-nan-liao-by-hyj8/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。