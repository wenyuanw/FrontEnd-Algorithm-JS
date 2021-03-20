/*
 * @Author: Ran
 * @Date: 2021-03-20 09:46:57
 * @LastEditTime: 2021-03-20 09:57:05
 * @FilePath: \JZoffer\my_test\牛客-常见输入输出练习-字符串.js
 */

/* 输入有两行，第一行n
第二行是n个空格隔开的字符串 */
let n = parseInt(readline());
let s = readline().split(' ').sort().join(' ');
console.log(s);

/* 多个测试用例，每个测试用例一行。
每行通过空格隔开，有n个字符，n＜100 */
var s;
while (s = readline()) {
    s = s.split(' ').sort().join(' ');
    console.log(s);
}

/* 多个测试用例，每个测试用例一行。
每行通过,隔开，有n个字符，n＜100 */
var s;
while (s = readline()) {
    s = s.split(',').sort().join(',');
    console.log(s);
}