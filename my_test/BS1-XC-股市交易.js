/* 
题目描述：

最近股市交易火热，每个人都希望能从中取得最大化的收益，
那么假设我们能知道未来某段时间内的某只股票的每日股价，
并且在这段时间内你能且只能买入和卖出各一次，
你能不能通过计算得出能获得最大收益的买入和卖出时间，
比如未来5天内的股价分别是[29,30,35,20,90]，
收益定义为卖出价减去买入价，比如，29买入，35卖出，
则收益为6，那么在第四天20的时候买入，并在第五天90卖出是最优的组合，
如果任意组合下来的结果都是亏损的，则输出[]数组。 

输入描述
数组形式的字符串，表示未来某段时间内的股价，假设都为整数

输出描述
数组形式的字符串，表示从买入那天的股价一直到卖出那天的股价之间的所有股价

样例输入
[20,18,29,17,22,21,30,19]
样例输出
[17,22,21,30]

提示
假定答案是唯一的，不存在多种情况得到相同最大收益的情况

*/

// 注意输出的也是字符串
// []
// let input = 

let prices = '[20,18,29,17,22,21,30,19]'
prices = prices.replace('[','');
prices = prices.replace(']','');

prices = prices.split(',')
for(i=0;i<prices.length;i++) {
    prices[i] = parseInt(prices[i]);
}
let arr = []

function maxProfit(prices) {
    let res = 0;
    let buy = Number.MAX_VALUE;

    for (let price of prices) {
        buy = Math.min(buy, price)
        res = Math.max(res, price - buy);
    }
    buyIndex = prices.indexOf(buy)
    let saleIndex = prices.indexOf(buy+res)
    let resStr = prices.slice(buyIndex,saleIndex+1).join(',');
    return '[' + resStr +']';
}

console.log(maxProfit(prices));


let prices = read_line();
prices = prices.replace('[','');
prices = prices.replace(']','');

prices = prices.split(',')
for(i=0;i<prices.length;i++) {
    prices[i] = parseInt(prices[i]);
}
let arr = []

function maxProfit(prices) {
    let res = 0;
    let buy = Number.MAX_VALUE;

    for (let price of prices) {
        buy = Math.min(buy, price)
        res = Math.max(res, price - buy);
    }
    buyIndex = prices.indexOf(buy)
    let saleIndex = prices.indexOf(buy+res)
    let resStr = prices.slice(buyIndex,saleIndex+1).join(',');
    return '[' + resStr +']';
}

console.log(maxProfit(prices));


let prices = read_line();
prices = prices.replace('[','');
prices = prices.replace(']','');

prices = prices.split(',')
for(i=0;i<prices.length;i++) {
    prices[i] = parseInt(prices[i]);
}
var max=0;
var start =0;
var dis = 0;

for(var i=0;i<prices.length;i++) {
    for(var j = i+1; j<prices.length;j++) {
        var cha = prices[j] - prices[i];
        if(cha > max) {
            max = cha;
            start = i;
            dis = j-i;
        }
    }
}

var newarr = []
if(start===0){
    console.log('[]');
} else {
    for (var z = start;z<start+dis+1;z++) {
        newarr.push(prices[z])
    }
    newarr = newarr.join(',')
    newarr = '[' + newarr +']'

    console.log(newarr);
}


