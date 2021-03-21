/*
 * @Author: Ran
 * @Date: 2021-03-18 21:21:30
 * @LastEditTime: 2021-03-20 14:40:21
 * @FilePath: \JZoffer\my_test\BS2-XC-最简分数表达式求和.js
 * @Description: 
 */
/* 
20210318 携程笔试题2

最简分数表达式求和
题目描述：
给定若干个有限小数或者无限循环小数组成的求和表达式，
请将小数转化为最简分数表示形式，并求和。

输入描述
整数部分零不省略，小数部分中循环节用括号标记出来

输出描述
将表达式转换为最简分数形式，并求和

样例输入
2.00+0.46+0.25(285714)
样例输出
2+23/50+177/700=1899/700

提示
输入格式错误时输出：
Invalid Expression 
*/

// 解题思路：
// 1.整数直接化为整数
// 2.不循环小数，化为分母为 10^n 的假分数，再 约分
// 3.主要是处理无限循环小数，处理循环节部分
// 4.输出部分：分子和分母求出来，字符串拼接
// 5.相加之后的求和也要转换成最简分数，最简分数求和，通分，分子相加

// PS： 解决了样例输入， 但是还有一些输入情况没考虑， 10.45 这类大于 1 的小数
// 也不难处理，不过懒得改了。。。 累死 orz

/* 0.333.＝3/9=1/3
0.214214214214214.=214/999
简单说每一个循环节为分子,循环节有几位数分母就写几个9
0.3333.循环节为3 0.214.循环节为214
0.52525252.循环节为52,所以0.525252...＝52/99
0.35.=35/99 */

let s_input = '2.00+0.46+0.25(285714)';
let str_arr = s_input.split('+'); // [ '2.00', '0.46', '0.25(285714)' ]
// 统计输入了几个小数:
let n = str_arr.length;

let res_a = 0; // 求和结果的分子
let res_b = 0; // 求和结果的分母

// 化为最简分数的函数：
function getFraction(decimal) {
    // console.log(decimal);
    if (decimal.indexOf('(') !== -1) {
        // 1. 循环小数 eg: 0.25(285714) 
        // 处理成： 不循环的小数部分 + 循环节 0.25 + 0.00(285714)
        let d_arr = decimal.replace(')', '').split('(');

        // a.处理不循环的小数部分：
        let buxunhuan = d_arr[0];
        let s = buxunhuan.split('.');
        Fraction.fraction(parseInt(s[1]), Math.pow(10, s[1].length));
        Fraction.toFraction();
        // 分子：
        let a1 = Fraction.a;
        // 分母：
        let b1 = Fraction.b;

        // b.处理循环节部分:
        let xunhuanjie = d_arr[1];
        let b2 = '';
        for (let i = 0; i < xunhuanjie.length; i++) {
            b2 += '9'
        }
        b2 = parseInt(b2) * 10 ** s[1].length; // 循环节的分母
        Fraction.fraction(xunhuanjie, b2);
        Fraction.toFraction();
        // 分子：
        let a2 = Fraction.a;
        // 分母：
        b2 = Fraction.b;

        // c.不循环的部分加上循环的部分：
        Fraction.fraction(a1 * b2 + a2 * b1, b1 * b2);
        Fraction.toFraction();
        let frac_num3 = Fraction.d; // => 1/4
        // 分子：
        let a3 = Fraction.a;
        // 分母：
        b3 = Fraction.b;

        if (res_a === 0 && res_b === 0) {
            res_a = a3;
            res_b = b3;
        } else {
            res_a = res_a * b3 + res_b * a3;
            res_b = b3 * res_b;
        }
        return frac_num3;
    } else {
        // 2.整数的情况 eg: 2.00
        let d_arr = decimal.split('.').map(Number);
        if (d_arr[1] === 0) {
            if (res_a === 0 && res_b === 0) {
                res_a = d_arr[0];
                res_b = 1;
            } else {
                res_a = res_a + res_b * d_arr[0];
            }
            return d_arr[0];
        } else {
            // 3.不循环小数 eg: 0.46 0.046 假分数不用处理吗？如1.46 ???
            d_arr = decimal.split('.');
            Fraction.fraction(parseInt(d_arr[1]), Math.pow(10, d_arr[1].length));
            Fraction.toFraction();
            let frac_num = Fraction.d;
            // 分子：
            let a = Fraction.a;
            // 分母：
            let b = Fraction.b;
            if (res_a === 0 && res_b === 0) {
                res_a = a;
                res_b = b;
            } else {
                res_a = res_a * b + res_b * a;
                res_b = b * res_b;
            }
            return frac_num;
        }
    }
}

// 小数转为分数的形式
var Fraction = {
    a: 0,
    b: 0,
    d: "",
    e: 0,
    fraction: function(num1, num2) {
        Fraction.a = num1;
        Fraction.b = num2;
        Fraction.appointment();
    },
    gcd: function(a, b) { //欧几里德算法
        return b == 0 ? a : Fraction.gcd(b, a % b);
    },
    appointment: function() { // 约分操作
        if (Fraction.a == 0 || Fraction.b == 1) return; // 如果分子是0或分母是1就不用约分了
        Fraction.e = Fraction.gcd(Fraction.a, Fraction.b);
        Fraction.a /= Fraction.e;
        Fraction.b /= Fraction.e;
    },
    toFraction: function() {
        Fraction.d = Fraction.a + "/" + Fraction.b;
    }

};

let res = str_arr.map(item => getFraction(item));
let res_str = '';
for (let i = 0; i < res.length; i++) {
    if (i === res.length - 1) {
        res_str += res[i];
    } else {
        res_str += res[i] + '+';
    }
}

Fraction.fraction(res_a, res_b);
Fraction.toFraction();
let frac_num = Fraction.d;
// 分子：
res_a = Fraction.a;
// 分母：
res_b = Fraction.b;

// 拼接结果
res_str = res_str + '=' + frac_num;

console.log(res_str);