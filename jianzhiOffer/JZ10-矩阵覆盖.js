/*
 * @Author: Ran
 * @Date: 2021-03-22 09:55:34
 * @LastEditTime: 2021-03-22 11:11:23
 * @FilePath: \JZoffer\jianzhiOffer\JZ10-矩阵覆盖.js
 * @Description: 
 * 题目描述：
 * 我们可以用2*1的小矩形横着或者竖着去覆盖更大的矩形。
 * 请问用n个2*1的小矩形无重叠地覆盖一个2*n的大矩形，总共有多少种方法？
 * 比如n=3时，2*3的矩形块有3种覆盖方法：
 * 
 * 示例 1
 * 输入： 4
 * 输出： 5
 */
// 解题思路：
// 1：这个跟第一个跳台阶的题原理是一样的吧？要么一次加1，要么一次加2？

/* 
2.
依旧是斐波那契数列
2*n的大矩形，和n个2*1的小矩形
其中target*2为大矩阵的大小
有以下几种情形：
1、target <= 0 大矩形为<= 2*0,直接return 1；
2、target = 1大矩形为2*1，只有一种摆放方法，return1；
3、target = 2 大矩形为2*2，有两种摆放方法，return2；
4、target = n 分为两步考虑：
        a.第一次摆放一块 2*1 的小矩阵，则摆放方法总共为f(target - 1)
        b.第一次摆放一块1*2的小矩阵，则摆放方法总共为f(target-2)
        因为，摆放了一块1*2的小矩阵，对应下方的1*2摆放方法就确定了，所以为f(targte-2)
 */

function rectCover(number) {
    // f(n) = f(n-1) + f(n-2)
    let cache = {
        0: 0,
        1: 1,
        2: 2
    }
    if (cache[number]) return cache[number]
    for (let i = 3; i <= number; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[number];
}

function rectCover(number) {
    let res = 0;
    let m = 1;
    let n = 2;
    if (number === 0) return 0;
    if (number === 1) return m;
    if (number === 2) return n;
    for (let i = 3; i <= number; i++) {
        res = n + m;
        m = n;
        n = res;
    }
    return res;
}

/* 将题目改成1*3方块覆盖3*n、1*4方块覆盖4*n。
相应的结论应该是：
盖3*n区域：f(n) = f(n-1) + f(n - 3)， (n > 3)
盖4*n区域：f(n) = f(n-1) + f(n - 4)，(n > 4)
更一般的结论，如果用1*m的方块覆盖m*n区域，递推关系式为f(n) = f(n-1) + f(n-m)，(n > m)。 */