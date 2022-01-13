/*
 * @Author: Ran
 * @Date: 2021-12-26 22:50:53
 * @LastEditTime: 2021-12-26 22:54:02
 * @FilePath: \FrontEnd\FrontEnd-Algorithm-JS\test.js
 * @Description: 
 */
function p() {
    p.prototype.like = ['1', '2']
}
var p1 = new p()
p1.like.push('3')

console.log(p.prototype.like);

let a = 1
let b = 2
let c = 3
let d = 4
let e = 5
    // 防抖函数
function debounce(fn, delay) {
    let timer
    return function() {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function() {
            fn.apply(context, args)
        }, delay)
    }
}
// Copilot牛逼
// what happened?