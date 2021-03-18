/*
 * @Author: Ran
 * @Date: 2021-03-12 23:31:48
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-13 00:12:50
 * @FilePath: \JZoffer\LC394-字符串解码.js
 * @Description: 
 * 题目描述：
 * 给定一个经过编码的字符串，返回它解码后的字符串。
 * 编码规则为: k[encoded_string]，表示其中方括号内部的 encoded_string 正好重复 k 次。注意 k 保证为正整数。
 * 你可以认为输入字符串总是有效的；输入字符串中没有额外的空格，且输入的方括号总是符合格式要求的。
 * 此外，你可以认为原始数据不包含数字，所有的数字只表示重复的次数 k ，例如不会出现像 3a 或 2[4] 的输入
 * 
 * 输入：s = "3[a]2[bc]"
 * 输出："aaabcbc"
 * 
 * 输入：s = "3[a2[c]]
 * 输出："accaccacc"
 * 
 * 输入：s = "abc3[cd]xyz"
 * 输出："abccdcdcdxyz"
 */

/**
 * @param {string} s
 * @return {string}
 */


// 自己的想的解法
 let s = "10[a]2[bc]";
 var decodeString = function(s) {
     let left = 0; // 统计左括号数量
     let right = 0; // 统计右括号数量
     let k = 0; // 重复次数
     let start = 0; // [ 的位置
     let end = 0; // ] 的位置
     let count_k = 0; // 数字 k 的位数
     if (!s) return null;
     // 可以考虑用递归
     // console.log('递归要结束了');
     if (s.indexOf('[') === -1) {
         // console.log('确实没有[]了');
         // console.log(s);
         return s;
     }
     // console.log(s);
     // 从最外层的[ ]开始处理
     // 统计 '[' ']' 的出现次数分别为 i j,当 i === j的时候停止循环
     for (let i = 0; i < s.length; i++) {
         if (s[i] === '[') {
             left++;
             if (left === 1) {
                 // 数组存重复次数 k 值，还要注意 k 可能是大于等于 10 的数 ，不一定是只有 1 位！
                 // 直接parseInt可以取出整数？
                 // k = parseInt(s[i - 1]);
                 // console.log('k:' + k);
                 // 记录开始 [ 的位置
                 start = i;
                 // console.log('start:' + start);
             }
         }
         if (s[i] === ']') {
             right++;
         }
         if (left !== 0 && left === right) {
             // 记录结束 ] 的位置
             end = i;
             // console.log('end:' + end);
             break;
         }
     }
     // 当 k 位于第一位，且只有一位数的时候，eg: 3[ab]
     if(start === 1) {
         k = parseInt(s[0]);
     } else {
         let str_K = s.slice(0, start);

         // console.log(str_K);
         // 计算 k 的位数，从后往前判断是否是数字
         for (let i = start - 1; i >= 0; i-- ) {
             if(0 <= str_K[i] && str_K[i] <= 9){
                 count_k++;
             }else {
                 i = -1; // 终止循环
             }
         }
         // console.log('位数 '+count_k);
         str_K = str_K.slice(start - count_k);
         // console.log('str_K'+ str_K);
         // parseInt 无法返回字符串中间的数字，如 parseInt('ab123ab') 返回的是NaN
         k = parseInt(str_K);
         // console.log('k:'+ k);
     }

     // 取出 [ ] 中的字符串，重复 k 次
     let encoded_string = s.slice(start + 1, end);
     // console.log(encoded_string);
     let decodeed_string = encoded_string.repeat(k); // 重复 k 次之后的结果
     // console.log(decodeed_string);
     // 只需要将解码后的 decodeed_stringc 替换原来未解码的即可
     decodeed_string = s.replace(k + '[' + encoded_string + ']', decodeed_string)
     // console.log(decodeed_string);
     return decodeString(decodeed_string);
 }
 console.log(decodeString(s));

//  大佬的解法，思路非常清晰
 const decodeString = (s) => {
    let numStack = [];        // 存倍数的栈
    let strStack = [];        // 存 待拼接的str 的栈
    let num = 0;              // 倍数的“搬运工”
    let result = '';          // 字符串的“搬运工”
    for (const char of s) {   // 逐字符扫描
        if (!isNaN(char)) {   // 遇到数字
            num = num * 10 + Number(char); // 算出倍数
        } else if (char == '[') {  // 遇到 [
            strStack.push(result); // result串入栈
            result = '';           // 入栈后清零
            numStack.push(num);    // 倍数num进入栈等待
            num = 0;               // 入栈后清零
        } else if (char == ']') {  // 遇到 ]，两个栈的栈顶出栈
            let repeatTimes = numStack.pop(); // 获取拷贝次数
            result = strStack.pop() + result.repeat(repeatTimes); // 构建子串
        } else {                   
            result += char;        // 遇到字母，追加给result串
        }
    }
    return result;
};

// 作者：xiao_ben_zhu
// 链接：https://leetcode-cn.com/problems/decode-string/solution/zhan-de-ji-yi-nei-ceng-de-jie-ma-liao-bie-wang-lia/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 再学习一下正则的解法
/**
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let reg = /(\d+)\[([a-zA-Z]+)\]/g;
    while(s.indexOf('[')>0){
        s = s.replace(reg,(_,...[num,str])=>{
            let result = "";
            for(let i=0;i<num-0;i++){
                result += str;
            }
            return result;
        });
    }
    return s;
};

// 作者：66ge-cheng-zi
// 链接：https://leetcode-cn.com/problems/decode-string/solution/javascriptzheng-ze-ti-jie-by-66ge-cheng-zi/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。