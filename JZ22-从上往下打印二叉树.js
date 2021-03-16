/* 
20210316
题目描述：
从上往下打印出二叉树的每个节点，同层节点从左至右打印。
*/
// 参考：https://github.com/dongyuanxin/blog/blob/master/docs/%E5%89%91%E6%8C%87offer%E5%88%B7%E9%A2%98%E7%AC%94%E8%AE%B0/07.%E6%A0%91/06.%E4%BA%8C%E5%8F%89%E6%A0%91%E5%B1%82%E5%BA%8F%E9%81%8D%E5%8E%86.md

// 思路
// 借助队列这种“先入先出”的线性数据结构即可。
// 每次访问队列中的元素的时候，输出它的值，并且将其非空左右节点放入队列中。
// 直到队列为空，停止输出，结束函数循环即可。

function PrintFromTopToBottom(root)
{   
    let queue = [];
    let res = [];
    if(!root) return false;
    
    queue.push(root);
    while(queue.length) {
        // 每次访问队列中的元素的时候，输出它的值
        let node = queue.shift();
        res.push(node.val);
        // 并且将其非空左右节点放入队列中
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }
    // 直到队列为空，停止输出，结束函数循环即可。
    return res;
}

/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
} */
// function PrintFromTopToBottom(root)
// {
//     // write code here
//     let resArr = [];
//     let leftQueue = [];
//     let rightQueue = [];

//     resArr.push(root.val);

//     leftQueue = PrintFromTopToBottom(root.left);
//     rightQueue = PrintFromTopToBottom(root.right);

//     while() {
//         if() {
//         resArr.push(leftQueue.shift());  
//         }
//         resArr.push(rightQueue.shift());
//     }

// }

// function PrintFromTopToBottom(root)
// {
//     // write code here
//     let resArr = [];

//     if(!root) return null;

//     resArr.push(root.val);
    
//     while() {
//         let left = root.left;
//         let right = root.right;

//         left = left.left;
//         right = left.right;
//         resArr.push(left.val);
//         resArr.push(right.val);

//         left = right.left;
//         right = right.right;
//         resArr.push(left.val);
//         resArr.push(right.val);
//     }


//     resArr.push(left.val);
//     resArr.push(right.val);

//     return resArr;

// }