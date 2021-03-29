/*
 * @Author: Ran
 * @Date: 2021-03-29 17:41:17
 * @LastEditTime: 2021-03-29 21:35:56
 * @FilePath: \JZoffer\LeetCode\LC141-环形链表.js
 * @Description: 
 * 给定一个链表，判断链表中是否有环。
 * 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环。
 *  为了表示给定链表中的环，我们使用整数 pos 来表示链表尾连接到链表中的位置（索引从 0 开始）。
 *  如果 pos 是 -1，则在该链表中没有环。注意：pos 不作为参数进行传递，仅仅是为了标识链表的实际情况。
 * 
 *  如果链表中存在环，则返回 true 。 否则，返回 false 。
 * 进阶：
 * 你能用 O(1)（即，常量）内存解决此问题吗？
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


//  思路及算法
//  本方法需要读者对「Floyd 判圈算法」（又称龟兔赛跑算法）有所了解。
//  假想「乌龟」和「兔子」在链表上移动，「兔子」跑得快，「乌龟」跑得慢。
//  当「乌龟」和「兔子」从链表上的同一个节点开始移动时，如果该链表中没有环，
//  那么「兔子」将一直处于「乌龟」的前方；
//  如果该链表中有环，那么「兔子」会先于「乌龟」进入环，并且一直在环内移动。
//  等到「乌龟」进入环时，由于「兔子」的速度快，它一定会在某个时刻与乌龟相遇，
//  即套了「乌龟」若干圈。
//  我们可以根据上述思路来解决本题。
//  具体地，我们定义两个指针，一快一满。慢指针每次只移动一步，而快指针每次移动两步。
//  初始时，慢指针在位置 head，而快指针在位置 head.next。
//  这样一来，如果在移动的过程中，快指针反过来追上慢指针，就说明该链表为环形链表。
//  否则快指针将到达链表尾部，该链表不为环形链表。

var hasCycle = function(head) {
    // 两个指针，一快一慢，若是有环的话则能够相遇的。
    if (!head || !head.next) return false;

    let low = head,
        high = head.next;
    while (high && high.next && high.next.next) {
        low = low.next;
        high = high.next.next
        if (low === high) return true;
    }
    return false;
};

// 哈希表存遍历过的节点，每遍历一个节点，都查看哈希表是否存在当前节点，
// 如果存在，则说明链表有环
// 如果不存在，则存入哈希表，继续遍历
// 时间复杂度为 O(n)，空间复杂度为 O(n)
var hasCycle = function(head) {
    let memo = new Map();
    while (head) {
        if (memo.has(head)) return true;
        memo.set(head, true);
        head = head.next;
    }
    return false;
};


// 有点意思的解法：

const hasCycle = (head) => {
    // 1. 如果有链表
    while (head) {
        // 2. 每经过一个节点，将它渲染成 jsliang
        if (head.val === 'jsliang') {
            // 3. 如果下次找到了自己，证明有环
            return true;
        } else {
            head.val = 'jsliang';
        }
        // 4. 一直往链表尾部走
        head = head.next;
    }

    // 5. 如果没有重复，那么返回 false
    return false;
};