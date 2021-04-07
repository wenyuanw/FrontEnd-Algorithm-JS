/*
 * @Author: Ran
 * @Date: 2021-04-07 10:21:48
 * @LastEditTime: 2021-04-07 11:31:20
 * @FilePath: \JZoffer\jianzhiOffer\JZ36-两个链表的第一个公共结点.js
 * @Description: 
 * 输入两个链表，找出它们的第一个公共结点。
 * （注意因为传入数据是链表，所以错误测试数据的提示是用其他方式显示的，保证传入数据是正确的）
 */
/* 解析：
这两个链表是单向链表，所以第一个公共节点之后不可能出现分叉。
也就是说，从第一个公共节点开始，之后它们所有的节点都是重合的。
其拓扑形状看起来像一个 ‘ Y ’
*/

/* 首先遍历两个链表得到它们的长度，就能知道哪个链表比较长，
以及长的链表比短的链表多几个节点。
在第二次遍历的时候，在较长的链表上先走若干步，
接着同时在两个链表上遍历，找到第一个相同的节点就是它们的第一个公共节点。 */

function FindFirstCommonNode(pHead1, pHead2) {
    const len1 = getLen(pHead1);
    const len2 = getLen(pHead2);
    const lenDif = Math.abs(len1 - len2);
    let longList = pHead1;
    let shortList = pHead2;

    if (len2 > len1) {
        longList = pHead2;
        shortList = pHead1;
    }
    for (let i = 0; i < lenDif; i++) {
        longList = longList.next;
    }
    while (longList && longList !== shortList) {
        // 注意不是比较 .val 而是指针。可能值相等的时候并不是交点
        longList = longList.next;
        shortList = shortList.next;
    }
    return longList;

    function getLen(pHead) {
        let len = 0;
        while (pHead) {
            len++;
            pHead = pHead.next;
        }
        return len;
    }
}

// LeetCode：
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const len1 = getLen(headA);
    const len2 = getLen(headB);
    const lenDif = Math.abs(len1 - len2);
    let longList = headA;
    let shortList = headB;

    if (len2 > len1) {
        longList = headB;
        shortList = headA;
    }
    for (let i = 0; i < lenDif; i++) {
        longList = longList.next;
    }
    while (longList && longList !== shortList) {
        longList = longList.next;
        shortList = shortList.next;
    }
    return longList;

    function getLen(pHead) {
        let len = 0;
        while (pHead) {
            len++;
            pHead = pHead.next;
        }
        return len;
    }
};


// 双指针的解法：
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null;

    let pA = headA,
        pB = headB;
    while (pA !== pB) {
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
};

// 作者：suukii
// 链接：https://leetcode-cn.com/problems/intersection-of-two-linked-lists/solution/160xiang-jiao-lian-biao-shuang-zhi-zhen-ha-xi-biao/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。