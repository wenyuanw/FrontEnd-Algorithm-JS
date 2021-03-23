/*
 * @Author: Ran
 * @Date: 2021-03-23 13:37:37
 * @LastEditTime: 2021-03-23 13:44:03
 * @FilePath: \JZoffer\LeetCode\LC100-相同的树.js
 * @Description: 
 * 题目描述：
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // 需要特别注意的就是 p ，q 中有 null 时候的情况
    if (p === null || q === null) {
        return p === null && q === null;
    }
    // p.val q.val 是否都存在呢？如果没有上面的判断，就会出错
    // TypeError: Cannot read property 'val' of null
    if (p.val === q.val) {
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    } else {
        return false;
    }

};