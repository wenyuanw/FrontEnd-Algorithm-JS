/*
 * @Author: Ran
 * @Date: 2021-03-27 19:34:25
 * @LastEditTime: 2021-03-27 20:58:53
 * @FilePath: \test\JD1.js
 * @Description: 
 * 题目描述：
 * 小狗Cheems在魔大陆大冒险，收集到了n颗宝石，第i个宝石有其美丽值a[i]，
 * Cheems决定挑出一些宝石带回家，一颗带回家的宝石给Cheems带来的快乐值与其石头本身的美丽值相等。
 * 虽然我们知道不是所有的宝石的美丽值都为正数，但是Cheems还是很开心，
 * 每带回家3颗宝石，Cheems的快乐值就会加K。
 * 问Cheems要如何选择宝石带回家，使得自己能获得的快乐值最高。
 * 请输出快乐值的最大值。
 * 
 * 输入描述：
 * 第一行包括两个正整数n,k，表示收集到的宝石的数量和每带回家3颗宝石快乐值的增加量。
 * 第二行包括n个整数，表示第i颗宝石的美丽值。
 * -1000≤a[i]≤1000,1≤k≤1000
 * 
 * 样例输入
 * 5 5
 * 1 2 3 4 -6
 * 样例输出
 * 15
 * 
 * 提示：带回前三颗宝石能获得（1 + 2 + 3 + 5= 11）的快乐值，
 * 同时再带回第四颗宝石，总共获得的快乐值为15，这时是能获得的最大的快乐值。
 */

// 输入：
let line1 = read_line().split(' ');
let n = parseInt(line1[0]); // 宝石数量
let k = parseInt(line1[1]); // 每带回3颗宝石的快乐值
let stones = read_line().split(' ').map(item => parseInt(item));
let sum = 0;
let maxSum = 0;
let count = 0;

stones.sort((a, b) => b - a);



for (let i = 0; i < stones.length; i++) {

    if (stones[i] >= 0) {
        count++;
        sum += stones[i];
        maxSum = sum + k * Math.floor(count / 3);
        // 先把正的全部加起来
    } else {
        if (k + stones[i] > 0) {
            // 当出现负数的时候
            // 只考虑绝对值比 k 要小的数  如 k = 5，那么 k = -5 绝对不考虑了  
            count++;
            sum += stones[i];
            let temp = maxSum;
            maxSum = sum + k * Math.floor(count / 3);
            if (temp >= maxSum) {
                maxSum = temp;
            }
        }
    }
}

console.log(maxSum);