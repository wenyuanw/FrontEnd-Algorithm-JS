/* 
20210316
题目描述：
给定一个数组，找出其中最小的K个数。
例如数组元素是4,5,1,6,2,7,3,8这8个数字，则最小的4个数字是1,2,3,4。
如果K>数组的长度，那么返回一个空的数组
*/

// 要用堆排序？？可是我不会啊。。。：
function GetLeastNumbers_Solution(input, k)
{
    if(k > input.length) return [];
    let sortArr = [];
    
//   对输入进行升序排序
    
    
    return sortArr.slice(0, k);
}


// 直接用 api 当然是不好的。。。
function GetLeastNumbers_Solution(input, k)
{
    if(k > input.length) return [];
    let sortArr = [];
    
//   对输入进行升序排序
    sortArr = input.sort(function(a, b) { return a - b })
    
    return sortArr.slice(0, k);
}