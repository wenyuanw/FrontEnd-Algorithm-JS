/*
 * @Author: Ran
 * @Date: 2021-07-08 23:53:00
 * @LastEditTime: 2021-07-09 00:21:40
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ45-扑克牌顺子.JS
 * @Description: 
 * 1. A为1，J为11，Q为12，K为13，A不能视为14
 * 2. 大、小王为 0，0可以看作任意牌
 * 3. 如果给出的五张牌能组成顺子（即这五张牌是连续的）就输出true，否则就输出false。
 * 例如：给出数据[6,0,2,0,4]
 * 中间的两个0一个看作3，一个看作5 。即：[6,3,2,5,4]
 * 这样这五张牌在[2,6]区间连续，输出true
 * 数据保证每组5个数字，每组最多含有4个零，数组的数取值为 [0, 13]
 */
function IsContinuous(numbers) {
    let noZeroArr = numbers.filter(num => num !== 0)
    let max = Math.max(...noZeroArr)
    let min = Math.min(...noZeroArr)
    for (let a of noZeroArr) {
        if (noZeroArr.indexOf(a) !== noZeroArr.lastIndexOf(a)) return false
    }
    if (max - min > 4) return false
    return true
}

function IsContinuous(numbers) {
    let a = numbers.filter((el) => el != 0); //去0
    let max = Math.max(...a); //求去0后的数组最大值
    let min = Math.min(...a); //求去0后的数组最小值
    for (let x of a) { //判断数组a中是否有重复值
        if (a.indexOf(x) != a.lastIndexOf(x)) {
            return false
        }
    }
    if (max - min <= 4) { //判断max-min
        return true;
    } else {
        return false;
    }
}