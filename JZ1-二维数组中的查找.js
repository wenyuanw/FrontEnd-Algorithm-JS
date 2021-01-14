/*
 * @Author: Ran
 * @Date: 2021-01-14 11:20:08
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-14 11:20:43
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ1-二维数组中的查找.js
 * @Description: 
 * 在一个二维数组中（每个一维数组的长度相同），
 * 每一行都按照从左到右递增的顺序排序，
 * 每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，
 * 判断数组中是否含有该整数。
 */
// 1.暴力解法
function Find(target, array) {
    // write code here
    let row = array.length;
    let col = array[0].length;
    let flag = false;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (array[i][j] === target) {
                flag = true;
            }
        }
    }
    return flag;
}