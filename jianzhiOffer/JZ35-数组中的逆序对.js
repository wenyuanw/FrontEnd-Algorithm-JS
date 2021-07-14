/*
 * @Author: Ran
 * @Date: 2021-07-14 23:44:48
 * @LastEditTime: 2021-07-15 00:21:22
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ35-数组中的逆序对.js
 * @Description: 
 * 在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
 * 输入一个数组,求出这个数组中的逆序对的总数P。
 * 并将P对1000000007取模的结果输出。 即输出P%1000000007
 * 对于%50%的数据,size <= 10^4size≤10^4
 * 对于%100%的数据,size <= 10^5size≤10^5
 * 输入描述：
 * 题目保证输入的数组中没有的相同的数字
 */
// 双重for循环，超时
function InversePairs(data) {
    let res = 0
    if (data.length <= 1) return res
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < i; j++) {
            if (data[j] > data[i]) res++
        }
    }
    return res % 1000000007
}
// 顺序遍历dataSorted数组，第一个元素0是最小的元素，
// 因此在data数组中，0前面有多少个数，就有多少个逆序对。
// 在0检测完之后，将0从data数组中删除，data=[3,2,1,5,4,6,7]，
// dataSorted数组遍历到1，而1其实就是[1,2,3,4,5,6,7]中的最小元素
// 因此，原问题就变为子问题：
// 输入数组：data=[3,2,1,5,4,6,7]
// 排序好数组：dataSorted=[1,2,3,4,5,6,7]
function InversePairs(data) {
    let res = 0
    let copy = [...data]
    if (data.length <= 1) return res
    copy.sort((a, b) => a - b)

    for (let i = 0; i < copy.length; i++) {
        const index = data.indexOf(copy[i])
        res += index
        data.splice(index, 1)
    }

    return res % 1000000007
}

// 正确的应该要有归并的思想
function InversePairs(data) {
    if (!data || data.length < 2) return 0;

    var help = data.slice(),
        count = 0;

    count = mergeSort(data, help, 0, data.length - 1);
    return count % 1000000007;
}

function mergeSort(data, help, start, end) {
    if (end === start) return 0;
    var mid = (end - start) >> 1,
        left = mergeSort(help, data, start, start + mid),
        right = mergeSort(help, data, start + mid + 1, end),
        count = 0,
        p = start + mid, //前一个数组的最后一个下标
        q = end, //后一个数组的下标
        helpIndex = end; //辅助数组下标，从最后一个算起

    while (p >= start && q >= start + mid + 1) {
        if (data[p] > data[q]) {
            count += q - start - mid;
            help[helpIndex--] = data[p--];
        } else {
            help[helpIndex--] = data[q--];
        }
    }

    while (p >= start) {
        help[helpIndex--] = data[p--];
    }

    while (q >= start + mid + 1) {
        help[helpIndex--] = data[q--];
    }
    return left + right + count;
}