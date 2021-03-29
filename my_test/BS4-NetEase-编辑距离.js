/*
 * @Author: Ran
 * @Date: 2021-03-27 16:38:43
 * @LastEditTime: 2021-03-29 16:31:40
 * @FilePath: \JZoffer\my_test\wangyi4.js
 * @Description: 
 * https://leetcode-cn.com/problems/edit-distance/
 */

/* 作者：1Π胡言
链接：https://www.nowcoder.com/discuss/625915?channel=-1&source_id=profile_follow_post_nctrack
来源：牛客网

编辑距离变种，定义了编辑距离和两组字符串长度的比值，
参考 https://leetcode-cn.com/problems/edit-distance/ ,
只不过增删距离为1，改距离为2
思路：动态规划,dp[i][j]为字符串前i个字符子串到字符串前j个字符子串的编辑距离，可以压缩空间 */

let str0Arr = readline().split('');
let str1Arr = readline().split('');
const len0 = str0Arr.length;
const len1 = str1Arr.length;

const dp = new Array(len0 + 1);
dp[0] = new Array(len1 + 1);
for (let j = 0; j <= len1; j++) {
    dp[0][j] = j;
}
for (let i = 1; i <= len0; i++) {
    dp[i] = new Array(len1 + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[i][0] = i;
}

for (let i = 1; i <= len0; i++) {
    for (let j = 1; j <= len1; j++) {
        if (str0Arr[i - 1] === str1Arr[j - 1]) {
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j - 1], dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        } else {
            dp[i][j] = Math.min(dp[i][j], dp[i - 1][j] + 1, dp[i][j - 1] + 1);
        }
    }
}

let sim = (len0 + len1 - dp[len0][len1]) / (len0 + len1);

console.log(sim.toFixed(2));