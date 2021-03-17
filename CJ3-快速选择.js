/* 
20210317
记录前端求职常见的编程题
-----------------------
*****快速选择*****
基于快速排序的思想,快速选择第K大的元素,
同时也可以是前k大的数
*/

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