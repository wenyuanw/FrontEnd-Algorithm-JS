/*
 * @Author: Ran
 * @Date: 2021-03-04 20:06:52
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-05 10:42:22
 * @FilePath: \JZoffer\XC-人口普查算法.js
 * @Description: 
 * 携程笔试题：
 * 人口普查时提供全国人口数据的主要来源，前不久我国刚完成了一次全国人口普查，
 * 现在假设分析数据的任务交到了你的手上，并且我们假设人口普查从公元1年开始从未间断过，
 * 也就是说数据的年份范围在[1,n]之间，这份数据记载了每一个人的出生和死亡年份，
 * 现在我们需要统计出过去那一年是活着的人口最多的年份，以及那一年的人口数
 * （假定还没有死亡的人口先不记录在这份数据里）。
 * 如果有出现多个年份相同的结果，取最小年份。
 */

/*  
 输入描述：
 第一行是一个整数，表示这份数据统计的总人数。
 第二行开始每一行包含两个整数b和d，分别代表每一个人的出生年份和死亡年份，以空格分开。
 如 1 5，活着的年份就是1，2，3，4，死亡年份步算入活着年份。 
 
 输出描述：
 打印两个整数，用空格隔开，分别代表或者的人数最多的一年，以及那一年的人口数。

 样例输入：
 4
 2 5
 2 4
 5 6
 5 10
 样例输出：
 2 2
 */

// 比较暴力解法的思路如下：
// 首先是读第一个输入的整数
let n = readInt();
// 根据n的值读取剩下的n行数据
let yearArr = [];
for (let i = 0; i < n; i++) {
    let str = readline(); // 读取进来的是字符串，进行分割，编程数组 
    let arr = str.split(' '); // 以空格进行分割
    // 此时 arr = [b,d] ,内循环将活着的年份存进数组
    for (let j = b; j < d; j++) {
        yearArr.push(j);
        // 活着的年份存进数组yearArr之后，问题转化为求该数组中出现次数最多的数，及其出现了几次（若不止一个，取较小值）
    }
}
// 对数组去重
noRepeatYearArr = Array.from(set(yearArr));
// 遍历noRepeatYearArr中的数，与yearArr中每一个进行比较，判断出现次数即可
// noRepeatYearArr和yearArr都进行sort()之后再进行比较，从最大的开始判断出现次数，双指针进行类似-->出队操作
// 计数器以及num的值都随时更新