/* 
20210315
题目描述：
给定一个二叉树的根节点 root ，返回它的前序遍历。
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
 * @return {number[]}
 */
 var preorderTraversal = function(root) {
    let preorderArr = [];
    const preorder = root => {
        if(!root) return null;
        preorderArr.push(root.val);
        preorder(root.left);
        preorder(root.right);
    }
    preorder(root);
    return preorderArr;
};