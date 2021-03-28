/*
 * @Author: Ran
 * @Date: 2021-03-27 14:34:44
 * @LastEditTime: 2021-03-27 17:35:23
 * @FilePath: \JZofferf:\FrontEndLearning\FE_Learning\test\wangyi.js
 * @Description: 
 * 给定一个数组，所有元素都是大于0的整数。
 * 能够组成三角形三条边的是三元组，
 * 能够构成最多的有效三元组的元素称为关键元素，
 * 求出给定数组中的关键元素。
 * 
 * 输入：
 * 7
 * 1 2 3 4 5 6 7
 * 输出：
 * 5 6
 * 
 * 需要按照从小到大的顺序输出所有的关键元素
 */

let n = 7;
let eleArr = [1, 2, 3, 4, 5, 6, 7];

// let n = parseInt(readline()); // 元素个数
// let eleArr = readline().split(' ').map(item => parseInt(item)); // 元素数组

if (n < 3) console.log('');

let nums = eleArr;
let count = 0;
nums.sort((a, b) => a - b)
console.log(nums);

let memo = {};

// for (let i = 0; i < n - 2; i++) {
//     for (let j = i + 1; j < n - 1; j++) {
//         for (let k = j + 1; i < n; k++) {
//             if (nums[i] + nums[j] > nums[k] && nums[i] + nums[k] > nums[j] && nums[j] + nums[k] > nums[i])
//                 count++;
//         }
//     }

// }

for (let k = n - 1; k > 1; k--) {
    let i = 0,
        j = k - 1;
    while (i < j) {
        if (nums[i] + nums[j] > nums[k]) {
            count += j - i;

            for (let m = i; m <= j - 1; m++) {
                for (let n = m + 1; n <= j; n++) {
                    memoAdd(memo, nums[m]);
                    memoAdd(memo, nums[n]);
                    memoAdd(memo, nums[k]);
                }
            }

            j--;
        } else {
            i++;
        }
    }
}
// 需要统计能够组成三角形的边长，从小到大输出；

function memoAdd(memo, key) {
    if (memo[key]) {
        memo[key] += 1;
    } else {
        memo[key] = 1;
    }
}

console.log(memo);
console.log(count); // 统计出了有几个


var dfs2 = function(arr, n) {
    let dp = new Array(n).fill(0)
    rr.sort((a, b) => a < b)
    for (let R = n - 1; R > 2; R--) {
        let l = 0,
            r = R - 1;
        while (l < r) {
            if (arr[l] + arr[r] <= arr[R]) { l++; } else {
                for (let i = l; i < r; i++) {
                    dp[i]++;
                    dp[r]++;
                    dp[R]++;
                }
                r--;
            }
        }
    }
    console.log(dp)
    let ans = [];
    let max = -1;
    for (let i = 0; i < dp.length; i++) {
        if (dp[i] > max) {
            max = dp[i];
            ans = [arr[i]];
        } else if (dp[i] == max) {
            ans.push(arr[i]);
        }
    }
    console.log(ans);
}