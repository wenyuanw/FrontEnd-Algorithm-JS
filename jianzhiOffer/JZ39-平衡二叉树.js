/*
 * @Author: Ran
 * @Date: 2021-02-27 23:00:55
 * @LastEditors: Ran
 * @LastEditTime: 2021-02-28 00:18:03
 * @FilePath: \JZoffer\JZ39-平衡二叉树.js
 * @Description: 
 * 题目描述：
 * 输入一棵二叉树，判断该二叉树是否是平衡二叉树。
 * 在这里，我们只需要考虑其平衡性，不需要考虑其是不是排序二叉树
 * 平衡二叉树（Balanced Binary Tree），具有以下性质：
 * 它是一棵空树或它的左右两个子树的高度差的绝对值不超过1，并且左右两个子树都是一棵平衡二叉树。
 */

//  解题思路：
//  必然是要利用递归来求解的 然而怎么编写递归程序呢 结合二叉树深度的题目
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */

function IsBalanced_Solution(pRoot) {

    if (!pRoot) {
        return true;
    }
    const LDepth = TreeDepth(pRoot.left);
    const RDepth = TreeDepth(pRoot.right);
    const diff = Math.abs(LDepth - RDepth);
    if (diff > 1) {
        return false;
    }
    return IsBalanced_Solution(pRoot.left) && IsBalanced_Solution(pRoot.right);

    function TreeDepth(root) {
        if (root == null) {
            return 0;
        }
        let ltfeDep = TreeDepth(root.left);
        let rightDep = TreeDepth(root.right);
        return 1 + Math.max(ltfeDep, rightDep);
    }
}