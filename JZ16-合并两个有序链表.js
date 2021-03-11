/*
 * @Author: Ran
 * @Date: 2021-03-03 00:01:55
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-03 23:38:56
 * @FilePath: \JZoffer\JZ16-合并两个有序链表.js
 * @Description: 
 * 题目描述：
 * 输入两个单调递增的链表，输出两个链表合成后的链表，
 * 当然我们需要合成后的链表满足单调不减规则。
 */

// 解法一：递归的做法：
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    // write code here
    if (pHead1 == null)
        return pHead2;
    if (pHead2 == null)
        return pHead1;
    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1;
    } else {
        pHead2.next = Merge(pHead1, pHead2.next);
        return pHead2;
    }
}

// 解法二：迭代的方式，比较好理解
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function Merge(pHead1, pHead2) {
    let pHead3 = new ListNode(-1);
    let temp = pHead3;
    while (pHead1 && pHead2) {
        if (pHead1.val <= pHead2.val) {
            temp.next = pHead1;
            pHead1 = pHead1.next;
        } else {
            temp.next = pHead2;
            pHead2 = pHead2.next;
        }
        temp = temp.next;
    }
    if (pHead1) {
        temp.next = pHead1;
    }
    if (pHead2) {
        temp.next = pHead2;
    }
    return pHead3.next;
    // 因为pHead3.val 是 -1 那个结点，所以输出的是 pHead3.next
}



// 拙见：
// 我觉得可以把这两个输入的链表的值都放进一个数组，我用的JS里面直接调个sort函数，再把这数组转成链表输出就好了

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 有点写不下去了
/* function Merge(pHead1, pHead2) {
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
} */