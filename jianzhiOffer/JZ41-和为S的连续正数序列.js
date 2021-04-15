/*
 * @Author: Ran
 * @Date: 2021-04-15 09:32:31
 * @LastEditTime: 2021-04-15 10:34:42
 * @FilePath: \JZoffer\jianzhiOffer\JZ41-和为S的连续正数序列.js
 * @Description: 
 * 小明很喜欢数学,有一天他在做数学作业时,要求计算出9~16的和,他马上就写出了正确答案是100。
 * 但是他并不满足于此,他在想究竟有多少种连续的正数序列的和为100( 至少包括两个数 )。
 * 没多久,他就得到另一组连续正数和为100的序列:18,19,20,21,22。
 * 现在把问题交给你,你能不能也很快的找出所有和为S的连续正数序列? Good Luck!
 */


function FindContinuousSequence(sum) {
    if (sum < 3) return []; // 至少包括两个数
    let res = [];
    let left = 1;
    let right = 2;
    let mid = Math.ceil(sum / 2);
    let curSum = left + right;

    while (left < mid) {
        if (curSum === sum) {
            help(left, right, res);
        }

        while (curSum > sum && left < mid) {
            curSum -= left;
            left++;
            if (curSum === sum) {
                help(left, right, res);
            }
        }

        right++;
        curSum += right;
    }
    return res;
}

function help(left, right, arr) {
    let temp = [];
    let i = 0;
    let dif = right - left;
    while (i <= dif) {
        temp[i] = left;
        i++;
        left++;
    }
    arr.push(temp);
}

console.log(FindContinuousSequence(9));



var findContinuousSequence = function(target) {
    let l = 1 //left edge of sliding window
    let r = 1 //right edge of sliding window
    let sum = 0 //store the sum of window
    let res = []
    while (l <= Math.round(target / 2)) {
        if (sum === target) {
            let temp = [] //temp arr to store
            for (let i = l; i < r; i++) {
                temp.push(i)
            }
            res.push(temp)
            sum -= l
            l++ //l slide to right
        } else if (sum > target) { //l slide to right
            sum -= l
            l++
        } else if (sum < target) { // r slide to right
            sum += r
            r++
        }
    }
    return res
}

// 作者：ofeii
// 链接：https://leetcode-cn.com/problems/he-wei-sde-lian-xu-zheng-shu-xu-lie-lcof/solution/mei-ri-yi-ti-ep06-continuous-sequencehe-sde-lian-x/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/* 滑动窗口框架

let left = 0, right = 0;

while (right < s.size()) {
    // 增大窗口
    window.add(s[right]);
    right++;

    while (window needs shrink) {
        // 缩小窗口
        window.remove(s[left]);
        left++;
    }
}

 */