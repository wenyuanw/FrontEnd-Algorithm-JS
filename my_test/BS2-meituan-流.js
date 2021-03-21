/*
 * @Author: Ran
 * @Date: 2021-03-20 17:17:26
 * @LastEditTime: 2021-03-21 13:57:41
 * @FilePath: \JZoffer\my_test\BS2-meituan-流.js
 * @Description: 美团笔试
 */
/* 流
小美最近在学习操作系统。

流是操作系统中一个重要的概念。 在 Linux 操作系统中， 
/ dev / random 和 / dev / urandom 是两个重要的设备，
它们可以提供永不为空的随机字节数据流。
小美自己也实现了一个类似于 / dev / random 的设备 / dev / crandom，
但是它只能提供预先设定好但循环不断的某个小写字母排列。 例如预先设定的字符串为 abcdefgh...xyz，
那么这个设备会提供永不为空的字符串流 abcdefgh...xyzabcdefg...xyzabc...。
小美想利用这个设备生成一段文字， 但她想知道恰好生成完这段文字时， 浪费了这个流的多少个字符。

样例说明
拿取生成流中字母的情况如下， 拿取的字母用下划线表示。
abcde...lmn...def...hij...stu..zab...mno...
在生成好最后一个 n 的时候， 浪费了没有标下划线的 59 个字符。

输入描述
第一行一个长为 26 的字符串 s， 表示预先设置在设备中的小写英文字母排列。
第二行一个长为 n 的字符串 a， 表示小美想要生成的字符串。
1≤ n≤ 105， 保证 s 一定是一个小写字母的排列， 且 a 中只包含小写英文字母。

输出描述
输出一行一个整数， 表示恰好生成完这个字符串时， 浪费了这个流的多少个字符。

样例输入
abcdefghijklmnopqrstuvwxyz
meituan

样例输出
59 */
// 64-6=59

// let flow = read_line();
// let input = read_line();
let flow = 'abcdefghijklmnopqrstuvwxyz';
let input = 'meituan';
let ans = 0;
let i = 0;
let pj = 0;

for (let i = 0; i < input.length; i++) {
    for (let j = pj; j < 26; j++) {
        ans++;
        if (flow[j] === input[i]) {
            ans--;
            pj = j + 1;
            break;
        }
        if (j == 25) j = -1;
    }
}

console.log(ans);