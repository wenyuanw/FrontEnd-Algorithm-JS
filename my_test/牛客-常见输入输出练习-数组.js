/*
 * @Author: Ran
 * @Date: 2021-03-19 16:34:47
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-21 20:13:58
 * @FilePath: \JZoffer\my_test\牛客-常见输入输出练习-数组.js
 * @Description: 
 */

// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
while (line = readline()) {
    var lines = line.split(" ");
    var a = parseInt(lines[0]);
    var b = parseInt(lines[1]);
    print(a + b);
}

// 本题为考试多行输入输出规范示例，无需提交，不计分。
var n = parseInt(readline());
var ans = 0;
for (var i = 0; i < n; i++) {
    lines = readline().split(" ")
    for (var j = 0; j < lines.length; j++) {
        ans += parseInt(lines[j]);
    }
}
print(ans);

/* 
输入包括两个正整数a,b(1 <= a, b <= 10^9),输入数据包括多组。
输出a+b的结果

输入例子1:
1 5
10 20

输出例子1:
6
30
 */

// 需要注意数据包括多组，不确定一共有几行
//  一、参考别人的写法：
while (n = readline()) {
    n = n.split(' ');
    console.log(parseInt(n[0]) + parseInt(n[1]));
}

while (line = readline()) {
    var arr = line.split(' ').map(item => parseInt(item));
    console.log(arr[0] + arr[1]);
}

//  二、自己的写法
while (true) {
    let str = readline();
    if (!str) break;
    str = str.split(' ');
    a = parseInt(str[0]);
    b = parseInt(str[1]);
    console.log(a + b);
}


// 计算a+b
// 打开以下链接可以查看正确的代码

// 输入描述:
// 输入第一行包括一个数据组数t(1 <= t <= 100)
// 接下来每行包括两个正整数a,b(1 <= a, b <= 10^9)

// 输出描述:
// 输出a+b的结果

// 示例1
// 输入
// 2
// 1 5
// 10 20

// 输出
// 6
// 30

let s1 = parseInt(readline());
for (let i = 0; i < s1; i++) {
    var arr = readline().split(' ').map(item => parseInt(item))
    console.log(arr[0] + arr[1]);
}


/* 
输入包括两个正整数a,b(1 <= a, b <= 10^9),输入数据有多组, 
如果输入为0 0则结束输入 
*/

var n;
while (n = readline()) {
    s = n.split(' ').map(Number);
    if (s[0] === 0 && s[1] === 0) {
        break;
    }
    console.log(s[0] + s[1]);
}

/* 
输入数据包括多组。
每组数据一行,每行的第一个整数为整数的个数n(1 <= n <= 100), 
n为0的时候结束输入。
接下来n个正整数,即需要求和的每个正整数。

输入:
4 1 2 3 4
5 1 2 3 4 5
0
输出:
10
15 
*/
var n;
while (n = readline()) {
    let sum = 0;
    s = n.split(' ').map(Number);
    if (s[0] === 0) {
        break;
    }
    for (let i = 1; i < s.length; i++) {
        sum += s[i];
    }
    console.log(sum);
}

// 利用shift
let s
while (s = readline()) {
    let arr = s.split(' ').map(Number);
    let sum = 0
    if (arr.shift() === 0) {
        break;
    }
    for (const num of arr) {
        sum += num;
    }
    print(sum);
}

/* 
输入的第一行包括一个正整数t(1 <= t <= 100), 表示数据组数。
接下来t行, 每行一组数据。
每行的第一个整数为整数的个数n(1 <= n <= 100)。
接下来n个正整数, 即需要求和的每个正整数。 */
let s1 = parseInt(readline());
for (let i = 0; i < s1; i++) {
    let sum = 0;
    var arr = readline().split(' ').map(Number);
    for (let i = 1; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum);
}

/* 输入数据有多组, 每行表示一组输入数据。
每行的第一个整数为整数的个数n(1 <= n <= 100)。
接下来n个正整数, 即需要求和的每个正整数。 */
while (s = readline()) {
    let arr = s.split(' ').map(Number);
    let sum = 0
    for (const num of arr) {
        sum += num;
    }
    print(sum - arr[0]);
}

/* 输入数据有多组, 每行表示一组输入数据。
每行不定有n个整数，空格隔开。(1 <= n <= 100)。 */
while (s = readline()) {
    let arr = s.split(' ').map(Number);
    let sum = 0
    for (const num of arr) {
        sum += num;
    }
    print(sum);
}