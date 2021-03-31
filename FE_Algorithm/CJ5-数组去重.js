/*
 * @Author: Ran
 * @Date: 2021-03-31 10:39:35
 * @LastEditTime: 2021-03-31 11:11:22
 * @FilePath: \JZoffer\FE_Algorithm\CJ5-数组去重.js
 * @Description: 
 * 数组去重：
 * 
 */

function unique(arr) {
    var resArr = [];
    var flag = true;

    for (var i = 0; i < arr.length; i++) {
        if (resArr.indexOf(arr[i]) == -1) {
            if (arr[i] != arr[i]) { //排除 NaN
                if (flag) {
                    resArr.push(arr[i]);
                    flag = false;
                }
            } else {
                resArr.push(arr[i]);
            }
        }
    }
    return resArr;
}

let arr = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(unique(arr));


// function () { var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq(); 
// return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4]); }

// 对undefined和NaN还有{}做出相应判断就过了

let a = {};
a === a; // true
let b = {};
b === a; // false

let b = NaN;
b === b; // false

// JavaScript专题之数组去重
// https://github.com/mqyqingfeng/Blog/issues/27