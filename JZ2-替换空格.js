/*
 * @Author: Ran
 * @Date: 2021-01-12 10:26:22
 * @LastEditors: Ran
 * @LastEditTime: 2021-01-12 10:28:19
 * @FilePath: \Nodef:\FrontEndLearning\FE_Learning\JZoffer\JZ2-替换空格.js
 * @Description: 
 *  请实现一个函数，将一个字符串中的每个空格替换成“%20”。
 *  例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

//  解法一:正则表达式
function replaceSpace(str) {
    return str.replace(/ /g, '%20');
}
console.log(replaceSpace('We Are Happy.'));


var replaceSpace = function(s) {
    s = s.split('');
   for(let i=0;i<s.length;i++){
       if(s[i] == ' '){
           s[i] ='%20'
       }
   }
   return s.join('')
};

// 补充第二种方法 可以不要数组 谢谢@想见青山
var replaceSpace = function(s) {
  return  s.split(' ').join("%20");
};

// 作者：fannie-5
// 链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/javascriptliang-chong-jie-ti-fang-shi-by-ttkp/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 若不考察算法思维，我们其实可以使用如下解法快速完成：
// replace 或 replaceAll
s = s.replace(/ /g, '%20')
s = s.replaceAll(' ', '%20')

// split + join
s = s.split(' ').join('%20');

// encodeURIComponent
encodeURIComponent(s)

// 暴破 ...等等

// 作者：demigodliu
// 链接：https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/solution/tu-jie-guan-fang-tui-jian-ti-jie-ti-huan-3l74/
// 来源：力扣（LeetCode）
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。