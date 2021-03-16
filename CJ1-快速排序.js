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
// function QuickSort(nums, low, hight) {
//     if(low < hight) {
//         let index = Partition(nums, low, hight);
//         QuickSort(nums, low, index-1);
//         QuickSort(nums, index + 1, hight);
//     }
// }

// function Partition(nums, low, hight) {
//     let pivot = nums[low];
//     let start = low;

//     while(low < hight) {
//         while(low < hight && nums[hight] >= pivot) hight--;
//         while(low < hight && nums[low] <= pivot) low++;
//         if(low >= hight) break;
//         Swap(nums, low, hight)
//     }
//     // 基准归位
//     Swap(nums, start, low);
//     return low;
// }

// function Swap(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// let dataArr = [2,6,5,9,12,22];
// QuickSort(dataArr, 0, dataArr.length - 1);
// console.log(dataArr);


// 二、利用三元取中法，选取三个元素中的中间值放到 nums[low] 的位置，做为基准值。
// 这样就避免了使用最大值或最小值作为基准值。 
// function QuickSort(nums, low, hight) {
//     if(low < hight) {
//         let index = Partition(nums, low, hight);
//         QuickSort(nums, low, index-1);
//         QuickSort(nums, index + 1, hight);
//     }
// }

// function Partition(nums, low, hight) {
//     // 三数取中，也可以用其他方法（例如随机取值）
//     let mid = low + ((hight - low) >> 1);
//     if(nums[low] > nums[hight]) Swap(nums, low, hight);
//     if(nums[mid] > nums[hight]) Swap(nums, mid, hight);
//     if(nums[mid] > nums[low]) Swap(nums, mid, low);

//     // 与之前一样
//     let pivot = nums[low];
//     let start = low;

//     while(low < hight) {
//         while(low < hight && nums[hight] >= pivot) hight--;
//         while(low < hight && nums[low] <= pivot) low++;
//         if(low >= hight) break;
//         Swap(nums, low, hight)
//     }
//     // 基准归位
//     Swap(nums, start, low);
//     return low;
// }

// function Swap(nums, i, j) {
//     let temp = nums[i];
//     nums[i] = nums[j];
//     nums[j] = temp;
// }

// let dataArr = [2,6,5,9,12,22];
// QuickSort(dataArr, 0, dataArr.length - 1);
// console.log(dataArr);

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

function inserSort(nums, low, hight) {
    for(let i = low + 1; i <= hight; ++i) {
        let temp = nums[i];
        let j;
        for(j = i - 1; j >= 0; --j) {
            if(temp < nums[j]) {
                nums[j + 1] = nums[j];
                continue;
            }
            break;
        }
        nums[j + 1] = temp;
    }
}

function Swap(nums, i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}

let dataArr = [2,6,5,9,12,22];
QuickSort(dataArr, 0, dataArr.length - 1);
console.log(dataArr);



// 输入需要排列的数组：
// let dataArr = [2,6,5,9,12,22];

// function QuickSort(dataArr, left, right) {
//     if (left >= right) return;
//     console.log(dataArr);
//     // 枢纽应该在的位置
//     let index = Partition(dataArr, left, right);

//     // 将枢纽放在正确的位置
//     Swap(dataArr, index, right - 1)

//     // 分而治之
//     QuickSort(dataArr, left, index-1);
//     QuickSort(dataArr, index + 1, right);
// }

// function Partition(dataArr, left, right) {

//     // 三数中值分割法确定枢纽
//     let pivot = median(dataArr, left, right);
//     console.log(pivot);

//     // 定义变量，用于记录当前找到的位置
//     let i = left;
//     let j = right - 1;

//     // 开始进行交换
//     while(true) {
//         while(dataArr[++i] < pivot);
//         while(dataArr[--j] > pivot);
//         if(i < j) {
//             Swap(dataArr, i, j)
//         } else {
//             console.log(i);
//             return i;
//         }
//     }

// }

// // 执行三数中值分割法的程序,取 pivot 的方法，消除了预排序输入的最坏情况
// function median(dataArr, left, right) {
//     // 取出中间的位置
//     let center = Math.floor((left + right) / 2);
//     // 判断大小，并且进行交换
//     if(dataArr[center] < dataArr[left]) {
//         Swap(dataArr, center, left);
//     }
//     if(dataArr[right] < dataArr[left]) {
//         Swap(dataArr, right, left);
//     }
//     if(dataArr[right] < dataArr[center]) {
//         Swap(dataArr, right, center);
//     }

//     // 将枢纽 center 换到 right - 1 的位置
//     Swap(dataArr, center, right - 1);

//     return dataArr[right - 1]
// }

// // 交换位置的函数
// function Swap(dataArr, i, j) {
//     let temp = dataArr[i];
//     dataArr[i] = dataArr[j];
//     dataArr[j] = temp;
// }

// QuickSort(dataArr, 0, dataArr.length - 1);
// console.log(dataArr);



// 快排实现
// let dataArr = [2,6,3,5,9,5,100,12,22];

// function QuickSort(dataArr, left, right) {
//     if (left >= right) return;

//     let index = Partition(dataArr, left, right);

//     // 分而治之
//     QuickSort(dataArr, left, index-1);
//     QuickSort(dataArr, index + 1, right);
// }

// function Partition(dataArr, left, right) {
//     let pivot = dataArr[right];
//     let pivotIndex = left;
//     for(let i = left; i < right; i++) {
//         if(dataArr[i] < pivot) {
//             Swap(dataArr,i,pivotIndex);
//             pivotIndex++;
//         }
//     }
//     Swap(dataArr,pivotIndex,right);
//     return pivotIndex;
// }

// // 交换位置的函数
// function Swap(dataArr, i, j) {
//     let temp = dataArr[i];
//     dataArr[i] = dataArr[j];
//     dataArr[j] = temp;
// }

// QuickSort(dataArr, 0, dataArr.length - 1);
// console.log(dataArr);

// https://segmentfault.com/a/1190000037611587