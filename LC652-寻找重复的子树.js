/* 
20210318
题目描述：
给定一棵二叉树，返回所有重复的子树。
对于同一类的重复子树，你只需要返回其中任意一棵的根结点即可。

两棵树重复是指它们具有相同的结构以及相同的结点值。

示例 1：

        1
       / \
      2   3
     /   / \
    4   2   4
       /
      4
下面是两个重复的子树：

      2
     /
    4
和

    4

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
 * @return {TreeNode[]}
 */
 var findDuplicateSubtrees = function(root) {
    let res = [];  // 存放重复子树的根节点
    let memo = new Map();  // 存放的子树
    traverse(root);
    return res;

    // 辅助函数
    function traverse(root) {
        if(!root) return '#';
        let left = traverse(root.left);
        let right = traverse(root.right);
        let subTree = left + ',' + right + ',' + root.val;

        if(!memo.has(subTree)) {
            memo.set(subTree, 0);
        } else {
            let freq = memo.get(subTree);
            memo.set(subTree, freq + 1);
        }

        // 需要记录子树重复的次数
        if(memo.get(subTree) === 1) {
            res.push(root);
        }
        return subTree;
    }
};


// 补充（为什么中序不行）：
// 对于
//      0          0
//     /    与      \     两个子树
//    0              0
// 中序结果：#0#0#   #0#0#
// 前序结果：00###   0#0##
// 后序结果：##0#0   ###00
// 序列化时只要不是中序，前序或者后序都能通过