/* 
20210310
题目描述：
给你两个非空的链表，表示两个非负的整数。
它们每位数字都是按照逆序的方式存储的，并且每个节点只能存储一位数字。
请你将两个数相加，并以相同形式返回一个表示和的链表。
你可以假设除了数字 0 之外，这两个数都不会以 0 开头。
示例：
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.

输入：l1 = [0], l2 = [0]
输出：[0]

输入：l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
输出：[8,9,9,9,0,0,0,1]
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 一、自己写的解法，实在不够简洁
 var addTwoNumbers = function(l1, l2) {
    let addBit = 0; // 有无进位，若是有进位则必定是 1
    let head = null , tail = null;
    while(l1 && l2) {
        let sum = l1.val + l2.val + addBit;
        if(sum > 9) {
            // 有进位的情况
            addBit = 1;
        } else {
            // 没进位的情况,直接相加即可
            addBit = 0;
            // 小于 10 的数取余也就是这个数本身
        }
            if(!head) {
                // 初始化链表，记录头链表
                head = tail = new ListNode(sum % 10);
            } else {
                tail.next = new ListNode(sum % 10);
                tail = tail.next;
            }
            l1 = l1.next;
            l2 = l2.next;
    }

// 当链表 l1 跟 l2 还没有完全遍历完的时候则继续循环
    let l = l1 ? l1 : l2;
    while (l) {
        if (addBit === 1) {
            let sum = l.val + addBit;
            if (sum > 9) {
                tail.next = new ListNode(0);
                addBit = 1;
            } else {
                tail.next = new ListNode(sum);
                addBit = 0;
            }
        } else {
            tail.next = new ListNode(l.val);
        }
        tail = tail.next;
        l = l.next;
    }
    // 若是 l1 l2 都一样长，判断是否进位即可
    if (addBit === 1) {
        // 有进位则需要增加一个节点
        tail.next = new ListNode(1);
        tail = tail.next;
    }
    return head;
};

// 二、较简洁且容易理解的解法
// from :https://leetcode-cn.com/problems/add-two-numbers/solution/liang-ge-shu-xiang-jia-zui-rong-yi-li-jie-de-jie-f/

 var addTwoNumbers = function(l1, l2) {
    let addOne = 0
    let sum = new ListNode('0')
    let head = sum
    while (addOne || l1 || l2) {
        let val1 = l1 !== null ? l1.val : 0
        let val2 = l2 !== null ? l2.val : 0
        let r1 = val1 + val2 + addOne
        addOne = r1 >= 10 ? 1 : 0
        sum.next = new ListNode(r1 % 10)
        sum = sum.next 
        if (l1) l1 = l1.next 
        if (l2) l2 = l2.next 
    }
    return head.next
};
