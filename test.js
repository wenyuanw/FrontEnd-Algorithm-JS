/*
 * @Author: Ran
 * @Date: 2021-12-26 22:50:53
 * @LastEditTime: 2022-01-13 19:53:03
 * @FilePath: \FrontEnd-Algorithm-JS\test.js
 * @Description: 
 */
function p() {
    p.prototype.like = ['1', '2']
}
var p1 = new p()
p1.like.push('3')

console.log(p.prototype.like);