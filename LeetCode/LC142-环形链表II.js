/*
 * @Author: Ran
 * @Date: 2021-03-29 23:41:51
 * @LastEditTime: 2021-03-30 08:55:34
 * @FilePath: \JZoffer\LeetCode\LC142-环形链表II.js
 * @Description: 
 * 需要返回链表开始入环的第一个节点。 如果链表无环，则返回 null。
 * https://leetcode-cn.com/problems/linked-list-cycle-ii/
 */

// 使用 map 存储访问过的结点
var detectCycle = function(head) {
    let memo = new Map();
    while (head) {
        if (memo.has(head)) return head;
        memo.set(head, true);
        head = head.next;
    }
    return null;
};

// 还是得用双指针比较快