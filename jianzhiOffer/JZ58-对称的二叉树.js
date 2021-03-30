/*
 * @Author: Ran
 * @Date: 2021-03-30 09:27:15
 * @LastEditTime: 2021-03-30 10:34:13
 * @FilePath: \JZoffer\jianzhiOffer\JZ58-对称的二叉树.js
 * @Description: 
 * 请实现一个函数，用来判断一棵二叉树是不是对称的。
 * 注意，如果一个二叉树同此二叉树的镜像是同样的，定义其为对称的。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (!root) return true;
    return isSym(root.left, root.right);
};

function isSym(leftRoot, rightRoot) {
    if (leftRoot === null && rightRoot === null) {
        return true;
    }
    if (leftRoot === null || rightRoot === null) {
        return false;
    }

    return leftRoot.val === rightRoot.val &&
        isSym(leftRoot.left, rightRoot.right) &&
        isSym(leftRoot.right, rightRoot.left);
}


var isSymmetric = (root) => {
    if (!root) return true
    let leftStack = [],
        rightStack = [] // 维护两个栈
    let curLeft = root.left // 当前的左子树
    let curRight = root.right // 当前的右子树
    while (curLeft || curRight || leftStack.length || rightStack.length) {
        while (curLeft) { // 左子树存在
            leftStack.push(curLeft) // 推入leftStack栈
            curLeft = curLeft.left // 不断将左子树入栈
        }
        while (curRight) { // 右子树存在
            rightStack.push(curRight) // 推入rightStack栈
            curRight = curRight.right // 不断将右子树压入栈
        }
        if (leftStack.length !== rightStack.length) return false
            // 栈的高度不相等，说明结构不对称
        curLeft = leftStack.pop() // 栈顶节点出栈，赋给curLeft
        curRight = rightStack.pop() // 栈顶节点出栈，赋给curRight
        if (curLeft.val !== curRight.val) return false
            // 两个栈出栈的节点值不相等 不对称
        curLeft = curLeft.right // 考察左子树的right
        curRight = curRight.left // 考察右子树的left
    }
    return true
}

//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/symmetric-tree/solution/di-gui-zhan-mo-ni-di-gui-bfs-by-hyj8/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。