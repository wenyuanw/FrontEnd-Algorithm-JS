/*
 * @Author: Ran
 * @Date: 2021-07-16 23:18:39
 * @LastEditTime: 2021-07-20 00:17:44
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ56-删除链表中重复的结点.js
 * @Description: 
 * 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表1->2->3->3->4->4->5 处理后为 1->2->5
 * 输入：{1,2,3,3,4,4,5}
 * 返回值：{1,2,5}
 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
/* 非递归的代码：

1. 首先添加一个头节点，以方便碰到第一个，第二个节点就相同的情况

2.设置 pre ，last 指针， pre指针指向当前确定不重复的那个节点，而last指针相当于工作指针，一直往后面搜索。 */
/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (pHead === null || pHead.next === null) return pHead
    let Head = new ListNode(0)
    Head.next = pHead
    let pre = Head
    let last = Head.next

    while (last !== null) {
        if (last.next !== null && last.val === last.next.val) {
            // 找到最后的一个相同节点
            while (last.next !== null && last.val === last.next.val) {
                last = last.next
            }
            pre.next = last.next
            last = last.next
        } else {
            pre = pre.next
            last = last.next
        }
    }
    return Head.next
}

/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
function deleteDuplication(pHead) {
    if (pHead === null || pHead.next === null) return pHead
    let Head = new ListNode(0)
    Head.next = pHead
    let pre = Head
    let last = Head.next

    while (last !== null) {
        if (last.next !== null && last.val === last.next.val) {
            // 找到最后的一个相同节点
            while (last.next !== null && last.val === last.next.val) {
                last = last.next
            }
            pre.next = last.next
            last = last.next
        } else {
            pre = pre.next
            last = last.next
        }
    }
    return Head.next
}

function deleteDuplication(pHead) {
    if (pHead == null || pHead.next == null) return pHead;

    if (pHead.val == pHead.next.val) {
        pHead = pHead.next
        while (pHead.next && pHead.val == pHead.next.val) {
            pHead = pHead.next
        }
        return deleteDuplication(pHead.next);
    }
    pHead.next = deleteDuplication(pHead.next)
    return pHead;
}

function deleteDuplication(pHead) {

    if (!pHead.val || !pHead.next) return pHead
    let head = pHead
    let myMap = new Map()

    let pre = pHead
    let next = pHead.next

    myMap.set(pHead.val, 1)
    while (pHead.next !== null) {
        pHead = pHead.next
        if (myMap.has(pHead.val)) {
            myMap.set(pHead.val, myMap.get(pHead.val) + 1)
        } else {
            myMap.set(pHead.val, 1)
        }
    }

    let res = {
        val: -1,
        next: null
    }
    while (head !== null) {
        if (myMap.get(head.val) !== 1) {
            // repeated
            head = head.next
            return
        }
        res.next = head
    }
    return res.next
}

// 暴力
// 双指针
// 递归