/*
 * @Author: Ran
 * @Date: 2021-03-19 13:05:27
 * @LastEditTime: 2021-03-21 13:06:37
 * @FilePath: \JZoffer\my_test\BS2-meituan-值日.js
 * @Description: 美团笔试
 */
/* 题目描述：
值日
小美和小团的班上有 n 个人，分别编号为 1 到 n。其中小美的编号为 1，小团的编号为 2。
班上有个值日表 ai,j。第一天由小美值日，第二天由小团值日。
接下来的每一天，如果今天是 i 值日，昨天是 j 值日，那么明天就是 ai,j 值日。
值日表是已经规划好的，保证今天值日的同学明天一定不值日。
小美想知道，第 m 天值日的同学的编号。

输入描述
第一行两个整数 n, m，表示班上有 n 个同学和小美想知道的天数。
接下来 n 行，每行 n 个整数，表示值日表 ai,j (0 ≤ ai,j ≤ n)。保证有且仅有对角线上的数字是 0。
1 ≤ n ≤ 500, 1 ≤ m ≤ 1018。
输出描述
输出一行一个整数，表示第 m 天值日的同学的编号。

样例：
3 7
0 3 2
3 0 3
2 1 0 */

let line1 = read_line().split(' ');

let n = parseInt(line1[0]); // 人数
let m = parseInt(line1[1]); // 想知道的天数

// 接下来的输入 n 行数据，需要处理成 n * n 的矩阵
let aij = [];
let arr_line = [];
for (let i = 0; i < n; i++) {
    aij[i] = []; // 声明二维数组
    arr_line = read_line().split(' ')
    for (let j = 0; j < n; j++) {
        aij[i][j] = parseInt(arr_line[j]); // 
    }
}


// 现在想知道的的是第 m 天
let res = [];
res[0] = 1;
res[1] = 2;

for (let z = 2; z < m; z++) {
    res[z] = aij[res[z - 1] - 1][res[z - 2] - 1]
}

// 值日值到后面会开始循环，可以取模做？
// 样例中： 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, (2, 3, 1 循环) ...
// 如果 i，j  之前遇到过，就会进入循环的值日      
// 把之前的记录下来，用一个 visit[i][j] 记录 i 和 j， 发现重复之后扫一遍之前记录下来的昨天是 j 今天是 i 的，中间那段就是循环的周期  

console.log(res[m - 1]);