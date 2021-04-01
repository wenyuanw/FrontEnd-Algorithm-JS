/*
 * @Author: Ran
 * @Date: 2021-03-31 10:39:35
 * @LastEditTime: 2021-03-31 14:01:15
 * @FilePath: \JZoffer\FE_Algorithm\CJ5-数组去重.js
 * @Description: 
 * 数组去重：
 * 
 */

// function unique(arr) {
//     var resArr = [];
//     var flag = true;

//     for (var i = 0; i < arr.length; i++) {
//         if (resArr.indexOf(arr[i]) == -1) {
//             if (arr[i] != arr[i]) { //排除 NaN
//                 if (flag) {
//                     resArr.push(arr[i]);
//                     flag = false;
//                 }
//             } else {
//                 resArr.push(arr[i]);
//             }
//         }
//     }
//     return resArr;
// }



function unique(array) {
    var obj = {};
    return array.filter(function(item, index, array) {
        if (JSON.stringify(item) === '{}') {
            return obj.hasOwnProperty(typeof item + JSON.stringify(item) + item.toString()) ? false : (obj[typeof item + JSON.stringify(item) + item.toString()] = true)
        } else {
            console.log(typeof item + JSON.stringify(item));
            return obj.hasOwnProperty(typeof item + JSON.stringify(item)) ? false : (obj[typeof item + JSON.stringify(item)] = true)
        }
    })
}
var array = [{}, {}, /a/, /a/, 1, NaN, undefined, true, false, null];
console.log(array);
array = unique(array);
// let arr = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN];
console.log(array);




// function () { var a = [true, false, null, undefined, NaN, 0, 1, {}, {}, 'a', 'a', NaN].uniq(); 
// return a.length === 10 && a[1] === false && a[0] === true && a[3] === undefined && a[2] === null && isNaN(a[4]); }

// 对undefined和NaN还有{}做出相应判断就过了

/* let a = {};
a === a; // true
let b = {};
b === a; // false

let b = NaN;
b === b; // false */

// JavaScript专题之数组去重
// https://github.com/mqyqingfeng/Blog/issues/27