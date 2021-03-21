/*
 * @Author: Ran
 * @Date: 2021-03-21 12:41:02
 * @LastEditTime: 2021-03-21 12:44:17
 * @FilePath: \JZoffer\my_test\赛码-常见输入输出-二维数组.js
 * @Description: 
 */

// --------- 二维数组初始化：----------
let aij = []; // 声明数组
let arr_line = [];
for (let i = 0; i < n; i++) {
    aij[i] = []; // 声明二维数组
    arr_line = read_line().split(' ') // 读取数组
    for (let j = 0; j < n; j++) {
        aij[i][j] = parseInt(arr_line[j]); // 
    }
}