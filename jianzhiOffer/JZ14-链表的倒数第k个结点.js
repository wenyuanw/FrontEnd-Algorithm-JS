/*
 * @Author: Ran
 * @Date: 2021-03-03 23:57:13
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-04 10:26:38
 * @FilePath: \JZoffer\JZ14-链表的倒数第k个结点.js
 * @Description: 
 * 题目描述:
 * 输入一个链表，输出该链表中倒数第k个结点。
 */

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */

/* *
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 * @param pHead ListNode类 
 * @param k int整型 
 * @return ListNode类
 */

// 基础解法：先计算节点数n，再取第n-k个节点
// 肯定是不够好的，要提高得用快慢指针。
function FindKthToTail(pHead, k) {
    // write code here
    let n = 0;
    let node = pHead;
    while (node) {
        node = node.next;
        n++;
    }
    node = pHead;
    if (n < k) return null;
    for (let i = 0; i < n - k; i++) {
        node = node.next;
    }
    return node;
}
module.exports = {
    FindKthToTail: FindKthToTail
};

// 快慢指针：
// 当我们用一个指针遍历链表不能解决问题的时候，可以尝试用两个指针来遍历链表。
// 可以让其中一个个指针遍历的速度快一些（比如一次在链表上走两步），或者让它现在链表上走若干步。