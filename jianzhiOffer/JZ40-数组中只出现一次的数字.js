/*
 * @Author: Ran
 * @Date: 2021-04-01 08:53:39
 * @LastEditTime: 2021-04-02 10:05:03
 * @FilePath: \JZoffer\jianzhiOffer\JZ40-数组中只出现一次的数字.js
 * @Description: 
 * 
 */

// 位运算不是很好理解...

// 一个整型数组里除了两个数字之外，其他的数字都出现了两次。请写程序找出这两个只出现一次的数字。
function FindNumsAppearOnce(array) {
    let res = [];
    let len = array.length;
    let count = 0;
    // 可以先排序,再对前后的进行比较
    array.sort((a, b) => a - b);
    let i = 0;
    while (i < len) {
        if (array[i] !== array[i + 1]) {
            res.push(array[i]);
            i += 1;
            count += 1;
            if (i === len - 1) {
                res.push(array[i]);
                count += 1;
            }
            if (count === 2) return res;
        } else {
            i += 2;
        }
    }
}

// 题目变形:
// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
var singleNumber = function(nums) {
    let len = nums.length;
    // 可以先排序,再对前后的进行比较
    nums.sort((a, b) => a - b);
    let i = 0;
    while (i < len) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i];
        } else {
            i += 3;
            if (i === len - 1) return nums[i];
        }
    }
};


let array = [3, 4, 3, 3];

console.log(singleNumber(array));

/* 思路1:去重(空间复杂度不能满足)
通过对象obj记录，key为当前数字，value为任意值。
遍历时判断obj中是否存在这个key，如果存在就删除，否则就记录
遍历完成后，obj中仅有的两个key就是最终结果
(以上可以修改成使用set、map等方式记录数据)
javascript
示例代码：

作者：shui-_shui-___
链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/qu-zhong-huo-zhe-wei-yun-suan-si-xiang-b-iup2/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。 */

const singleNumbers = (nums) => {
    const obj = {}
    nums.forEach(item => {
        if (obj[item]) {
            delete obj[item]
        } else {
            obj[item] = true
        }
    })
    return Object.keys(obj)
}

// 因为除了要返回的数都是出现两次，所以set最后只会返回我们要的结果，然后直接return [...set].reverse(),
// 因为你是两头遍历，所以set保存的顺序要颠倒一下
var singleNumbers = function(nums) {
    let set = new Set();
    let i = 0,
        j = nums.length - 1;
    while (i < j) {
        set.has(nums[i]) ? set.delete(nums[i]) : set.add(nums[i]);
        set.has(nums[j]) ? set.delete(nums[j]) : set.add(nums[j]);
        i++;
        j--;
    }
    return [...set].reverse();
};

// 作者：zzilcc
// 链接：https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/li-yong-setran-hou-tong-shi-liang-tou-bian-li-zui-/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。