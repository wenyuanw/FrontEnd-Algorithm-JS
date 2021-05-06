/*
 * @Author: Ran
 * @Date: 2021-05-06 22:06:34
 * @LastEditTime: 2021-05-06 22:26:29
 * @FilePath: \JZoffer\jianzhiOffer\JZ65-矩阵中的路径.js
 * @Description: 
 * 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
 * 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。
 * 同一个单元格内的字母不允许被重复使用。
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    // 二维数组跟树不同 做DFS的时候 有不同的起点
    for (let i = 0; i < board.length; i++) {
        // 因为是矩阵 board[0]
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true
            }
        }
    }
    return false

    // DFS 最后一步拿到结果 回溯的时候 上层（栈底）才能拿到值
    function dfs(board, word, i, j, k) {
        // 递归的base case
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[k]) {
            return false
        }
        if (k === word.length - 1) {
            console.log('k', k)
            return true
        }
        board[i][j] = '' // 标记下已经查找过的
            // !上下左右 每次进去 k+1==>表示 走了多少步
        let res = dfs(board, word, i - 1, j, k + 1) || dfs(board, word, i + 1, j, k + 1) || dfs(board, word, i, j - 1, k + 1) || dfs(board, word, i, j + 1, k + 1)
            // 撤销
        board[i][j] = word[k]
        return res
    }
};


//   作者：gang-feng
//   链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/solution/jsjie-fa-by-gang-feng-rp5e/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。