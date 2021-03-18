/* 
20210315
题目描述：
给定一个不含重复元素的整数数组 nums 。
一个以此数组直接递归构建的 最大二叉树 定义如下：

二叉树的根是数组 nums 中的最大元素。
左子树是通过数组中 最大值左边部分 递归构造出的最大二叉树。
右子树是通过数组中 最大值右边部分 递归构造出的最大二叉树。
返回有给定数组 nums 构建的 最大二叉树 。

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
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    let maxVal = 0;
    let index = -1;
    let leftNums = [];
    let rightNums = [];

    // base case
    if(nums.length === 0) return null;
    // 1.找到 nums 中的最大元素
    maxVal = Math.max(...nums);
    index = nums.indexOf(maxVal);
    leftNums = nums.slice(0, index);
    rightNums = nums.slice(index + 1, nums.length);
    
    // 最大值作为根节点创建二叉树
    let root = new TreeNode(maxVal); // 注意这里要加 new 关键字！！！！
    // 2.左边部分递归构造最大二叉树
    root.left = constructMaximumBinaryTree(leftNums);
    // 3.右边部分递归构造最大二叉树
    root.right = constructMaximumBinaryTree(rightNums);

    return root;
};