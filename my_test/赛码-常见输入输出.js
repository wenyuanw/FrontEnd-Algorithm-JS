/*
 * @Author: Ran
 * @Date: 2021-03-21 12:41:02
 * @LastEditTime: 2021-03-28 10:41:35
 * @FilePath: \JZoffer\my_test\赛码-常见输入输出.js
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

// 输入字符串形式的数组，如：'[1, 2, 3, 4, 5]'
let nums = read_line();
nums = nums.replace('[', '');
nums = nums.replace(']', '');
nums = nums.split(',')
for (i = 0; i < nums.length; i++) {
    nums[i] = parseInt(nums[i]);
}
// 输出又要变回有 [] 的字符串
newarr = newarr.join(',')
newarr = '[' + newarr + ']'
console.log(newarr);