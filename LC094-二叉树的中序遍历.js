/* 
20210315
题目描述：
给定一个二叉树的根节点 root ，返回它的中序遍历。
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
 * @return {number[]}
 */
// 递归解法：
 var inorderTraversal = function(root) {
    // 中序遍历： 左 -> 根 -> 右
    let inorderArr = [];
    // base case
    const inorder = root => {
        if(!root) return null;
        // 左：
        inorder(root.left);
        // 根：
        inorderArr.push(root.val)
        // 右：
        inorder(root.right);
    };
    inorder(root);
    return inorderArr;
};

// 迭代解法：
var inorderTraversal = function(root) {
    const res = [];
    const stk = [];
    while (root || stk.length) {
        // 左：
        while (root) {
            stk.push(root);
            root = root.left;
        }
        root = stk.pop();
        res.push(root.val);
        // 右：
        root = root.right;
    }
    return res;
};

// 作者：LeetCode-Solution
// 链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/er-cha-shu-de-zhong-xu-bian-li-by-leetcode-solutio/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 比较好理解的颜色标记法：
// 来自：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/yan-se-biao-ji-fa-yi-chong-tong-yong-qie-jian-ming/
var inorderTraversal = function(root) {
    const [WHITE, GRAY] = [0, 1]; // WHITE - 未访问的新结点； GRAY - 已访问的结点
    const res = [];
    const stack = [[WHITE, root]];
    let color, node;
    while (stack.length) {
        // 解构赋值：
        [color, node] = stack.pop(); // 若栈中有元素，则按照左节点、根节点、右节点的顺序依次弹出元素
        if (!node) continue;
        if (color === WHITE) {
            // 当前指向的结点是未访问过的结点，将其右节点，根节点，左节点依次入栈
            stack.push([WHITE, node.right]);
            stack.push([GRAY, node]);
            stack.push([WHITE, node.left]);
        } else res.push(node.val);
    }
    return res;
};

// 这位大佬迭代的思路看起来更加清晰
const inorderTraversal = (root) => {
    const res = [];
    const stack = [];
  
    while (root) {        // 能压入栈的左子节点都压进来
      stack.push(root);
      root = root.left;
    }
    while (stack.length) {
      let node = stack.pop(); // 栈顶的节点出栈
      res.push(node.val);     // 在压入右子树之前，处理它的数值部分（因为中序遍历）
      node = node.right;      // 获取它的右子树
      while (node) {          // 右子树存在，执行while循环    
        stack.push(node);     // 压入当前root
        node = node.left;     // 不断压入左子节点
      }
    }
    return res;
  };
  
//   作者：xiao_ben_zhu
//   链接：https://leetcode-cn.com/problems/binary-tree-inorder-traversal/solution/shou-hua-tu-jie-yong-zhan-mo-ni-zhong-xu-bian-li-z/
//   来源：力扣（LeetCode）
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。