/*
 * @Author: Ran
 * @Date: 2021-01-18 10:35:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-30 10:59:35
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


const maxDepth = (root) => {
    if (root == null) return 0;
    const queue = [root];
    let depth = 1;
    while (queue.length) {
        // 当前层的节点个数
        const levelSize = queue.length;
        // 逐个让当前层的节点出列
        for (let i = 0; i < levelSize; i++) {
            // 当前出列的节点
            const cur = queue.shift();
            // 左右子节点入列
            if (cur.left) queue.push(cur.left);
            if (cur.right) queue.push(cur.right);
        }
        // 当前层所有节点已经出列，如果队列不为空，说明有下一层节点，depth+1
        if (queue.length) depth++;
    }
    return depth;
};

//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/solution/liang-chong-jie-fa-di-gui-dfs-bfs-by-hyj8/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。