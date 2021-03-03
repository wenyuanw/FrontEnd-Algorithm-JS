/*
 * @Author: Ran
 * @Date: 2021-03-03 00:01:55
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-03 00:20:29
 * @FilePath: \JZoffer\JZ16-合并两个有序链表.js
 * @Description: 
 * 题目描述：
 * 输入两个单调递增的链表，输出两个链表合成后的链表，当然我们需要合成后的链表满足单调不减规则。
 */

// 拙见：
// 我觉得可以把这两个输入的链表的值都放进一个数组，我用的JS里面直接调个sort函数，再把这数组转成链表输出就好了

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    let arr = [];
    while (pHead1.val) {
        arr.push(pHead1.val);
        pHead1 = pHead1.next;
    }
    while (pHead2.val) {
        arr.push(pHead2.val);
        pHead2 = pHead2.next;
    }
    arr.sort(function(a, b) { return a - b });
    return '{' + arr.toString + '}';
    // pHead.val = arr[0];
    // pHead
}