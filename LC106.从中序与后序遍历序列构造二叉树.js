/* 
20210316
题目描述：
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]
后序遍历 postorder = [9,15,7,20,3]

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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    let leftPostorder = [];
    let leftInorder = [];
    let rightPostorder = [];
    let rightInorder = [];
    
    // basecase 应该怎么设定呢？
    if(postorder.length < 1) {
        return null;
    }

    // 根据后序遍历即可确定根节点
    let root = new TreeNode(postorder[postorder.length - 1]);
    let rootIndex = inorder.indexOf(root.val);

    // 确定左右子树的前序遍历序列
    leftInorder = inorder.slice(0, rootIndex);
    rightInorder = inorder.slice(rootIndex + 1);
    
    // 确定左右子树的后序遍历序列
    leftPostorder = postorder.slice(0, leftInorder.length);
    rightPostorder= postorder.slice(leftInorder.length, postorder.length - 1);

    // 左子树后序跟中序序列递归调用 buildTree()
    root.left = buildTree(leftInorder, leftPostorder);
    // 右子树后序跟中序序列递归调用 buildTree()
    root.right = buildTree(rightInorder, rightPostorder);

    return root;
};