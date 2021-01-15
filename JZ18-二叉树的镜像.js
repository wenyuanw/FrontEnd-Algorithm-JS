/*
 * @Author: Ran
 * @Date: 2021-01-15 10:24:25
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-15 10:29:25
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ18-二叉树的镜像.js
 * @Description: 
 * 剑指offer18题
 * 也是LeetCode第226题——翻转二叉树
 * 操作给定的二叉树，将其变换为源二叉树的镜像。
 * 难度：简单
 */
// 递归对二叉树进行翻转
function Mirror(root) {
    // write code here
    if (!root) {
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left);
    Mirror(root.right);
    return root;
}