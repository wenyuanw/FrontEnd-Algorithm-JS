/*
 * @Author: Ran
 * @Date: 2021-07-11 12:54:26
 * @LastEditTime: 2021-07-11 13:38:01
 * @FilePath: \FrontEnd-Algorithm-JS\jianzhiOffer\JZ54-字符流中第一个不重复的字符.js
 * @Description: 
 * 请实现一个函数用来找出字符流中第一个只出现一次的字符。
 * 例如，当从字符流中只读出前两个字符"go"时，第一个只出现一次的字符是"g"。
 * 当从该字符流中读出前六个字符“google"时，第一个只出现一次的字符是"l"。 
 */
//Init module if you need
let map = []
let onceMap = []
let caseoutStr = ''

function Init() {
    map = []
}
//Insert one char from stringstream
function Insert(ch) {
    if (map.includes(ch) === false) {
        let pos = onceMap.indexOf(ch)
        if (pos === -1) {
            onceMap.push(ch)
        } else {
            onceMap.splice(pos, 1)
            map.push(ch)
        }
    }
}
//return the first appearence once char in current stringstream
function FirstAppearingOnce() {
    if (onceMap.length === 0) {
        return '#'
    } else {
        return onceMap[0]
    }
}

let container = {};

function Init() {
    container = {};
}

function Insert(ch) {
    container[ch] = container[ch] ? container[ch] + 1 : 1;
}

function FirstAppearingOnce() {
    for (const key in container) {
        if (container[key] === 1) {
            return key;
        }
    }
    return '#';
}