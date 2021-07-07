/*
 * @Author: Ran
 * @Date: 2021-07-07 23:11:15
 * @LastEditTime: 2021-07-07 23:46:00
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ62-二叉搜索树的第k个结点.js
 * @Description: 
 * 给定一棵二叉搜索树，请找出其中的第k小的TreeNode结点。
 * LeetCode上面是第 k 大的结点，牛客上面是第 k 小的结点
 * 第 k 小或者第 k 大，就是先遍历做节点还是遍历右节点的区别
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function KthNode(pRoot, k) {
    if (k <= 0) return null
    let res = 0
    let rank = 0

    function traverse(pRoot, k) {
        if (pRoot === null) return
        traverse(pRoot.left, k)
            // 中序遍历代码的位置
        rank++
        if (k === rank) {
            res = pRoot.val
            return
        }
        traverse(pRoot.right, k)
    }
    traverse(pRoot, k)
    return res
}

function KthNode(pRoot, k) {
    // write code here
    if (!pRoot || !k) {
        return null;
    }
    return Kth(pRoot);
}

function KthNode(pRoot, k) {
    //核心在于中序遍历
    var list = [];
    addNode(pRoot, list);
    return list[k - 1];
}
//中序遍历
function addNode(root, list) {
    if (!root)
        return;
    addNode(root.left, list);
    list.push(root);
    addNode(root.right, list);
}