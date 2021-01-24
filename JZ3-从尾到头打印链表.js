/*
 * @Author: Ran
 * @Date: 2021-01-24 20:44:22
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-24 22:43:45
 * @FilePath: \Noded:\FE_Learning\JZoffer\JZ3-从尾到头打印链表.js
 * @Description: 
 * 输入一个链表，按链表从尾到头的顺序返回一个ArrayList。
 * 示例：
 * 输入：{67,0,24,58}
 * 返回值：[58,24,0,67]
 */

//  解题思路：
//  遍历这个链表，因为要先进后出，所以考虑用栈的特性，后进先出

// 利用数组存起来，再用API进行翻转
function printListFromTailToHead(head) {
    // write code here
    let reverseArr = [];
    while (head) {
        reverseArr[reverseArr.length] = head.val;
        head = head.next;
    }
    return reverseArr.reverse();
}

/*function ListNode(x) {
    this.val = x;
    this.next = null;
}*/
function printListFromTailToHead(head) {
    // write code here
    var res = [],
        pNode = head;
    while (pNode != null) {
        res.unshift(pNode.val);
        // unshift() 方法将一个或多个元素添加到数组的开头，
        // 并返回该数组的新长度(该方法修改原有数组)。
        pNode = pNode.next;
    }
    return res;
}