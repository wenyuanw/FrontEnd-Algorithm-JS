/*
 * @Author: Ran
 * @Date: 2021-05-15 10:33:07
 * @LastEditTime: 2021-05-15 13:31:32
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ19-顺时针打印矩阵.js
 * @Description: 
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字，
 * 例如，如果输入如下4 X 4矩阵： 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16
 * 则依次打印出数字1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10.
 */

// 沿着顺时针方向走（右->下->左->上->），毎走完一行或者一列后, 走过的对应边界也缩小, 不断循环, 
// 以至最后边界无法再缩小时, 循环结束
//     比如，向右走完一行，上边界top下移一行；
//     向下走完一行，右边界right左移一行；
//     向左走完一行，下边界bottom上移一行；
//     向上走完一行，左边界left右移一行；

// 设定上下左右四个边界:
function printMatrix(matrix) {
    let res = []
    if (matrix.length === 0) return []
    let r = matrix[0].length - 1 //right
    let b = matrix.length - 1 // bottom
    let l = 0 // left
    let t = 0 // top
    while (true) {
        // turn right
        for (let i = l; i <= r; i++) res.push(matrix[t][i])
        if (++t > b) break
            // turn down
        for (let i = t; i <= b; i++) res.push(matrix[i][r])
        if (--r < l) break
            // turn left
        for (let i = r; i >= l; i--) res.push(matrix[b][i])
        if (--b < t) break
            // turn up
        for (let i = b; i >= t; i--) res.push(matrix[i][l])
        if (++l > r) break
    }
    return res
}




// 菜鸡如我，一开始还以为给的矩阵都是 n*n 的 
function printMatrix(matrix) {
    const len = matrix.length
    let res = []
    if (matrix === null) return null
    if (len === 1) return matrix
    let i = 0,
        j = 0
    for (let l = len; l > 0; l--) {
        while (j < l) {
            res.push(matrix[i][j])
            if (res.length === len * len) return res
            j++
        }
        j = j - 1
        i = i + 1
        while (i < l) {
            res.push(matrix[i][j])
            i++
        }
        j = j - 1
        i = i - 1
        while (j >= len - l) {
            res.push(matrix[i][j])
            j--
        }
        if (res.length === len * len) return res
        i = i - 1
        j = j + 1
        while (i > len - l + 1) {
            res.push(matrix[i][j])
            i--
        }
    }
}