/*
 * @Author: Ran
 * @Date: 2021-03-06 21:45:48
 * @LastEditors: Ran
 * @LastEditTime: 2021-03-07 13:56:34
 * @FilePath: \JZoffer\仿牛客readline调试\temp.js
 * @Description: 
 * 测试方法来自：
 * https://blog.csdn.net/weixin_43984683/article/details/106474343
 */

// 测试用例：
// 6
// 0 5
// 0 1 2
// 0 2 3
// 0 4 5
// 1 4 1
// 1 5 4
// 2 3 6
// 3 4 3
// 3 5 4
// 4 5 5
// 0 0 0

function main() {
    while (document.getElementById('_text').value != '输入读完了') {
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
            const {
                length
            } = graph;
            for (let i = 0; i < length; i++) {
                dist[i] = INF;
                visited[i] = false;
            }
            dist[src] = 0;
            for (let i = 0; i < length - 1; i++) {
                const u = minDistance(dist, visited);
                // 标识顶点 src 到此顶点的距离已经确认
                visited[u] = true;
                for (let v = 0; v < length; v++) {
                    if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
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
        // for (i = 0; i < dist.length; i++) {
        //     console.log('起点SRC到第' + i + '顶点的最短距离：\n' + dist[i]);
        // }

    }
}

// 题目自带输入数组时用
function input_arr() {
    let input = readline();
    let arr = input.split(' ').map(Number);
    return arr;
}

// 有输出数据精度要求时用
function precision(num, point) {
    return num = (Math.round(num * 10 ** point) / (10 ** point)).toFixed(point);
}

// 当数据大于一行时，读完之后会在文本框减去一行
// 数据剩下一行时，读完之后就不对数据进行操作了
function readline() { //读一行，然后把其它行放回去
    var str = document.getElementById('_text').value;
    var pos = 0;
    var ASCII = ''
    for (let i = 0; i < str.length; i++) {
        ASCII += str.charCodeAt(i) + '?';
    }
    if (ASCII.indexOf('10?') != -1) {
        arr = ASCII.split('?');
        var pos = arr.indexOf('10');
        str1 = str.slice(0, pos);
        str2 = str.slice(pos + 1, str.length);
        document.getElementById('_text').value = str2;
        return str1;
    }
    document.getElementById('_text').value = '输入读完了';
    return str;
}