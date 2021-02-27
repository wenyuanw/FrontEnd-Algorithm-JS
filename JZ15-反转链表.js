/*
 * @Author: Ran
 * @Date: 2021-02-26 23:17:17
 * @LastEditors: Ran
 * @LastEditTime: 2021-02-26 23:57:13
 * @FilePath: \JZoffer\JZ15-反转链表.js
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