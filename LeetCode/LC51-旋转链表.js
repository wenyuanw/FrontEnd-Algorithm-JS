/*
 * @Author: Ran
 * @Date: 2021-03-27 14:33:07
 * @LastEditTime: 2021-03-27 15:00:11
 * @FilePath: \JZoffer\LeetCode\LC51-旋转链表.js
 * @Description: 
 * 给你一个链表的头节点 head ，旋转链表，将链表每个节点向右移动 k 个位置。
 * 
 * 输入：head = [1,2,3,4,5], k = 2
 * 输出：[4,5,1,2,3]
 * 
 * 输入：head = [0,1,2], k = 4
 * 输出：[2,0,1]
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    // 首先看看这个链表一共有几个节点  同时记住尾节点 tail

    // 然后节点数跟 k 取余

    // 根据余数再来截链表，截成两段

    // 后面那段的尾（即为 tail ，接上前面那段的头 head 即可

};