/*
 * @Author: Ran
 * @Date: 2021-01-24 23:02:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-03-23 11:31:30
 * @FilePath: \JZoffer\jianzhiOffer\JZ5-用两个栈实现队列.js
 * @Description: 
 * 
 */
// 队是先进先出，栈是先进后出
/* 
入队过程： 将元素放入 inStack 中。
出队过程：
outStack 不为空： 弹出元素
outStack 为空： 将 inStack 元素依次弹出， 放入到 outStack 中
（ 在数据转移过程中， 顺序已经从后入先出变成了先入先出）
时间复杂度是 O(N)， 空间复杂度是 O(N)。 
*/
const inStack = [];
const outStack = [];

function push(node) {
    // 实现入队
    inStack.push(node);
}

function pop() {
    // 实现出队
    if (outStack.length) {
        return outStack.pop()
    } else {
        while (inStack.length) {
            outStack.push(inStack.pop());
        }
        return outStack.pop();
    }
}

// LeetCode上面的，略有不同，使用 ES6 语法：
/* 
用两个栈实现一个队列。队列的声明如下，
请实现它的两个函数 appendTail 和 deleteHead ，
分别完成在队列尾部插入整数和在队列头部删除整数的功能。
(若队列中没有元素，deleteHead 操作返回 -1 )

输入：
["CQueue","appendTail","deleteHead","deleteHead"]
[[],[3],[],[]]
输出：[null,null,3,-1]

输入：
["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
[[],[],[5],[2],[],[]]

输出：[null,-1,null,null,5,2] 

提示：

-- 1 <= values <= 10000
-- 最多会对 appendTail、deleteHead 进行 10000 次调用
*/


var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // 实现入队
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 实现出队
    // 若队列中没有元素，deleteHead 操作返回 -1 
    if (this.outStack.length) {
        return this.outStack.pop()
    } else {
        while (this.inStack.length) {
            this.outStack.push(this.inStack.pop());
        }
        if (this.outStack.length) return this.outStack.pop();
        return -1;
    }
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */