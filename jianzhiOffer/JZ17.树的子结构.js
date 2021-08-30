/*
 * @Author: Ran
 * @Date: 2021-03-23 10:56:43
 * @LastEditTime: 2021-03-23 14:14:22
 * @FilePath: \JZoffer\jianzhiOffer\JZ17.树的子结构.js
 * @Description: 
 * 题目描述
 * 输入两棵二叉树A，B，判断B是不是A的子结构。
 * （ps：我们约定空树不是任意一个树的子结构）
 * 
 * 输入：
 * {8,8,#,9,#,2,#,5},{8,9,#,2}
 * 返回值：
 * true
 */

// 解题思路：
// 1. 在树 A 中找到和树 B 的根节点的值一样的节点R;
// 2. 判断 A 中以 R 位根节点的子树是不是包含和树 B 一样的结构。

// 首先，使用先序遍历遍历A树，在A树中找到和B树根节点值相同的结点。
// 然后使用先序遍历+递归来判断B树中的结点是不是在A树中。
// 不要忘了递归的结束条件：如果B树中的结点空了，就返回true。
// 如果是A树中的结点为null，则返回false。

function HasSubtree(pRoot1, pRoot2) {
    if (!pRoot2 || !pRoot1) return false;
    let res = false;
    // 首先找到节点值一样的节点
    if (pRoot1.val === pRoot2.val) {
        res = hasSub(pRoot1, pRoot2);
    }
    if (!res) {
        res = HasSubtree(pRoot1.left, pRoot2);
    }

    if (!res) {
        res = HasSubtree(pRoot1.right, pRoot2);
    }
    return res;
}

function hasSub(pRoot1, pRoot2) {
    // 当根节点的的值相同的时候，判断 B 是否是 A 的子树
    if (!pRoot2) return true;
    if (!pRoot1) return false;
    if (!(pRoot1.val === pRoot2.val)) return false;
    return hasSub(pRoot1.left, pRoot2.left) && hasSub(pRoot1.right, pRoot2.right);
}
