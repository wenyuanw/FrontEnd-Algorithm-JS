/*
 * @Author: Ran
 * @Date: 2021-02-26 23:17:17
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-27 14:14:21
 * @FilePath: \JZoffer\jianzhiOffer\JZ15-反转链表.js
 * @Description: 
 * 题目描述：
 * 输入一个链表，反转链表后，输出新链表的表头。
 */

// 感觉跟从尾到头打印链表没啥区别？
// 然而并不是这么简单

// ！！！！！！！！！！看题解的方法还不是很明白！

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function ReverseList(pHead) {
    // write code here
    let pre = null;
    let next = null;
    while (pHead != null) {
        next = pHead.next;
        pHead.next = pre;
        pre = pHead;
        pHead = next;
    }
    return pre;
}

// LeetCode 206 反转链表
// 一、迭代的解法
var reverseList = function(head) {
    if (!head) return null;
    let pre = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = pre;
        pre = curr;
        curr = next;
    }
    return pre;
};

// 二、递归的解法
var reverseList = function(head) {
    if (head === null || head.next === null) {
        return head;
    }
    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

/* 
不妨假设链表为1，2，3，4，5。
按照递归，当执行reverseList（5）的时候返回了5这个节点，
reverseList(4)中的p就是5这个节点，
我们看看reverseList（4）接下来执行完之后，
5->next = 4, 4->next = null。这时候返回了p这个节点，
也就是链表5->4->null，接下来执行reverseList（3），
代码解析为4->next = 3,3->next = null，这个时候p就变成了，
5->4->3->null, reverseList(2), reverseList(1)依次类推，
p就是:5->4->3->2->1->null 
*/