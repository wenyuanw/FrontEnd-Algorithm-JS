/* 
20210316
题目描述：
给定一个数组，找出其中最小的K个数。
例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
如果K>数组的长度，那么返回一个空的数组
*/

// 直接用 api 当然是不好的。。。
function GetLeastNumbers_Solution(input, k)
{
    if(k > input.length) return [];
    let sortArr = [];
    
//   对输入进行升序排序
    sortArr = input.sort(function(a, b) { return a - b })
    
    return sortArr.slice(0, k);
}

/* 
20210317
题目描述：
LeetCode 面试题 17.14. 最小K个数
设计一个算法，找出数组中最小的k个数。
以任意顺序返回这k个数均可。
*/
// 使用快速选择算法做:
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
 var smallestK = function(arr, k) {
    if(k > arr.length) return arr;

    quickSelect(arr, 0, arr.length-1, k);
    return arr.slice(0, k);
};

// 使用快速选择算法：

function quickSelect(nums, low, hight, k) {
    let index = -1;
    while(low < hight){
        index = partition(nums, low, hight);
        if(index === k) break;
        if(index > k) {
            hight = index - 1;
        } else {
            low = index + 1
        }
    }
}

function partition(nums, low, hight) {
    // 最基本的，选择第一个元素作为 pivot
    let pivot = nums[low];
    // 记录基准的位置
    let start = low;
    while(low < hight) {
        while(low < hight && nums[hight] >= pivot) hight--;
        while(low < hight && nums[low] <= pivot) low++;
        if(low >= hight) break;
        swap(nums, low, hight);
    }
    // 基准归位
    swap(nums, start, low);
    return low;
}

function swap(nums, low, hight) {
    let temp = nums[low];
    nums[low] = nums[hight];
    nums[hight] = temp;
}