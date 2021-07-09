/*
 * @Author: Ran
 * @Date: 2021-07-09 23:06:44
 * @LastEditTime: 2021-07-09 23:35:46
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ63-数据流中的中位数.js
 * @Description: 如何得到一个数据流中的中位数？
 * 如果从数据流中读出奇数个数值，那么中位数就是所有数值排序之后位于中间的数值。
 * 如果从数据流中读出偶数个数值，那么中位数就是所有数值排序之后中间两个数的平均值。
 * 我们使用Insert()方法读取数据流，
 * 使用GetMedian()方法获取当前读取数据的中位数。
 */
let arr = []

function Insert(num) {
    arr.push(num)
    arr.sort((a, b) => a - b)
}

function GetMedian() {
    return arr.length % 2 === 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[(arr.length) / 2 - 1]) / 2
}

/**
 * initialize your data structure here.
 */
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    this.arr.push(num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    let arr = this.arr.sort((a, b) => a - b)
    return arr.length % 2 === 1 ? arr[(arr.length - 1) / 2] : (arr[arr.length / 2] + arr[(arr.length) / 2 - 1]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */