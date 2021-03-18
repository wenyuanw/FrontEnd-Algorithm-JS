/* 
20210312
题目描述：
给你二叉树的根结点 root ，请你将它展开为一个单链表：

展开后的单链表应该同样使用 TreeNode ，其中 right 子指针指向链表中下一个结点，
而左子指针始终为 null 。
展开后的单链表应该与二叉树 先序遍历 顺序相同。

输入：root = [1,2,5,3,4,null,6]
输出：[1,null,2,null,3,null,4,null,5,null,6]

看图较好理解:https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/
算法小抄:https://labuladong.gitbook.io/algo-en/v/master/shu-ju-jie-gou-xi-lie/shou-ba-shou-shua-er-cha-shu-xun-lian-di-gui-si-wei/er-cha-shu-xi-lie-1
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
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
 var flatten = function(root) {
    if(!root) return null;

    // 1.把左右子树都展开为链表:
    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;
    // 2.左边的链表放到右边
    root.right = left;
    root.left = null;

    // 3.右子树展开的链表 right 需要放到尾部
    let p = root;
    while(p.right !== null) {
        p = p.right;
    }
    p.right = right;
};