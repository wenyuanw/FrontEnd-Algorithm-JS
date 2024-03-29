/*
 * @Author: Ran
 * @Date: 2021-03-21 20:42:05
 * @LastEditTime: 2021-03-21 21:07:39
 * @FilePath: \JZoffer\my_test\BS3-baidu-数组询问-未完成.js
 * @Description: 
 * ---------------------------------------------------------------------------
 * 题目描述：
 * 牛牛有一个长度为 n 的数组，牛妹给出 m 个询问，询问有2种类型：
 * 1 l r：询问区间 [l, r] 内有多少子序列的乘积为奇数
 * 1 l r：询问区间 [l, r] 内有多少子序列的乘积为偶数
 * 某个序列的子序列是从最初序列通过去除某些元素但不破坏余下元素的相对位置
 * （在前或在后）而形成的新序列。
 * ---------------------------------------------------------------------------
 * 输入描述：
 * 第一行 2 个整数 n, m, 表示数组长度和询问个数。
 * 接下来一行给出 n 个空格隔开的数。
 * 接下来 m 行每行三个整数表示操作类型。
 * 1 <= l <= n, m <= 2*10^5.
 * ---------------------------------------------------------------------------
 * 输出描述：
 * 输出 m 行，每行表示对应询问的答案，因为答案可能很大，输出对 10^9+7 取模
 * 的结果。
 * ---------------------------------------------------------------------------
 * 示例1：
 * 输入：
 * 4 2
 * 1 2 3 4
 * 1 1 3
 * 2 1 3
 * 
 * 输出：
 * 3
 * 4
 * 
 * 说明：
 * 第一个询问中合法的子序列为：{1}，{3}，{1，3}。第二个询问中合法的子序列为：
 * {2},{1,2},{2,3},{1,2,3}
 * ---------------------------------------------------------------------------
 */