/* 
20210316
记录前端求职常见的编程题
-----------------------
*****快速排序*****
*/

/* 
low 指针找到大于 pivot 的元素， hight 指针找到小于 pivot 的元素，
然后两个元素交换位置，最后再将基准数归为。 
*/

// 一、基本的快速排序，选取第一个元素作为基准点
function QuickSort(nums, low, hight) {
    if(low < hight) {
        let index = Partition(nums, low, hight);
        QuickSort(nums, low, index-1);
        QuickSort(nums, index + 1, hight);
    }
}

function Partition(nums, low, hight) {
    let pivot = nums[low];
    let start = low;

    while(low < hight) {
        // 注意这里，要 hight 先开始--
        while(low < hight && nums[hight] >= pivot) hight--;
        while(low < hight && nums[low] <= pivot) low++;
        // break 的条件要放在Swap之前
        if(low >= hight) break;
        Swap(nums, low, hight)
    }
    // 基准归位
    Swap(nums, start, low);
    return low;
}

function Swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let dataArr = [2,6,5,9,12,22];
QuickSort(dataArr, 0, dataArr.length - 1);
console.log(dataArr);


// 二、利用三元取中法，选取三个元素中的中间值放到 nums[low] 的位置，做为基准值。
// 这样就避免了使用最大值或最小值作为基准值。 
function QuickSort(nums, low, hight) {
    if(low < hight) {
        let index = Partition(nums, low, hight);
        QuickSort(nums, low, index-1);
        QuickSort(nums, index + 1, hight);
    }
}

function Partition(nums, low, hight) {
    // 三数取中，也可以用其他方法（例如随机取值）
    let mid = low + ((hight - low) >> 1);
    if(nums[low] > nums[hight]) Swap(nums, low, hight);
    if(nums[mid] > nums[hight]) Swap(nums, mid, hight);
    if(nums[mid] > nums[low]) Swap(nums, mid, low);

    // 与之前一样
    let pivot = nums[low];
    let start = low;

    while(low < hight) {
        while(low < hight && nums[hight] >= pivot) hight--;
        while(low < hight && nums[low] <= pivot) low++;
        if(low >= hight) break;
        Swap(nums, low, hight)
    }
    // 基准归位
    Swap(nums, start, low);
    return low;
}

function Swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let dataArr = [2,6,5,9,12,22];
QuickSort(dataArr, 0, dataArr.length - 1);
console.log(dataArr);

// 三、和插入排序搭配使用
// 当元素数量较少的时候，快速排序反而不如插入排序好用。
// 所以我们可以设定一个阈值，当元素个数大于阈值时使用快速排序，
// 小于等于该阈值时则使用插入排序。
function QuickSort(nums, low, hight) {
    let INSERTION_SORT_MAX_LENGTH = 7;
    // 插入排序
    if(hight - low <= INSERTION_SORT_MAX_LENGTH) {
        inserSort(nums, low, hight);
        return;
    }
    // 快速排序
    let index = Partition(nums, low, hight);
    QuickSort(nums, low, index-1);
    QuickSort(nums, index + 1, hight);
}

function Partition(nums, low, hight) {
    // 三数取中，也可以用其他方法（例如随机取值）
    let mid = low + ((hight - low) >> 1);
    if(nums[low] > nums[hight]) Swap(nums, low, hight);
    if(nums[mid] > nums[hight]) Swap(nums, mid, hight);
    if(nums[mid] > nums[low]) Swap(nums, mid, low);

    // 与之前一样
    let pivot = nums[low];
    let start = low;

    while(low < hight) {
        while(low < hight && nums[hight] >= pivot) hight--;
        while(low < hight && nums[low] <= pivot) low++;
        if(low >= hight) break;
        Swap(nums, low, hight)
    }
    // 基准归位
    Swap(nums, start, low);
    return low;
}

// function inserSort(nums, low, hight) {
//     for(let i = low + 1; i <= hight; ++i) {
//         let temp = nums[i];
//         let j;
//         for(j = i - 1; j >= 0; --j) {
//             if(temp < nums[j]) {
//                 nums[j + 1] = nums[j];
//                 continue;
//             }
//             break;
//         }
//         nums[j + 1] = temp;
//     }
// }

// function Swap(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// let dataArr = [2,6,5,9,12,22];
// QuickSort(dataArr, 0, dataArr.length - 1);
// console.log(dataArr);
