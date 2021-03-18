/* 
20210316
题目描述：
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出
前序遍历 preorder = [3,9,20,15,7]
中序遍历 inorder = [9,3,15,20,7]

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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    let leftPreorder = [];
    let leftInorder = [];
    let rightPreorder = [];
    let rightInorder = [];
    
    // basecase 应该怎么设定呢？
    if(preorder.length < 1) {
        return null;
    }

    // 根据前序遍历即可确定根节点
    let root = new TreeNode(preorder[0]);
    let rootIndex = inorder.indexOf(root.val);

    // 确定左右子树的前序遍历序列
    leftInorder = inorder.slice(0, rootIndex);
    rightInorder = inorder.slice(rootIndex + 1);
    
    // 确定左右子树的中序遍历序列
    leftPreorder = preorder.slice(1, leftInorder.length + 1);
    rightPreorder= preorder.slice(leftInorder.length + 1);

    // 左子树前序跟中序序列递归调用 buildTree()
    root.left = buildTree(leftPreorder, leftInorder);
    // 右子树前序跟中序序列递归调用 buildTree()
    root.right = buildTree(rightPreorder, rightInorder);

    return root;
};