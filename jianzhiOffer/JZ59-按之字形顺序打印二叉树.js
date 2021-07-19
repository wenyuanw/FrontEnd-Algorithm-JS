/*
 * @Author: Ran
 * @Date: 2021-07-15 23:17:03
 * @LastEditTime: 2021-07-16 00:14:12
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ59-按之字形顺序打印二叉树.js
 * @Description: 
 * 请实现一个函数按照之字形打印二叉树，即第一行按照从左到右的顺序打印，
 * 第二层按照从右至左的顺序打印，第三行按照从左到右的顺序打印，其他行以此类推。
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
function Print(pRoot) {
    let ret = []
    if (!pRoot) return ret
    let q = []
    q.push(pRoot)
    let level = 0
    while (q.length) {
        let sz = q.length
        let ans = []

        while (sz--) {
            let node = q.shift()
            ans.push(node.val)

            if (node.left) q.push(node.left)
            if (node.right) q.push(node.right)
        }
        ++level
        if (!(level & 1)) {
            ans.reverse()
        }
        ret.push(ans)
    }
    return ret
}