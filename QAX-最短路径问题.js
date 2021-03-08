/*
 * @Author: Ran
 * @Date: 2021-03-06 17:01:54
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-07 16:38:10
 * @FilePath: \JZoffer\QAX-最短路径问题.js
 * @Description: 
 * --------20210306奇安信笔试--------
 * --------具体题目描述看图片
 * 
 * 输入描述：
 * 第一行顶点数目
 * 第二行起点和终点
 * 后面各行输入邻接点的关系，三个数字为两个顶点标号及时间花费
 * 最后一行输入三个数字0
 * 
 * 测试用例：
 * 输入：
 * 6
 * 0 5
 * 0 1 2
 * 0 2 3
 * 0 4 5
 * 1 4 1
 * 1 5 4
 * 2 3 6
 * 3 4 3
 * 3 5 4
 * 4 5 5
 * 0 0 0
 * 
 * 输出：
 * 6
 * 
 * 说明：
 * V0 -- V1 -- V5 路径最短为6
 */

// 参考网页：
// https://blog.csdn.net/u012712087/article/details/77995721?utm_source=blogxgwz3
// https://www.jianshu.com/p/9f46f4d253d1
// https://blog.csdn.net/qq_34153210/article/details/104497912
// 算法的解释：https://zhuanlan.zhihu.com/p/114203860

// 可以尝试用弗洛伊德(Floyd-Warshall) 算法来做

// 解法一：迪杰斯特拉算法
// 处理输入：
// 第一行：
var point_num = parseInt(readline()); // 顶点数量

// 第二行：
var line_one = readline().split(" ");
var start_point = parseInt(line_one[0]); // 起点
var end_point = parseInt(line_one[1]); // 终点

// 利用二维数组定义邻接矩阵,point_num * point_num,全部赋初值为0
// 开始的时候遇到了深拷贝，浅拷贝的问题，对JS的二维数组初始化方式不够熟悉
var graph = new Array(); //声明一维数组        
for (var x = 0; x < point_num; x++) {
    graph[x] = new Array(); //声明二维数组
    for (var y = 0; y < point_num; y++) {
        graph[x][y] = 0; //数组初始化为0
    }
}

// 第三行开始：
// 生成对应邻接矩阵
let flag = true;
while (flag) {
    let lines = readline().split(" ");
    for (var j = 0; j < lines.length; j++) {
        if (lines[0] == '0' && lines[1] == '0' && lines[2] == '0') {
            flag = false;
            // 结尾 0 0 0 ，退出循环
        }
        graph[lines[0]][lines[1]] = parseInt(lines[2]); // 转为数字存进数组
        graph[lines[1]][lines[0]] = parseInt(lines[2]);
    }
}

console.log('起点：' + start_point);
console.log('终点：' + end_point);
console.log('邻接矩阵如下:');
console.log(graph);
// 无向图： 邻接矩阵是对称的， 若是有向图则不是对称的。
// graph = [
//     [0, 2, 3, 0, 5, 0],
//     [2, 0, 0, 0, 1, 4],
//     [3, 0, 0, 6, 0, 0],
//     [0, 6, 0, 0, 3, 4],
//     [5, 1, 0, 3, 0, 5],
//     [0, 4, 0, 4, 5, 0]
// ];
const INF = Number.MAX_SAFE_INTEGER;
// 查找最近的点
const minDistance = (dist, visited) => {
    let min = INF;
    let minIndex = -1;
    for (let v = 0; v < dist.length; v++) {
        if (visited[v] === false && dist[v] <= min) {
            min = dist[v];
            minIndex = v;
        }
    }
    return minIndex;
};
/** 
 * @param {图：邻接矩阵} graph 
 * @param {顶点索引} src 
 */
const dijkstra = (graph, src) => {
    const dist = [];
    // 用于标识顶点 src 至其他顶点的距离是否确定
    const visited = [];
    const { length } = graph;
    for (let i = 0; i < length; i++) {
        dist[i] = INF;
        visited[i] = false;
    }
    dist[src] = 0;
    for (let i = 0; i < length - 1; i++) {
        // 找出最小距离的点
        const u = minDistance(dist, visited);
        // 标识顶点 src 到此顶点的距离已经确认
        visited[u] = true;
        for (let v = 0; v < length; v++) {
            if (!visited[v] &&
                graph[u][v] !== 0 &&
                dist[u] !== INF &&
                dist[u] + graph[u][v] < dist[v]) {
                // 更新 dist
                dist[v] = dist[u] + graph[u][v];
            }
        }
    }
    return dist;
};
const dist = dijkstra(graph, start_point); // 返回值保存的是起点到所有顶点的最短距离
const min_dist = dist[end_point];
console.log('起点 ' + start_point + ' 到终点 ' + end_point + ' 的最短距离为：\n' + min_dist);




// 解法二：迪杰斯特拉算法
// 参考：https://zhuanlan.zhihu.com/p/114203860

// 处理输入：
// 第一行：
var point_num = parseInt(readline()); // 顶点数量

// 第二行：
var line_one = readline().split(" ");
var start_point = parseInt(line_one[0]); // 起点
var end_point = parseInt(line_one[1]); // 终点

// 利用二维数组定义邻接矩阵,point_num * point_num,全部赋初值为负无穷
// 开始的时候遇到了深拷贝，浅拷贝的问题，对JS的二维数组初始化方式不够熟悉
var graph = new Array(); //声明一维数组        
for (var x = 0; x < point_num; x++) {
    graph[x] = new Array(); //声明二维数组
    const INF = Number.MAX_SAFE_INTEGER;
    for (var y = 0; y < point_num; y++) {
        graph[x][y] = INF; //数组初始化为 正无穷
    }
}

// 第三行开始：
// 生成对应邻接矩阵
let flag = true;
while (flag) {
    let lines = readline().split(" ");
    for (var j = 0; j < lines.length; j++) {
        if (lines[0] == '0' && lines[1] == '0' && lines[2] == '0') {
            flag = false;
            // 结尾 0 0 0 ，退出循环
        }
        graph[lines[0]][lines[1]] = parseInt(lines[2]); // 转为数字存进数组
        graph[lines[1]][lines[0]] = parseInt(lines[2]);
    }
}

// 无向图： 邻接矩阵是对称的， 若是有向图则不是对称的。
// graph = [
//     [INF, 2, 3, INF, 5, INF],
//     [2, INF, INF, INF, 1, 4],
//     [3, INF, INF, 6, INF, INF],
//     [INF, 6, INF, INF, 3, 4],
//     [5, 1, INF, 3, INF, 5],
//     [INF, 4, INF, 4, 5, INF]
// ];

const floydWarshall = (graph) => {
    const dist = [];
    const { length } = graph;

    // 初始化dist
    for (let i = 0; i < length; i++) {
        dist[i] = [];
        for (let j = 0; j < length; j++) {
            if (i === j) {
                dist[i][j] = 0;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    // 核心操作，判断 k 是否是 i 到 j 可能的中点
    for (let k = 0; k < length; k++) {
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }
    return dist;
}
console.log(floydWarshall(graph)[start_point][end_point]); // 可以求出任意两个点之间的最短路径