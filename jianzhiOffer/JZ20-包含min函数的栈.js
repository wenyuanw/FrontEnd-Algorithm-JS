/*
 * @Author: Ran
 * @Date: 2021-07-04 13:20:07
 * @LastEditTime: 2021-07-04 13:40:10
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ20-包含min函数的栈.js
 * @Description: 
 * 定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数，
 * 并且调用 min函数、push函数 及 pop函数 的时间复杂度都是 O(1)
 */
// API 选手一波带走
var stackArr = []

function push(node) {
    return stackArr.push(node)
}

function pop() {
    return stackArr.pop()
}

function top() {
    return stackArr[stackArr.length - 1]
}

function min() {
    return Math.min(...stackArr)
}
module.exports = {
    push: push,
    pop: pop,
    top: top,
    min: min
};