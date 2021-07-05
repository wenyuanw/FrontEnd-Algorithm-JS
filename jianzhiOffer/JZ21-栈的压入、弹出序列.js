/*
 * @Author: Ran
 * @Date: 2021-07-05 23:27:56
 * @LastEditTime: 2021-07-06 00:21:03
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ21-栈的压入、弹出序列.js
 * @Description: 
 * 输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 假设压入栈的所有数字均不相等。例如序列1,2,3,4,5是某栈的压入顺序，
 * 序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 * （注意：这两个序列的长度是相等的）
 */

function IsPopOrder(pushV, popV) {
    // 新建一个栈，进行入栈出栈操作，如果到最后这个栈为空，则为 true
    /* 如果pushV[i] != popV[j]， 那么应该将pushV[i]放入栈中， ++i
    否则，pushV[i]==popV[j], 说明这个元素是放入栈中立马弹出，所以，++i, ++j，然后应该检查popV[j]
    与栈顶元素是否相等，如果相等，++j, 并且弹出栈顶元素 */
    let stackArr = []
    let i = 0
    let j = 0
    while (i < pushV.length) {
        if (pushV[i] !== popV[j]) {
            stackArr.push(pushV[i])
            i++
        } else if (pushV[i] === popV[j]) {
            i++
            j++
        }
        while (stackArr.length && popV[j] === stackArr[stackArr.length - 1]) {
            stackArr.pop()
            j++
        }
    }
    return stackArr.length === 0
}
module.exports = {
    IsPopOrder: IsPopOrder
};