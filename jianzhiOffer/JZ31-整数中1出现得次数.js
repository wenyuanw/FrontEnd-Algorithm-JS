/*
 * @Author: Ran
 * @Date: 2021-04-02 15:04:51
 * @LastEditTime: 2021-04-02 16:25:05
 * @FilePath: \JZoffer\jianzhiOffer\JZ31-整数中1出现得次数.js
 * @Description: 
 * 求出1~13的整数中1出现的次数,并算出100~1300的整数中1出现的次数？
 * 为此他特别数了一下1~13中包含1的数字有1、10、11、12、13因此共出现6次,
 * 但是对于后面问题他就没辙了。ACMer希望你们帮帮他,并把问题更加普遍化,
 * 可以很快的求出任意非负整数区间中1出现的次数（从1 到 n 中1出现的次数）。
 */

// 自己不知道怎么总结这个规律，直接暴力解法
// 牛客可以过，LeetCode超时！
function NumberOf1Between1AndN_Solution(n) {
    let count = 0;
    while (n >= 1) {
        for (let i = 0; i < n.toString().length; i++) {
            if (n.toString()[i] === '1') {
                count++;
            }
        }
        n--;
    }
    return count;
}
module.exports = {
    NumberOf1Between1AndN_Solution: NumberOf1Between1AndN_Solution
};

// 优化解法：
/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    // 这种题就要找规律，与之前做的那道找某个位置是什么数字的类似
    // 现在有一个函数f(n)，代表n位上有多少个1
    //         f(0) = 0
    //  0~9    f(1) = 1
    //  0~99   f(2) = 10 + 10*f(1) = 20  (10+为  10~19中十位有10个1)
    //  0~999  f(3) = 100 + 10*f(2) = 300  (100+为  100~199中百位有100个1)
    //  10~9999 f(4) = 1000 + 10*f(3) = 4000 (...)
    // ...
    // 如 5467 中有多少个1
    // 1. 0~5000中有 5 * f(3) + 1000 = 2500个
    // 2. 0~400中有 4 * f(2) + 100 = 180个
    // 3. 0~60中有 6 * f(1) + 10 = 16个
    // 4. 0~7中有 7 * f(0) + 1 = 1个
    // 所以5467中有2697个1

    let f = [0, 1, 20, 300, 4000, 50000, 600000, 7000000, 80000000, 900000000, 10000000000];
    let res = 0;
    let str = n + '';
    const len = str.length;
    let m = Math.pow(10, len - 1);
    let p = len - 1; //解析中的n
    for (let i = 0; i < len; i++) {
        res += str[i] * f[p];
        if (str[i] === '1' && i !== len - 1) {
            //中间为1时后面的每一个数都要加一个1，再加上第一个1，比如12中10，11,12三个数的十位有3个1，需要加上，也就是2+1个1要加上
            res += Number(str.slice(i + 1)) + 1;
        } else if (str[i] === '1' && i === len - 1) { //解决末尾为1但未加上的bug
            res += 1;
        }
        if (str[i] > 1) res += m;
        m /= 10, p -= 1;
    }
    return res;
};

// 作者：tang_chao_li_zi
// 链接：https://leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/jin-hu-shuang-bai-javascriptai-hao-zhe-by-tang_cha/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

/* 解题思路
l为整数位数，用l+1长的动态规划表，dp[i]表示第i位往后数的解，
比如对于2134，dp[0]就是2134的解，dp[1]就是134的解等等。dp[4]为初值0，实际计算从dp[3]往前算到dp[0]。

在计算dp[i]时，如果首位(s[i])是1，比如算dp[1]对应134的解，拆成0-99，100-134两部分计算。
0-99是两位以内1的个数。（n位数以内1的个数，公式为n*10^(n-1)推导过程略）。
100-134又拆成两部分，01-34内的1个数（即dp[2]）和百位1的个数，而百位1的个数可通过n%100取余+1即34+1=35个。
若首位(s[i])不为1，比如计算dp[0]对应2134时，拆成(s[i])个0-999中的1（这里为2个0-999）；
第二部分为1000个千位1，注意：若首位为0则没有这一项，所以代码中用了首位数和1比大小 min(int(s[i])-'0',1)；第三部分0-134中的1（即dp[1]）。
主要难点就是分清各部分加的内容。 */
// C++ 代码：
class Solution {
    public:
        int countDigitOne(int n) {
            if (n <= 0) return 0;
            string s = to_string(n);
            int l = s.length();
            vector < int > dp(l + 1, 0);
            for (int i = l - 1; i >= 0; i--) {
                if (s[i] == '1') dp[i] = (l - i - 1) * pow(10, l - i - 2) + dp[i + 1] + n % int(pow(10, l - i - 1)) + 1; //pow返回double型所以强制转换成int才能取余。
                else dp[i] = (int(s[i]) - '0') * (l - i - 1) * pow(10, l - i - 2) + min(int(s[i]) - '0', 1) * pow(10, l - i - 1) + dp[i + 1];
            } //l-i-1为s[i]后的数字位数
            return dp[0];
        }
};

// 作者：njyang-yang-yang
// 链接：https://leetcode-cn.com/problems/number-of-digit-one/solution/shu-wei-dpshu-xue-fa-shuang-100-by-njyang-yang-yan/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

// 正则表达式：
// 这个解法不行，不过也是一种思路参考
var myStr = "";
for (i = 1; i <= n; i++) {
    i = String(i);
    myStr += i

}
return myStr.match(/1/g).length

// 作者： geduo - w
// 链接： https: //leetcode-cn.com/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof/solution/zheng-ze-cha-zhao-zi-fu-chuan-zhong-nei-fyhmd/
//     来源： 力扣（ LeetCode）
// 著作权归作者所有。 商业转载请联系作者获得授权， 非商业转载请注明出处。