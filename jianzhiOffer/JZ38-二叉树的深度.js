/*
 * @Author: Ran
 * @Date: 2021-01-18 10:35:10
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-18 10:42:54
 * @Description: 
 * 输入一棵二叉树，求该树的深度。
 * 从根结点到叶结点依次经过的结点（含根、叶结点）
 * 形成树的一条路径，最长路径的长度为树的深度。
 */
// 利用递归求解：
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function TreeDepth(pRoot) {
    // 递归的出口
    if (pRoot == null) {
        return 0;
    }
    // 拿到左子树的最大深度
    let ltfeDep = TreeDepth(pRoot.left);
    // 拿到右子树的最大深度
    let rightDep = TreeDepth(pRoot.right);
    // 找出最大值，并且加上root这一层即可
    return 1 + Math.max(ltfeDep, rightDep);
}