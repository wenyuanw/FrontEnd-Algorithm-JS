/*
 * @Author: Ran
 * @Date: 2021-07-20 22:30:41
 * @LastEditTime: 2021-07-21 08:50:25
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ24-二叉树中和为某一值的路径.js
 * @Description: 
 * 输入一颗二叉树的根节点和一个整数，按字典序打印出二叉树中结点值的和为输入整数的所有路径。
 * 路径定义为从树的根结点开始往下一直到叶结点所经过的结点形成一条路径。
 * 
 * 输入：{10,5,12,4,7},22
 * 返回值：[[10,5,7],[10,12]]
 * 
 * 输入：{10,5,12,4,7},15
 * 返回值：[]
 */


/* 遇到二叉树、 多叉树 求和类的问题， 一般可以用回溯算法解决，
回溯算法的核心是： 选择 - 判断 - 递归 - 撤销选择。
对于这个问题来说， 就是选择某一节点 - 判断当前值是否为sum -
    递归 - 撤销这个节点的选择。 时间复杂度O(N) O(N)， 空间复杂度O(H) O(H)。 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (!root) return [];
    const res = [];
    dfs(root, sum, res, []);
    return res;
};

function dfs(root, sum, res, temp) {
    if (!root) return;
    temp.push(root.val); // 1. 选择
    if (!root.left && !root.right && sum === root.val) { // 2. 判断
        res.push([...temp]);
    } else {
        dfs(root.left, sum - root.val, res, temp); // 3. 递归
        dfs(root.right, sum - root.val, res, temp);
    }
    temp.pop(); // 4. 撤销选择
}


/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // write code here
}
module.exports = {
    FindPath: FindPath
};

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function FindPath(root, expectNumber) {
    // write code here
    let result = []
    if (!root) return result

    function dfs(root, path) {
        path.push(root.val)
        if (!root.left && !root.right) {
            let sum = path.reduce((prev, curr, idx, arr) => {
                return prev + curr;
            })
            if (sum == expectNumber) {
                result.push(path)
            }
            return
        }
        if (root.left) dfs(root.left, [...path])
        if (root.right) dfs(root.right, [...path])
    }
    dfs(root, [])
    return result
}
module.exports = {
    FindPath: FindPath
};

/**
 *
 * @param {Node} root
 * @param {Number} target
 */
function findPath(root, target) {
    const paths = []; // 存放所有满足条件的路径
    let sum = 0; // 路径上的节点值的总和

    function _findPath(node, path) {
        if (node === null) {
            return;
        }

        // 把当前节点放入路径中
        sum = sum + node.value;
        path.push(node);

        const isLeaf = node.left === null && node.right === null;

        // 如果是叶节点, 并且路径上的节点和满足条件, 记录这条路径
        if (isLeaf && sum === target) {
            paths.push([...path]);
        }

        // 当前节点有左子树, 向左子树递归
        if (node.left !== null) {
            _findPath(node.left, path);
        }

        // 当前节点有右子树, 向右子树递归
        if (node.right !== null) {
            _findPath(node.right, path);
        }

        // 把当前节点从路径中移除
        sum = sum - node.value;
        path.pop(node);
    }

    _findPath(root, []);
    return paths;
}