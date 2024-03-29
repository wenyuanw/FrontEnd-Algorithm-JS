/*
 * @Author: Ran
 * @Date: 2021-04-03 09:35:36
 * @LastEditTime: 2021-04-03 11:32:40
 * @FilePath: \JZoffer\jianzhiOffer\JZ33-丑数.js
 * @Description: 
 * 把只包含质因子2、3和5的数称作丑数（Ugly Number）。
 * 例如6、8都是丑数，但14不是，因为它包含质因子7。 
 * 习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
 */
// 创建数组保存已经找到的抽数，用空间换时间的解法：
/* 根据丑数的定义， 丑数应该是另一个丑数诚意2、 3 或者5的结果（ 1 除外）。
因此我们可以创建一个数组， 里面的数字是排好序的丑数， 每个丑数都是前面的
丑数乘以2、 3、 或者5得到的。 */
function GetUglyNumber_Solution(index) {
    if (index < 7) return index;
    let uglyNums = [1];
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    while (uglyNums.length < index) {
        let min = Math.min(uglyNums[p2] * 2, uglyNums[p3] * 3, uglyNums[p5] * 5);
        uglyNums.push(min);
        if (uglyNums[p2] * 2 === min) p2++;
        if (uglyNums[p3] * 3 === min) p3++;
        if (uglyNums[p5] * 5 === min) p5++;
    }
    return uglyNums[index - 1];
}

/* 官方题解里提到的三个指针p2，p3，p5，但是没有说明其含义，实际上pi的含义是有资格同i相乘的最小丑数的位置。
这里资格指的是：如果一个丑数nums[pi]通过乘以i可以得到下一个丑数，那么这个丑数nums[pi]就永远失去了同i相乘的资格（没有必要再乘了），
我们把pi++让nums[pi]指向下一个丑数即可。
不懂的话举例说明：
一开始，丑数只有{1}，1可以同2，3，5相乘，取最小的1×2=2添加到丑数序列中。
现在丑数中有{1，2}，在上一步中，1已经同2相乘过了，所以今后没必要再比较1×2了，我们说1失去了同2相乘的资格。
现在1有与3，5相乘的资格，2有与2，3，5相乘的资格，但是2×3和2×5是没必要比较的，因为有比它更小的1可以同3，5相乘，所以我们只需要比较1×3，1×5，2×2。
依此类推，每次我们都分别比较有资格同2，3，5相乘的最小丑数，选择最小的那个作为下一个丑数，
假设选择到的这个丑数是同i（i=2，3，5）相乘得到的，所以它失去了同i相乘的资格，把对应的pi++，让pi指向下一个丑数即可。

作者：zzxn
链接：https://leetcode-cn.com/problems/ugly-number-ii/solution/san-zhi-zhen-fang-fa-de-li-jie-fang-shi-by-zzxn/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
 */

function GetUglyNumber_Solution(index) {
    if (index < 7) return index;
    let uglyNums = [1];
    let p2 = 0;
    let p3 = 0;
    let p5 = 0;
    while (uglyNums.length < index) {
        let min = Math.min(uglyNums[p2] * 2, uglyNums[p3] * 3, uglyNums[p5] * 5);
        uglyNums.push(min);
        if (uglyNums[p2] * 2 === min) p2++;
        if (uglyNums[p3] * 3 === min) p3++;
        if (uglyNums[p5] * 5 === min) p5++;
    }
    return uglyNums[index - 1];
}

// 略微改动
// 有些数的素因子只有 3，5，7，请设计一个算法找出第 k 个数。注意，不是必须有这些素因子，而是必须不包含其他的素因子。例如，前几个数按顺序应该是 1，3，5，7，9，15，21。

/**
 * @param {number} k
 * @return {number}
 */
var getKthMagicNumber = function(k) {
    let uglyNums = [1];
    let p3 = 0;
    let p5 = 0;
    let p7 = 0;
    while (uglyNums.length < k) {
        let min = Math.min(uglyNums[p3] * 3, uglyNums[p5] * 5, uglyNums[p7] * 7);
        uglyNums.push(min);
        if (uglyNums[p3] * 3 === min) p3++;
        if (uglyNums[p5] * 5 === min) p5++;
        if (uglyNums[p7] * 7 === min) p7++;
    }
    return uglyNums[k - 1];
};

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/get-kth-magic-number-lcci
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 暴力解法，对每一个数都进行判断，会超时。
function GetUglyNumber_Solution(index) {
    if (index < 7) return index;
    let count = 6;
    let start = 8;
    while (true) {
        if (isUgly(start)) {
            count++;
            if (count === index) return start;
        }
        start++;
    }
}

function isUgly(num) {
    while (num % 2 === 0) {
        num /= 2;
    }
    while (num % 3 === 0) {
        num /= 3;
    }
    while (num % 5 === 0) {
        num /= 5;
    }
    return num === 1 ? true : false;
}

module.exports = {
    GetUglyNumber_Solution: GetUglyNumber_Solution
};


/* 
通俗易懂的解释：
首先从丑数的定义我们知道，一个丑数的因子只有2,3,5，那么丑数p = 2 ^ x * 3 ^ y * 5 ^ z，
换句话说一个丑数一定由另一个丑数乘以2或者乘以3或者乘以5得到，那么我们从1开始乘以2,3,5，
就得到2,3,5三个丑数，在从这三个丑数出发乘以2,3,5就得到4，6,10,6，9,15,10,15,25九个丑数，
我们发现这种方***得到重复的丑数，而且我们题目要求第N个丑数，这样的方法得到的丑数也是无序的。
那么我们可以维护三个队列：
（1）丑数数组： 1
乘以2的队列：2
乘以3的队列：3
乘以5的队列：5
选择三个队列头最小的数2加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
（2）丑数数组：1,2
乘以2的队列：4
乘以3的队列：3，6
乘以5的队列：5，10
选择三个队列头最小的数3加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
（3）丑数数组：1,2,3
乘以2的队列：4,6
乘以3的队列：6,9
乘以5的队列：5,10,15
选择三个队列头里最小的数4加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
（4）丑数数组：1,2,3,4
乘以2的队列：6，8
乘以3的队列：6,9,12
乘以5的队列：5,10,15,20
选择三个队列头里最小的数5加入丑数数组，同时将该最小的数乘以2,3,5放入三个队列；
（5）丑数数组：1,2,3,4,5
乘以2的队列：6,8,10，
乘以3的队列：6,9,12,15
乘以5的队列：10,15,20,25
选择三个队列头里最小的数6加入丑数数组，但我们发现，有两个队列头都为6，所以我们弹出两个队列头，同时将12,18,30放入三个队列；
……………………
疑问：
1.为什么分三个队列？
丑数数组里的数一定是有序的，因为我们是从丑数数组里的数乘以2,3,5选出的最小数，一定比以前未乘以2,3,5大，
同时对于三个队列内部，按先后顺序乘以2,3,5分别放入，所以同一个队列内部也是有序的；
2.为什么比较三个队列头部最小的数放入丑数数组？
因为三个队列是有序的，所以取出三个头中最小的，等同于找到了三个队列所有数中最小的。
实现思路：
我们没有必要维护三个队列，只需要记录三个指针显示到达哪一步；“|”表示指针,arr表示丑数数组；
（1）1
|2
|3
|5
目前指针指向0,0,0，队列头arr[0] * 2 = 2,  arr[0] * 3 = 3,  arr[0] * 5 = 5
（2）1 2
2 |4
|3 6
|5 10
目前指针指向1,0,0，队列头arr[1] * 2 = 4,  arr[0] * 3 = 3, arr[0] * 5 = 5
（3）1 2 3
2| 4 6
3 |6 9
|5 10 15
目前指针指向1,1,0，队列头arr[1] * 2 = 4,  arr[1] * 3 = 6, arr[0] * 5 = 5
……………… */