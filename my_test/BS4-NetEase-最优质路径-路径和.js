/*
 * @Author: Ran
 * @Date: 2021-03-27 14:34:52
 * @LastEditTime: 2021-03-29 16:24:56
 * @FilePath: \JZoffer\my_test\wangyi2.js
 * @Description: 
 * https://leetcode-cn.com/problems/path-sum-ii/
 * 最优质路径
 * 如果多条路径长度一样，则返回最左边的那条路径。不存在则返回空。
 */

// 输入是层序遍历的树

// https://www.nowcoder.com/discuss/625915?channel=-1&source_id=profile_follow_post_nctrack
// 思路：BFS，由于输入是数组，进行字符串切割，
// 进行BFS遍历各点的和，和为想要的 固定值，倒推路径，通过70%案例

let arr = readline().split('[')[1].split(']')[0].split(',').map((a) => parseInt(a));
const sum = parseInt(readline());
const n = arr.length;
let index;
let res = [...arr];
for (let i = 1; i < n; i++) {
    if (isNaN(res[i])) {
        continue;
    } else {
        res[i] += res[((i - 1) >> 1)];
        if (res[i] === sum) {
            index = i;
            break;
        }
    }
}
if (index) {
    let path = [arr[index]];
    while (index) {
        index = ((index - 1) >> 1);
        path.unshift(arr[index]);
    }
    console.log('[' + path.join(',') + ']');
} else {
    console.log([]);
}



let line1 = readline();

function findPath() {

}

console.log(line1); // 10%
console.log('[]'); // 20%