/*
 * @Author: Ran
 * @Date: 2021-03-20 17:13:39
 * @LastEditTime: 2021-03-21 16:41:21
 * @FilePath: \JZoffer\my_test\BS2-meituan-奶茶.js
 * @Description: 美团笔试
 */

/* 题目描述：
奶茶：
学校正在举行喝奶茶比赛。这次比赛准备了 n 杯奶茶
（为了比赛公平，奶茶里没有珍珠，椰果等各种小料，也就是纯奶茶），
编号为 1 到 n。第 i 杯奶茶有 ai 毫升，这 n 杯奶茶准备的吸管都是一样的，每秒最多能吸上来 C 毫升奶茶，
选手只能通过吸管吸奶茶，不能捅破包装把奶茶倒进嘴里，这样对其他选手不公平。

选手按队伍参赛，小团所在的队伍有 m 个人，比赛要求队内的每个人选取编号在一个连续区间的奶茶喝，
当然参赛选手也可以不喝任何奶茶。但是选定一杯奶茶喝就一定要喝完，不然的话这杯奶茶就被浪费了。

如果小团所在队打破了校记录，那么她们队的每个人都将获得一年的奶茶畅饮卷，
所以她想知道所有奶茶都被喝完的最短用时。


输入描述
第一行三个整数 n, m, C，意义如题目描述。
第二行 n 个整数，第 i 个整数为 ai。
1 ≤ n, m ≤ 105, 1 ≤ C ≤ 50, 1 ≤ ai ≤ 104。

输出描述
输出一行一个整数，表示所有奶茶都被喝完的最短用时，为了保证精度，请输出答案 上取整 后的结果。

样例输入
5 3 4
5 8 3 10 7
样例输出
4
*/

// 题目同：LeetCode 410. 分割数组的最大值
// 需要求出分割数组的最大值，然后用最大值除以每秒喝奶茶的量向上取整即为答案
/* 
解题思路：

二分的上界为数组 milktea 中所有元素的和，
下界为数组 milktea 中所有元素的最大值。
通过二分查找，我们可以得到最小的最大分割子数组和

由题意可知：子数组的最大值是有范围的，即在区间 [max(nums),sum(nums)] 之中。
令 l=max(nums)，h=sum(nums)，mid=(l+h)/2，计算数组和最大值不大于 mid 对应的子数组个数 cnt(这个是关键！)
如果 cnt>m，说明划分的子数组多了，即我们找到的 mid 偏小，故 l=mid+1；
否则，说明划分的子数组少了，即 mid 偏大(或者正好就是目标值)，故 h=mid。

*/

let n = 5; // 奶茶数量
let m = 3; // 队伍的人数，即需把数组分为 几个子数组
let C = 4; // 每秒喝奶茶的量
let milktea = [5, 8, 3, 10, 7]; // 每杯奶茶的量

let left = Math.max(...milktea);
let right = 0;
milktea.forEach(item => right += item);

console.log(milktea);

while (left < right) {
    let mid = left + parseInt((right - left) / 2); // 非常注意，需要取整！！！！

    let splits = split(milktea, mid);
    if (splits > m) {
        // 如果分割数太多，说明说明「子数组各自的和的最大值」太小，
        // 此时需要将「子数组各自的和的最大值」调大
        // 下一轮搜索的区间是 [mid + 1, right]
        left = mid + 1;
    } else {
        // 此时是 splits <= m
        // 下一轮搜索的区间是上一轮的反面区间 [left, mid]
        right = mid;
    }
}

/**
 * @description: 
 * @param {number[]} nums 原始数组
 * @param {number} maxIntervalSum 子数组各自的和的最大值
 * @return {number} 满足不超过「子数组各自的和的最大值」的分割数
 */
function split(nums, maxIntervalSum) {
    // 至少是一个分割
    let splits = 1;
    // 当前区间的和：
    let curIntervalSum = 0;
    for (num of nums) {
        if (curIntervalSum + num > maxIntervalSum) {
            curIntervalSum = 0;
            splits++;
        }
        curIntervalSum += num;
    }
    return splits;
}

console.log(left);
console.log(Math.ceil(left / C));