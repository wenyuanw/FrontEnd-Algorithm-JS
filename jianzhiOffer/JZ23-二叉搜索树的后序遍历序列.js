/*
 * @Author: Ran
 * @Date: 2021-07-06 23:13:12
 * @LastEditTime: 2021-07-07 00:04:10
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ23-二叉搜索树的后序遍历序列.js
 * @Description: 
 * 输入一个整数数组，判断该数组是不是某二叉搜索树的后序遍历的结果。
 * 如果是则返回true,否则返回false。假设输入的数组的任意两个数字都互不相同。
 * （ps：我们约定空树不是二叉搜索树）
 */
function VerifySquenceOfBST(sequence) {
    //充分利用二叉排序树特性，根节点左边小于根节点，右边大于根节点，假如出现例外则就不对了
    var size = sequence.length;
    if (0 == size) return false;
    var i = 0;
    while (--size) {
        while (sequence[i] < sequence[size]) i++
            while (sequence[i] > sequence[size]) i++
                if (i < size) return false
        i = 0
    }
    return true
}
module.exports = {
    VerifySquenceOfBST: VerifySquenceOfBST
};

// 方法一：递归
function test(sequence, start, end) {
    if (start >= end) return true;
    // 先查看右子树中是否有小于根结点的数，有则跳出for循环
    for (var i = end - 1; i >= start; i--) {
        if (sequence[i] < sequence[end]) break;
    }
    // 查看左子树中是否有大于根结点的数
    for (var j = i; j >= start; j--) {
        if (sequence[j] > sequence[end]) return false;
    }
    // 再分别递归遍历左子树和右子树中顺序是否合法
    return test(sequence, start, i) && test(sequence, i + 1, end - 1);
}

function VerifySquenceOfBST(sequence) {
    // write code here
    if (sequence.length <= 0) return false;
    return test(sequence, 0, sequence.length - 1);
}

// 方法二：非递归
function VerifySquenceOfBST(sequence) {
    // write code here
    var n = sequence.length;
    var i = 0;
    if (n <= 0) return false;
    while (n--) {
        while (sequence[i] < sequence[n]) i++;
        while (sequence[i] > sequence[n]) i++;
        if (i < n) return false;
        i = 0;
    }
    return true;
}