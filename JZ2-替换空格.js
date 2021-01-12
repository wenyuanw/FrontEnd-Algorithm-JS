/*
 * @Author: Ran
 * @Date: 2021-01-12 10:26:22
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-12 10:28:19
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ2-替换空格.js
 * @Description: 
 *  请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 *  例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

//  解法一:正则表达式
function replaceSpace(str) {
    return str.replace(/ /g, '%20');
}
console.log(replaceSpace('We Are Happy.'));