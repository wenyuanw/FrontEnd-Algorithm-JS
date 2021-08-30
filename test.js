function p() {
    p.prototype.like=['1','2']
}
var p1 = new p()
p1.like.push('3')

console.log(p.prototype.like);