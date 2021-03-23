/*
 * @Author: Ran
 * @Date: 2021-03-23 14:50:06
 * @LastEditTime: 2021-03-23 16:43:46
 * @FilePath: \JZoffer\LeetCode\LC1652.拆炸弹.js
 * @Description: 
 * 你有一个炸弹需要拆除，时间紧迫！
 * 你的情报员会给你一个长度为 n 的 循环 数组 code 以及一个密钥 k 。
 * 为了获得正确的密码，你需要替换掉每一个数字。所有数字会 同时 被替换。
 * 如果 k > 0 ，将第 i 个数字用 接下来 k 个数字之和替换。
 * 如果 k < 0 ，将第 i 个数字用 之前 k 个数字之和替换。
 * 如果 k == 0 ，将第 i 个数字用 0 替换。
 * 由于 code 是循环的， code[n-1] 下一个元素是 code[0] ，且 code[0] 前一个元素是 code[n-1] 。
 * 给你 循环 数组 code 和整数密钥 k ，请你返回解密后的结果来拆除炸弹！
 * 
 * 示例 1：
 * 输入：code = [5,7,1,4], k = 3
 * 输出：[12,10,16,13]
 * 解释：每个数字都被接下来 3 个数字之和替换。解密后的密码为 [7+1+4, 1+4+5, 4+5+7, 5+7+1]。注意到数组是循环连接的。
 * 
 * 示例 2：
 * 输入：code = [1,2,3,4], k = 0
 * 输出：[0,0,0,0]
 * 解释：当 k 为 0 时，所有数字都被 0 替换。
 * 
 * 示例 3：
 * 输入：code = [2,4,9,3], k = -2
 * 输出：[12,5,6,13]
 * 解释：解密后的密码为 [3+9, 2+3, 4+2, 9+4] 。注意到数组是循环连接的。如果 k 是负数，那么和为 之前 的数字。
 */

/**
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */

// 自己写的最简单暴力的方法：
let code = [1, 2, 3, 4];
let k = -2;

var decrypt = function(code, k) {
    let length = code.length;
    let resArr = [];
    // 1.最简单的情况，当 k = 0 的时候
    if (k === 0) {
        resArr = code.map(val => val = 0);
    }

    // 2. 当 k > 0 的时候
    if (k > 0) {
        for (let i = 0; i < length; i++) {
            let sum = 0;
            for (let j = 1; j <= k; j++) {
                sum += code[(i + j) % length];
            }
            resArr.push(sum);
        }
    }

    // 3. 当 k < 0 的时候
    if (k < 0) {
        for (let i = 0; i < length; i++) {
            let sum = 0;
            for (let j = 1; j <= -k; j++) {
                let index = 0;
                if (i - j < 0) {
                    if (Math.abs(i - j) % length === 0) {
                        index = 0;
                    } else {
                        index = length - Math.abs(i - j) % length;
                    }
                } else {
                    index = i - j;
                }
                console.log(index);
                sum += code[index];
            }
            resArr.push(sum);
        }
    }
    return resArr;
};

code = decrypt(code, k);
console.log(code);