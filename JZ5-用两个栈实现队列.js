/*
 * @Author: Ran
 * @Date: 2021-01-24 23:02:55
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-24 23:34:07
 * @FilePath: \Noded:\FE_Learning\JZoffer\JZ5-用两个栈实现队列.js
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