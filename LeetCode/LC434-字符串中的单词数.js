/* 
20210311
题目描述：
统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。
请注意，你可以假定字符串里不包括任何不可打印的字符

示例:
输入: "Hello, my name is John"
输出: 5
解释: 这里的单词是指连续的不是空格的字符，所以 "Hello," 算作 1 个单词。

输入:", , , ,        a, eaefa"
输出:6

输入:"     "
输出:0
*/

/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    // 要考虑字符串里面有多个空格的情况！！！
    // 字符串全为空格，字符串中间含有多个空格
    s = s.split(' ')
    let num = 0;
    for(let i = 0; i < s.length; i++) {
        if(s[i] !== '') num++;
    }
    return num;
};

// 不用库函数似乎执行用时跟内存消耗都会比较小?

// 不用库函数的思路:
// https://leetcode-cn.com/problems/number-of-segments-in-a-string/solution/yi-ci-bian-li-bu-shi-yong-ku-han-shu-by-webson_leo/
// 设置count初始值为0，遍历字符串，只要后一个字符不等于前一个字符，
// 并且后一个字符是空格的情况下，就把count++，为避免字符串最后一个是单词的情况，
// 所以手动在字符串末尾加一个空格，代码如下：
var countSegments = function(s) {
    let count = 0;
    s += ' ';
    for (let  ; p < s.length; p++){
        if (s[p - 1] !== s[p] && s[p] === ' ') count++;
    }
    return count;
};


/**
 * @param {string} s
 * @return {number}
 */
 var countSegments = function(s) {
    return s.split(" ").filter((item) => item !== "").length;
};

// 作者：hare-c
// 链接：https://leetcode-cn.com/problems/number-of-segments-in-a-string/solution/qiao-yong-split-he-filter-by-hare-c-68ze/