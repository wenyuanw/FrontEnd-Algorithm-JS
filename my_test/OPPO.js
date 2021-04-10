/*
 * @Author: Ran
 * @Date: 2021-04-09 16:02:44
 * @LastEditTime: 2021-04-09 16:05:32
 * @FilePath: \my_test\OPPO.js
 * @Description: 
 */

function reverse(pHead) {
    if (pHead === null) return pHead;
    let pre = null;
    let cur = pHead;
    while (cur) {
        let temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }
    return pre;
}