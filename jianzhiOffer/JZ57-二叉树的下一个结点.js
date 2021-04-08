/*
 * @Author: Ran
 * @Date: 2021-04-08 09:37:20
 * @LastEditTime: 2021-04-08 11:31:38
 * @FilePath: \JZoffer\jianzhiOffer\JZ57-二叉树的下一个结点.js
 * @Description: 
 * 给定一个二叉树和其中的一个结点， 请找出中序遍历顺序的下一个结点并且返回。
 * 注意， 树中的结点不仅包含左右子结点， 同时包含指向父结点的指针。
 * 
 * 包含指向父节点的指针？？？定义怎么没给出来。。。醉了
 */

/*function TreeLinkNode(x){
    this.val = x;
    this.left = null;
    this.right = null;
    this.next = null;
}*/
// 看的是牛客的题解：
function GetNext(pNode) {
    if (pNode === null) return null;

    // 存在右子树
    if (pNode.right) {
        let right = pNode.right;
        while (right.left !== null) {
            right = right.left;
        }
        return right;
    }

    // 当前结点是父亲结点的左孩子 || 当前结点为父亲结点的右孩子结点
    while (pNode.next) {
        let root = pNode.next;
        if (root.left == pNode) {
            return root;
        }
        pNode = pNode.next;
    }

    // 最右结点：
    return null;
}

// 暴力解法：
/* 1.先根据所给的结点求出根节点
2.根据跟结点求出中序遍历的结果并保存
3.遍历中序遍历的结果，与所给结点进行比较，相等的时候返回下一个结点即可。 */

function GetNext(pNode) {
    let root = null;
    let temp = pNode;
    while (temp) {
        root = temp;
        temp = temp.next;
    }
    let inorderArr = inorderTraversal(root);
    for (let i = 0; i < inorderArr.length; i++) {
        if (inorderArr[i] === pNode && i + 1 != inorderArr.length) {
            return inorderArr[i + 1];
        }
    }
    return null;
}

function inorderTraversal(root) {
    // 中序遍历： 左 -> 根 -> 右
    let inorderArr = [];
    // base case
    const inorder = root => {
        if (!root) return null;
        // 左：
        inorder(root.left);
        // 根：
        inorderArr.push(root);
        // 右：
        inorder(root.right);
    };
    inorder(root);
    return inorderArr;
}