/*
 * @Author: Ran
 * @Date: 2021-03-27 14:33:07
 * @LastEditTime: 2021-03-28 10:34:19
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
    if (!head) return head;
    // 首先看看这个链表一共有几个节点  同时记住尾节点 tail
    let node = head;
    let tail = null;
    let count = 0;
    while (node) {
        count++;
        tail = node;
        node = node.next;
    }
    // 然后节点数跟 k 取余
    k = k % count;
    // 余数为 0 的话直接返回原来的链表即可
    if (k === 0) return head;
    // 头尾相连：
    tail.next = head;
    node = head;
    // 根据余数来截链表
    let cutNode = null;
    for (let i = 0; i < count - k; i++) {
        cutNode = node;
        node = node.next;
    }
    let newHead = cutNode.next;
    cutNode.next = null;
    return newHead;
};

var rotateRight = function(head, k) {
    if (!head) return head;
    // 首先看看这个链表一共有几个节点  同时记住尾节点 tail
    let node = head;
    let tail = null;
    let count = 0;
    while (node) {
        count++;
        tail = node;
        node = node.next;
    }
    // 然后节点数跟 k 取余
    k = k % count;
    // 余数为 0 的话直接返回原来的链表即可
    if (k === 0) return head;
    // 头尾相连：
    tail.next = head;
    node = head;
    // 根据余数来截链表
    for (let i = 1; i < count - k; i++) {
        node = node.next;
    }
    let newHead = node.next;
    node.next = null;
    return newHead;
};